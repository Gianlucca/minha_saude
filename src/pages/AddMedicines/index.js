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

export default function AddVaccines({navigation}) {
  const [file, setFile] = useState('');
  const [name, setName] = useState('');
  const [expDate, setExpDate] = useState('');
  const [dosage, setDosage] = useState('');
  const [howManyPills, setHowManyPills] = useState('');
  const [details, setDetails] = useState('');
  const app = getRealmApp();

  const createMedicine = async data => {
    //create new medicine
    console.log(data);
    navigation.navigate('Medicines');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={{flex: 1}}>
            <Text style={styles.headerText}>Cadastrar novo Remédio</Text>
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
              placeholder="Nome do Remédio"
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
              placeholder="Dosagem"
              value={dosage}
              onChangeText={setDosage}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Quantidade de comprimidos"
              value={howManyPills}
              onChangeText={setHowManyPills}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Data de Validade"
              value={expDate}
              onChangeText={setExpDate}
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
                  createMedicine({
                    file,
                    name,
                    dosage,
                    howManyPills,
                    expDate,
                    details,
                  })
                }>
                Cadastrar Remédio
              </Button>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
