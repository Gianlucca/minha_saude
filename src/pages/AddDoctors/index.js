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

export default function AddDoctors({navigation}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [crm, setCrm] = useState('');
  const [address, setAddress] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [details, setDetails] = useState('');
  const app = getRealmApp();

  const createDoctor = async data => {
    //create new doctor
    console.log(data);
    navigation.navigate('Doctors');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={{flex: 1}}>
            <Text style={styles.headerText}>Cadastrar novo Médico</Text>
            <View style={styles.container}>
              <TextInput
                style={styles.textInput}
                placeholder="Nome"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Telefone"
                value={phone}
                onChangeText={setPhone}
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
              placeholder="Especialidade"
              value={speciality}
              onChangeText={setSpeciality}
            />
            <TextInput
              style={styles.textInput}
              placeholder="CRM"
              value={crm}
              onChangeText={setCrm}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Endereço"
              value={address}
              onChangeText={setAddress}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Nome da Clínica"
              value={clinicName}
              onChangeText={setClinicName}
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
                  createDoctor({
                    name,
                    phone,
                    email,
                    speciality,
                    crm,
                    address,
                    clinicName,
                    details,
                  })
                }>
                Cadastrar Médico
              </Button>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
