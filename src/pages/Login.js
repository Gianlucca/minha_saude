import * as React from 'react';
import SecureStore from 'react-native-sensitive-info';
import AppContext from '../components/AppContext';
import {View, Image} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';

export default function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const myContext = React.useContext(AppContext);

  const logInAsync = async data => {
    //log in
    //data.username
    //data.password
    // In a production app, we need to send some data (usually username, password) to server and get a token
    // We will also need to handle errors if sign in failed
    myContext.setIsSignout(false);
    myContext.setUserToken('myToken');
    await SecureStore.setItem('userToken', 'myToken', {});
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
