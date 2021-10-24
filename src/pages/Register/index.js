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
  const [name, setName] = React.useState('');
  const [birth, setBirth] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [hasHealthInsurance, setHealthInsurance] = React.useState(false);
  const app = getRealmApp();

  const registerAsync = async data => {
    // In a production app, we need to send user data to server and get a token
    // We will also need to handle errors if sign up failed
    // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
    // In the example, we'll use a dummy token

    try {
      //verify if email exists
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
          <View style={styles.container}>
            <TextInput
              style={styles.textInput}
              placeholder="Nome"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Data Nasc."
              value={birth}
              onChangeText={setBirth}
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
            <Checkbox
              style={styles.buttonContainer}
              status={hasHealthInsurance ? 'checked' : 'unchecked'}
              onPress={() => {
                setHealthInsurance(!hasHealthInsurance);
              }}
            />
            <Text style={styles.buttonContainer}>Possuí convenio médico?</Text>
          </View>
          <Button style={styles.button} onPress={() => navigation.goBack()}>
            Voltar
          </Button>
          <Button
            style={styles.button}
            onPress={() =>
              registerAsync({name, birth, email, password, confirmPassword})
            }>
            Cadastrar
          </Button>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
