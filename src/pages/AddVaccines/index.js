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
    setIsLoading(true);
    data.id = myContext.userToken;
    await app.currentUser.functions.createVaccine(data);
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
              <View style={styles.inputRow}>
                <IconButton
                  style={styles.rowIcon}
                  icon="image"
                  color="#2b2d42"
                />
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="#8d99ae"
                  placeholder="Selecione uma Imagem"
                  value={!!file ? file.filename : ''}
                  disabled
                />
                <IconButton
                  style={styles.iconButton}
                  icon="camera"
                  color="#edf2f4"
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
                  color="#edf2f4"
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

              <View style={styles.inputRow}>
                <IconButton
                  style={styles.rowIcon}
                  icon="needle"
                  color="#2b2d42"
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Nome da Vacina"
                  value={name}
                  onChangeText={setName}
                  outlineColor="#2B2D42"
                  selectionColor="#8d99ae"
                  activeOutlineColor="#ef233c"
                  underlineColor="#2B2D42"
                  placeholderTextColor="#8d99ae"
                />
              </View>
              <View style={styles.inputRow}>
                <IconButton
                  style={styles.rowIcon}
                  icon="package-variant"
                  color="#2b2d42"
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Lote"
                  value={batch}
                  onChangeText={setBatch}
                  outlineColor="#2B2D42"
                  selectionColor="#8d99ae"
                  activeOutlineColor="#ef233c"
                  underlineColor="#2B2D42"
                  placeholderTextColor="#8d99ae"
                />
              </View>
              <View style={styles.inputRow}>
                <IconButton
                  style={styles.rowIcon}
                  icon="map-marker"
                  color="#2b2d42"
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Local"
                  value={address}
                  onChangeText={setAddress}
                  outlineColor="#2B2D42"
                  selectionColor="#8d99ae"
                  activeOutlineColor="#ef233c"
                  underlineColor="#2B2D42"
                  placeholderTextColor="#8d99ae"
                />
              </View>
              <View style={styles.inputRow}>
                <IconButton
                  style={styles.rowIcon}
                  icon="calendar"
                  color="#2b2d42"
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Data"
                  value={date}
                  onChangeText={setDate}
                  outlineColor="#2B2D42"
                  selectionColor="#8d99ae"
                  activeOutlineColor="#ef233c"
                  underlineColor="#2B2D42"
                  placeholderTextColor="#8d99ae"
                />
              </View>
              <View style={styles.inputRow}>
                <IconButton
                  style={styles.rowIcon}
                  icon="pencil"
                  color="#2b2d42"
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Anotações"
                  value={details}
                  onChangeText={setDetails}
                  multiline={true}
                  numberOfLines={12}
                  outlineColor="#2B2D42"
                  selectionColor="#8d99ae"
                  activeOutlineColor="#ef233c"
                  underlineColor="#2B2D42"
                  placeholderTextColor="#8d99ae"
                />
              </View>
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
