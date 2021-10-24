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
          <Text>Cadastrar novo Médico</Text>
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
              placeholder="Telefone"
              value={phone}
              onChangeText={setPhone}
            />
          </View>
          <TextInput //select
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
            placeholder="Especialidade"
            value={speciality}
            onChangeText={setSpeciality}
          />
          <TextInput
            style={{
              marginLeft: 15,
              marginRight: 15,
              marginTop: 15,
            }}
            placeholder="CRM"
            value={crm}
            onChangeText={setCrm}
          />
          <TextInput
            style={{
              marginLeft: 15,
              marginRight: 15,
              marginTop: 15,
            }}
            placeholder="Endereço"
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            style={{
              marginLeft: 15,
              marginRight: 15,
              marginTop: 15,
            }}
            placeholder="Nome da Clínica"
            value={clinicName}
            onChangeText={setClinicName}
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
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
