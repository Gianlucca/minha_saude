import React, {useState, useContext} from 'react';
import {Button, Text, TextInput, IconButton} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {
  View,
  KeyboardAvoidingView,
  Keyboard,
  Image,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles.js';
import AppContext from '../../components/AppContext';
import LoadingComponent from '../../components/LoadingComponent';
import {getRealmApp} from '../../services/realm-config';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function AddVaccines({navigation}) {
  const [file, setFile] = useState({filename: '', base64: ''});
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [batch, setBatch] = useState('');
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');
  const myContext = useContext(AppContext);
  const app = getRealmApp();
  const [isLoading, setIsLoading] = useState(false);

  const createVaccine = async data => {
    //create new vaccine
    setIsLoading(true);
    data.id = myContext.userToken;
    await app.currentUser.functions.createVaccine(data);
    console.log(data);
    navigation.navigate('Vaccines');
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
              <Text style={styles.headerText}>Cadastrar nova Vacina</Text>
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
                placeholder="Nome da Vacina"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Lote"
                value={batch}
                onChangeText={setBatch}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Local"
                value={address}
                onChangeText={setAddress}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Data"
                value={date}
                onChangeText={setDate}
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
                    createVaccine({file, name, date, batch, address, details})
                  }>
                  Cadastrar Vacina
                </Button>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      )}
    </KeyboardAvoidingView>
  );
}
