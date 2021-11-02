import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton, Text} from 'react-native-paper';
import styles from './styles.js';
import moment from 'moment';
import AppContext from '../../components/AppContext';
import {getRealmApp} from '../../services/realm-config';
import {useIsFocused} from '@react-navigation/native';

export default function Appointments({navigation}) {
  const [appointments, setAppointments] = useState([]);
  const isFocused = useIsFocused();
  const myContext = useContext(AppContext);
  const app = getRealmApp();

  useEffect(() => {
    const fetchAllAppointments = async () => {
      let allAppointments =
        await app.currentUser.functions.fetchAllAppointments(
          myContext.userToken,
        );
      console.log('fetching all appointments');
      setAppointments(allAppointments);
    };
    if (isFocused) {
      fetchAllAppointments();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={appointments}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View>
              <Text style={styles.text}>
                {moment(item.date).format('DD/MM/YYYY HH:MM')} - {item.address}
              </Text>
              <Text style={styles.text}>{item.details}</Text>
            </View>
            <IconButton
              style={styles.icon}
              icon="calendar"
              color="#fff"
              size={30}
            />
          </View>
        )}
      />
      <IconButton
        onPress={() => navigation.navigate('AddAppointments')}
        icon="plus"
        size={30}
        style={styles.addButton}
      />
    </SafeAreaView>
  );
}
