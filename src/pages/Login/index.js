import * as React from 'react';
import SecureStore from 'react-native-sensitive-info';
import AppContext from '../components/AppContext';
import {View, Image} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {getRealmApp} from '../services/realm-config';
import Realm from 'realm';
import styles from './styles.js';

export default function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const myContext = React.useContext(AppContext);
  const app = getRealmApp();

  React.useEffect(() => {
    async function deleteToken() {
      await SecureStore.deleteItem('userToken', {});
      myContext.setUserToken('');
    }
    deleteToken();
  }, []);

  const logInAsync = async data => {
    const credentials = Realm.Credentials.emailPassword(
      data.email,
      data.password,
    );
    try {
      const user = await app.logIn(credentials);
      ('');
      console.log('Successfully logged in!', user.id);
      myContext.setIsSignout(false);
      myContext.setUserToken(`${user.id}`);
      await SecureStore.setItem('userToken', `${user.id}`, {});
      return user;
    } catch (err) {
      console.error('Failed to log in', err.message);
    }
  };

  return (
    <View style={{}}>
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
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          style={{
            marginTop: 15,
          }}
          onPress={() => logInAsync({email, password})}>
          Entrar
        </Button>
        <Button
          style={{
            marginTop: 15,
          }}
          onPress={() => navigation.navigate('Register')}>
          Cadastre-se
        </Button>
      </View>
    </View>
  );
}

//<Button
//	style={{
//		marginTop: 15,
//	}}
//	onPress={() => navigation.navigate('ForgotPassword')}>
//	Esqueci minha senha
//</Button>
