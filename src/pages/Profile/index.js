import React from 'react';
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
import {Button, Text, TextInput, Checkbox} from 'react-native-paper';

import {ScrollView} from 'react-native-gesture-handler';
import {getRealmApp} from '../../services/realm-config';
import Realm from 'realm';
import styles from './styles.js';

export default function Profile({navigation}) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [birth, setBirth] = React.useState('');
  const [hasHealthInsurance, setHealthInsurance] = React.useState(false);
  const app = getRealmApp();
  const myContext = React.useContext(AppContext);

  const editProfile = async data => {
    console.log(data);
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
            <TextInput
              style={styles.textInput}
              placeholder="Data de Nascimento"
              value={birth}
              onChangeText={setBirth}
            />
            <TextInput
              style={styles.textInput}
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
            />

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
                    email,
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
