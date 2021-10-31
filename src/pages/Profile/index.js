import React, {useState, useEffect, useContext} from 'react';
import SecureStore from 'react-native-sensitive-info';
import AppContext from '../../components/AppContext';
import {
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Button,
  Text,
  TextInput,
  IconButton,
  Checkbox,
} from 'react-native-paper';
import moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';
import {getRealmApp} from '../../services/realm-config';
import Realm from 'realm';
import DatePicker from 'react-native-date-picker';
import styles from './styles.js';

export default function Profile({navigation}) {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState(new Date());
  const [hasHealthInsurance, setHealthInsurance] = useState(false);
  const app = getRealmApp();
  const myContext = useContext(AppContext);

  useEffect(() => {
    const refreshCustomData = async () => {
      const customData = await app.currentUser.refreshCustomData();
      console.log(customData);
      if (!!customData) {
        if (customData.name) {
          setName(customData.name);
        }
        if (customData.birth) {
          setBirth(new Date(customData.birth));
        }
        if (customData.hasHealthInsurance) {
          setHealthInsurance(customData.hasHealthInsurance);
        }
      }
    };
    refreshCustomData();
  }, []);

  const editProfile = async data => {
    const user = app.currentUser;
    data.id = myContext.userToken;
    await user.functions.updateUserProfile(data);
    await user.refreshCustomData();
    console.log(user.customData);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={{flex: 1}}>
            <Text style={styles.headerText}>Meu Perfil</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Nome"
              value={name}
              onChangeText={setName}
            />
            <View style={styles.container}>
              <Text style={styles.label}>Data de Nascimento:</Text>
              <DatePicker
                style={styles.textInput}
                mode="date"
                textColor="#000"
                date={birth}
                androidVariant="nativeAndroid"
                onDateChange={birth => {
                  setBirth(birth);
                }}
              />
            </View>

            <View style={styles.buttonContainer}>
              <Checkbox
                style={styles.buttonContainer}
                status={hasHealthInsurance ? 'checked' : 'unchecked'}
                onPress={() => {
                  setHealthInsurance(!hasHealthInsurance);
                }}
              />
              <Text style={styles.buttonContainer}>
                Possuí convenio médico?
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.button}
                onPress={() =>
                  editProfile({
                    name,
                    birth,
                    hasHealthInsurance,
                  })
                }>
                Salvar Alterações
              </Button>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
