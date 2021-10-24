import React, {useState} from 'react';
import {Button, Text, TextInput, Checkbox} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {getRealmApp} from '../../services/realm-config';
import {
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles.js';

export default function AddDocuments({navigation}) {
  const [file, setFile] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [details, setDetails] = useState('');
  const app = getRealmApp();

  const createDocument = async data => {
    //create new document
    console.log(data);
    navigation.navigate('Documents');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <Text>Cadastrar novo Documento</Text>
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
              placeholder="Selecione uma Imagem"
              value={file}
              onChangeText={setFile}
            />
            <TextInput
              style={{
                flex: 1,
                marginLeft: 15,
                marginRight: 15,
                marginTop: 15,
              }}
              placeholder="Data do documento"
              value={date}
              onChangeText={setDate}
            />
          </View>
          <TextInput //select
            style={{
              marginLeft: 15,
              marginRight: 15,
              marginTop: 15,
            }}
            placeholder="Categoria Documento"
            value={category}
            onChangeText={setCategory}
          />
          <TextInput
            style={{
              marginLeft: 15,
              marginRight: 15,
              marginTop: 15,
            }}
            placeholder="Anotações"
            value={details}
            onChangeText={setDetails}
            secureTextEntry
          />
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
              createDocument({file, title, date, category, details})
            }>
            Cadastrar Documento
          </Button>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
