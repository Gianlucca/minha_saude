import * as React from 'react';
import SecureStore from 'react-native-sensitive-info';
import AppContext from '../../components/AppContext';
import {View, Image} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {getRealmApp} from '../../services/realm-config';
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
      console.log('Successfully logged in!');
      console.log(user.id);
      const customData = await app.currentUser.refreshCustomData();
      console.log(customData);
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
      <View style={styles.buttonContainer}>
        <Image
          style={{width: 200, height: 220}}
          source={require('../../../assets/logo.png')}
        />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="E-mail"
        value={email}
        outlineColor="#2B2D42"
        selectionColor="#8d99ae"
        activeOutlineColor="#ef233c"
        underlineColor="#2B2D42"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Senha"
        value={password}
        outlineColor="#2B2D42"
        selectionColor="#8d99ae"
        activeOutlineColor="#ef233c"
        underlineColor="#2B2D42"
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('Register')}>
          Cadastre-se
        </Button>
        <Button
          style={styles.button}
          onPress={() => logInAsync({email, password})}>
          Entrar
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
