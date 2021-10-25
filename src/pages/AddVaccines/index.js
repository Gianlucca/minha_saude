import React, {useState} from 'react';
import {Button, Text, TextInput, IconButton} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {getRealmApp} from '../../services/realm-config';
import {
  View,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles.js';

export default function AddVaccines({navigation}) {
  const [file, setFile] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [batch, setBatch] = useState('');
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');
  const app = getRealmApp();

  const createVaccine = async data => {
    //create new vaccine
    console.log(data);
    navigation.navigate('Vaccines');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={{flex: 1}}>
            <Text style={styles.headerText}>Cadastrar nova Vacina</Text>
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
              <Button style={styles.button} onPress={() => navigation.goBack()}>
                Voltar
              </Button>
              <Button
                style={styles.button}
                onPress={() =>
                  createVaccine({name, date, batch, address, details})
                }>
                Cadastrar Vacina
              </Button>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
