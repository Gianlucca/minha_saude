import React, {useState, useEffect, useContext} from 'react';
import {Button, Text, TextInput, Checkbox} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles.js';
import AppContext from '../../components/AppContext';
import {getRealmApp} from '../../services/realm-config';
import {useIsFocused} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';

export default function AddAppointments({navigation}) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(date);
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');
  const [doctor, setDoctor] = useState();
  const [allDoctors, setAllDoctors] = useState([]);
  const app = getRealmApp();
  const myContext = useContext(AppContext);
  const isFocused = useIsFocused();

  const createAppointment = async data => {
    data.id = myContext.userToken;
    await app.currentUser.functions.createAppointment(data);
    console.log(data);
    navigation.navigate('Appointments');
  };

  useEffect(() => {
    const fetchAllDoctors = async () => {
      let allDoctors = await app.currentUser.functions.fetchAllDoctors(
        myContext.userToken,
      );
      console.log('fetching all doctors' + allDoctors.length);
      setAllDoctors(allDoctors);
    };
    if (isFocused) {
      fetchAllDoctors();
    }
  }, [isFocused]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={{flex: 1}}>
            <Text style={styles.headerText}>Cadastrar novo Compromisso</Text>
            <View style={styles.container}>
              <DatePicker
                style={styles.textInput}
                mode="date"
                textColor="#000"
                date={date}
                androidVariant="nativeAndroid"
                onDateChange={date => {
                  setDate(date);
                }}
              />
              <DatePicker
                style={styles.textInput}
                mode="time"
                textColor="#000"
                date={date}
                androidVariant="nativeAndroid"
                onDateChange={time => {
                  setTime(time);
                }}
              />
            </View>
            <Picker
              dropdownIconColor="#888"
              style={styles.picker}
              selectedValue={doctor}
              onValueChange={(itemValue, itemIndex) => {
                if (itemValue !== '0') {
                  const doc = allDoctors.find(docs => itemValue == docs._id);
                  if (!!doc && !!doc.address) {
                    setAddress(doc.address);
                  }
                  setDoctor(doc._id);
                } else {
                  setDoctor('0');
                }
              }}>
              {!!allDoctors &&
                allDoctors.map((doctor, index) => {
                  return (
                    <Picker.Item
                      key={index}
                      label={doctor.name}
                      value={doctor._id}
                    />
                  );
                })}
              <Picker.Item label="Outro" value="0" />
            </Picker>
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
                  createAppointment({time, doctor, address, details})
                }>
                Cadastrar Compromisso
              </Button>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
