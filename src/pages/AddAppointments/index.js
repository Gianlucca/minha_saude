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

export default function AddAppointments({navigation}) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');
  const [doctor, setDoctor] = useState(0);
  const [allDoctors, setAllDoctors] = useState([]);
  const app = getRealmApp();

  const createAppointment = async data => {
    //create new appointment
    console.log(data);
    navigation.navigate('Appointments');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <Text>Cadastrar novo Compromisso</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.textInput}
              placeholder="Data do Compromisso"
              value={date}
              onChangeText={setDate}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Horário"
              value={time}
              onChangeText={setTime}
            />
          </View>
          <TextInput //select
            style={styles.textInput}
            placeholder="Médico Responsável"
            value={doctor}
            onChangeText={setDoctor}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Local"
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Anotações"
            value={details}
            onChangeText={setDetails}
            secureTextEntry
          />
          <Button style={styles.button} onPress={() => navigation.goBack()}>
            Voltar
          </Button>
          <Button
            style={styles.button}
            onPress={() => createAppointment({date, doctor, address, details})}>
            Cadastrar Compromisso
          </Button>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
