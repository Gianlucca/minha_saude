import React, {useState, useContext} from 'react';
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
import moment from 'moment';
import styles from './styles.js';
import AppContext from '../../components/AppContext';

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
  const myContext = useContext(AppContext);

  const createDoctor = async data => {
    //create new doctor
    data.id = myContext.userToken;
    await app.currentUser.functions.createDoctor(data);
    console.log(data);
    navigation.navigate('Doctors');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={{flex: 1}}>
            <View style={styles.inputRow}>
              <IconButton
                style={styles.rowIcon}
                icon="account"
                color="#2b2d42"
              />

              <TextInput
                style={styles.textInput}
                placeholder="Nome"
                value={name}
                onChangeText={setName}
                outlineColor="#2B2D42"
                selectionColor="#8d99ae"
                activeOutlineColor="#ef233c"
                underlineColor="#2B2D42"
                placeholderTextColor="#8d99ae"
              />
            </View>
            <View style={styles.inputRow}>
              <IconButton style={styles.rowIcon} icon="phone" color="#2b2d42" />

              <TextInput
                style={styles.textInput}
                placeholder="Telefone"
                value={phone}
                onChangeText={setPhone}
                outlineColor="#2B2D42"
                selectionColor="#8d99ae"
                activeOutlineColor="#ef233c"
                underlineColor="#2B2D42"
                placeholderTextColor="#8d99ae"
              />
            </View>
            <View style={styles.inputRow}>
              <IconButton style={styles.rowIcon} icon="email" color="#2b2d42" />
              <TextInput
                style={styles.textInput}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                outlineColor="#2B2D42"
                selectionColor="#8d99ae"
                activeOutlineColor="#ef233c"
                underlineColor="#2B2D42"
                placeholderTextColor="#8d99ae"
              />
            </View>
            <View style={styles.inputRow}>
              <IconButton
                style={styles.rowIcon}
                icon="doctor"
                color="#2b2d42"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Especialidade"
                value={speciality}
                onChangeText={setSpeciality}
                outlineColor="#2B2D42"
                selectionColor="#8d99ae"
                activeOutlineColor="#ef233c"
                underlineColor="#2B2D42"
                placeholderTextColor="#8d99ae"
              />
            </View>
            <View style={styles.inputRow}>
              <IconButton
                style={styles.rowIcon}
                icon="identifier"
                color="#2b2d42"
              />
              <TextInput
                style={styles.textInput}
                placeholder="CRM"
                value={crm}
                onChangeText={setCrm}
                outlineColor="#2B2D42"
                selectionColor="#8d99ae"
                activeOutlineColor="#ef233c"
                underlineColor="#2B2D42"
                placeholderTextColor="#8d99ae"
              />
            </View>
            <View style={styles.inputRow}>
              <IconButton
                style={styles.rowIcon}
                icon="map-marker"
                color="#2b2d42"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Endereço"
                value={address}
                onChangeText={setAddress}
                outlineColor="#2B2D42"
                selectionColor="#8d99ae"
                activeOutlineColor="#ef233c"
                underlineColor="#2B2D42"
                placeholderTextColor="#8d99ae"
              />
            </View>
            <View style={styles.inputRow}>
              <IconButton
                style={styles.rowIcon}
                icon="hospital-building"
                color="#2b2d42"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Nome da Clínica"
                value={clinicName}
                onChangeText={setClinicName}
                outlineColor="#2B2D42"
                selectionColor="#8d99ae"
                activeOutlineColor="#ef233c"
                underlineColor="#2B2D42"
                placeholderTextColor="#8d99ae"
              />
            </View>
            <View style={styles.inputRow}>
              <IconButton
                style={styles.rowIcon}
                icon="pencil"
                color="#2b2d42"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Anotações"
                value={details}
                onChangeText={setDetails}
                multiline={true}
                numberOfLines={6}
                outlineColor="#2B2D42"
                selectionColor="#8d99ae"
                activeOutlineColor="#ef233c"
                underlineColor="#2B2D42"
                placeholderTextColor="#8d99ae"
              />
            </View>
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
