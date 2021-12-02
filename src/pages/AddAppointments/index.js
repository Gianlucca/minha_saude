import React, {useState, useEffect, useContext} from 'react';
import {Button, Text, TextInput, IconButton} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import AppContext from '../../components/AppContext';
import {getRealmApp} from '../../services/realm-config';
import {useIsFocused} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import styles from './styles.js';
import moment from 'moment';

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
            <View style={styles.container}>
              <DatePicker
                style={styles.picker}
                mode="date"
                date={date}
                androidVariant="nativeAndroid"
                onDateChange={date => {
                  setDate(date);
                }}
              />
              <DatePicker
                style={styles.picker}
                mode="time"
                date={date}
                androidVariant="nativeAndroid"
                onDateChange={time => {
                  setTime(time);
                }}
              />
            </View>
            <View style={styles.inputRow}>
              <IconButton
                style={styles.rowIcon}
                icon="doctor"
                color="#2b2d42"
              />
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
                <Picker.Item label="Selecione um médico" value="0" />
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
              </Picker>
            </View>
            <View style={styles.inputRow}>
              <IconButton
                style={styles.rowIcon}
                icon="map-marker"
                color="#2b2d42"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Local"
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
                icon="pencil"
                color="#2b2d42"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Anotações"
                value={details}
                onChangeText={setDetails}
                multiline={true}
                numberOfLines={12}
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
