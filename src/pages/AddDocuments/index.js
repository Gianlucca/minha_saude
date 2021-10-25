import React, {useState} from 'react';
import {Button, Text, TextInput, IconButton} from 'react-native-paper';
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
          <View style={{flex: 1}}>
            <Text style={styles.headerText}>Cadastrar novo Documento</Text>
            <View style={styles.container}>
              <TextInput
                style={styles.textInput}
                placeholder="Selecione uma Imagem"
                value={file}
                onChangeText={setFile}
              />
              <IconButton
                style={styles.iconButton}
                icon="plus"
                color="#000"
                size={30}
              />
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Data do documento"
              value={date}
              onChangeText={setDate}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Categoria Documento"
              value={category}
              onChangeText={setCategory}
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
              <Button style={styles.button} onPress={() => navigation.goBack()}>
                Voltar
              </Button>
              <Button
                style={styles.button}
                onPress={() =>
                  createDocument({file, title, date, category, details})
                }>
                Cadastrar Documento
              </Button>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
