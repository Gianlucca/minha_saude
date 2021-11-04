import React, {useState, useContext} from 'react';
import {Button, Text, TextInput, IconButton} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles.js';
import AppContext from '../../components/AppContext';
import LoadingComponent from '../../components/LoadingComponent';
import {getRealmApp} from '../../services/realm-config';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function addMedicines({navigation}) {
  const [file, setFile] = useState({filename: '', base64: ''});
  const [name, setName] = useState('');
  const [expDate, setExpDate] = useState('');
  const [dosage, setDosage] = useState('');
  const [howManyPills, setHowManyPills] = useState('');
  const [details, setDetails] = useState('');
  const myContext = useContext(AppContext);
  const app = getRealmApp();
  const [isLoading, setIsLoading] = useState(false);

  const createMedicine = async data => {
    //create new medicine
    setIsLoading(true);
    data.id = myContext.userToken;
    await app.currentUser.functions.createMedicine(data);
    console.log(data);
    navigation.navigate('Medicines');
    setIsLoading(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={{flex: 1}}>
              <Text style={styles.headerText}>Cadastrar novo Remédio</Text>
              <View style={styles.container}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Selecione uma Imagem"
                  value={!!file ? file.filename : ''}
                  disabled
                />
                <IconButton
                  style={styles.iconButton}
                  icon="camera"
                  color="#000"
                  size={30}
                  onPress={() =>
                    launchCamera(
                      {
                        mediaType: 'photo',
                        cameraType: 'back',
                        includeBase64: true,
                      },
                      ({assets}) => {
                        if (!!assets) {
                          setFile({
                            filename: assets[0].fileName,
                            base64: assets[0].base64,
                          });
                        }
                      },
                    )
                  }
                />
                <IconButton
                  style={styles.iconButton}
                  icon="file"
                  color="#000"
                  size={30}
                  onPress={() =>
                    launchImageLibrary(
                      {
                        mediaType: 'photo',
                        includeBase64: true,
                        selectionLimit: 1,
                      },
                      ({assets}) => {
                        if (!!assets) {
                          setFile({
                            filename: assets[0].fileName,
                            base64: assets[0].base64,
                          });
                        }
                      },
                    )
                  }
                />
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="Nome do Remédio"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={{
                  flex: 1,
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 15,
                }}
                placeholder="Dosagem"
                value={dosage}
                onChangeText={setDosage}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Quantidade de comprimidos"
                value={howManyPills}
                onChangeText={setHowManyPills}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Data de Validade"
                value={expDate}
                onChangeText={setExpDate}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Anotações"
                value={details}
                onChangeText={setDetails}
                multiline={true}
                numberOfLines={6}
              />
              <View style={styles.buttonContainer}>
                <Button
                  style={styles.button}
                  onPress={() => navigation.goBack()}>
                  Voltar
                </Button>
                <Button
                  style={styles.button}
                  onPress={() =>
                    createMedicine({
                      file,
                      name,
                      dosage,
                      howManyPills,
                      expDate,
                      details,
                    })
                  }>
                  Cadastrar Remédio
                </Button>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      )}
    </KeyboardAvoidingView>
  );
}
