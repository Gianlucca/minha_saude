import * as React from 'react';
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

export default function Register({navigation}) {
  const myContext = React.useContext(AppContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const app = getRealmApp();

  const registerAsync = async data => {
    try {
      await app.emailPasswordAuth.registerUser(data.email, data.password);
      navigation.navigate('Login');
      //console.log(user);
      //console.log(data);
      //myContext.setIsSignout(false);
      //myContext.setUserToken(`${user.id}`);
      //await SecureStore.setItem('userToken', `${user.id}`, {});
      //return user;
    } catch (err) {
      console.error('Failed to log in', err.message);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.buttonContainer}>
            <Image
              style={styles.image}
              source={require('../../../assets/logo.png')}
            />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.textInput}
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={() => navigation.goBack()}>
              Voltar
            </Button>
            <Button
              style={styles.button}
              onPress={() => registerAsync({email, password, confirmPassword})}>
              Cadastrar
            </Button>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
