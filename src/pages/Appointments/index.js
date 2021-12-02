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

  const deleteRow = async item => {
    let id = item._id;
    await app.currentUser.functions.deleteAppointment({id}).then(async () => {
      await fetchAllAppointments();
    });
  };

  const fetchAllAppointments = async () => {
    let allAppointments = await app.currentUser.functions.fetchAllAppointments(
      myContext.userToken,
    );
    console.log('fetching all appointments');
    setAppointments(allAppointments);
  };

  useEffect(() => {
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
            <View style={styles.detailRow}>
              <IconButton
                style={styles.rowIcon}
                icon="calendar-clock"
                color="#edf2f4"
              />
              <Text style={styles.text}>
                {moment(item.date).format('DD/MM/YYYY HH:MM')}
              </Text>
            </View>

            {item.address !== '' && (
              <View style={styles.detailRow}>
                <IconButton
                  style={styles.rowIcon}
                  icon="city"
                  color="#edf2f4"
                />
                <Text style={styles.text}>{item.address}</Text>
              </View>
            )}

            {item.details !== '' && (
              <View style={styles.detailRow}>
                <IconButton
                  style={styles.rowIcon}
                  icon="comment-processing"
                  color="#edf2f4"
                />
                <Text style={styles.text}>{String(item.details).trim()}</Text>
              </View>
            )}

            <IconButton
              style={{
                position: 'absolute',
                alignSelf: 'flex-end',
                minHeight: 20,
                minWidth: 40,
              }}
              icon="delete"
              color="#D90429"
              onPress={() => deleteRow(item)}
            />
          </View>
        )}
      />
      <IconButton
        onPress={() => navigation.navigate('AddAppointments')}
        icon="plus"
        size={30}
        color="#edf2f4"
        style={styles.addButton}
      />
    </SafeAreaView>
  );
}
