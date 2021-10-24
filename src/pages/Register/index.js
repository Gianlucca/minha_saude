import * as React from 'react';
import SecureStore from 'react-native-sensitive-info';
import AppContext from '../components/AppContext';
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
import {getRealmApp} from '../services/realm-config';
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
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 200, height: 220}}
              source={require('../../assets/logo.png')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TextInput
              style={{
                flex: 1,
                marginLeft: 15,
                marginRight: 15,
                marginTop: 15,
              }}
              placeholder="Nome"
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
              placeholder="Data Nasc."
              value={birth}
              onChangeText={setBirth}
            />
          </View>
          <TextInput
            style={{
              marginLeft: 15,
              marginRight: 15,
              marginTop: 15,
            }}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={{
              marginLeft: 15,
              marginRight: 15,
              marginTop: 15,
            }}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={{
              marginLeft: 15,
              marginRight: 15,
              marginTop: 15,
            }}
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Checkbox
              style={{justifyContent: 'center', alignItems: 'center'}}
              status={hasHealthInsurance ? 'checked' : 'unchecked'}
              onPress={() => {
                setHealthInsurance(!hasHealthInsurance);
              }}
            />
            <Text style={{alignSelf: 'center', textAlign: 'center'}}>
              Possuí convenio médico?
            </Text>
          </View>
          <Button
            style={{
              marginTop: 15,
            }}
            onPress={() => navigation.goBack()}>
            Voltar
          </Button>
          <Button
            style={{
              marginTop: 15,
            }}
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
