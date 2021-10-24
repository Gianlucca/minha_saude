import React, {useState, useEffect} from 'react';
import {View, FlatList, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton, Text} from 'react-native-paper';
import styles from './styles.js';

export default function Appointments({navigation}) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    //refresh all appointments when page loads
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        marginTop: StatusBar.currentHeight || 0,
      }}>
      <FlatList
        data={
          //appointments
          [
            {
              id: '0',
              date: '02/11/2021',
              doctorId: 1,
              address: 'Av Carlos Gomes 888',
              details: 'é na sala 903',
            },
            {
              id: '1',
              date: '02/12/2021',
              doctorId: 3,
              address: 'Av Nilo Peçanha 99',
              details: 'é na sala 807',
            },
            {
              id: '2',
              date: '03/01/2022',
              doctorId: 6,
              address: 'Av Bento Gonçalves 965',
              details: 'é na sala 20',
            },
            {
              id: '3',
              date: '03/01/2022',
              doctorId: 6,
              address: 'Av Bento Gonçalves 965',
              details: 'é na sala 20',
            },
            {
              id: '4',
              date: '03/01/2022',
              doctorId: 6,
              address: 'Av Bento Gonçalves 965',
              details: 'é na sala 20',
            },
            {
              id: '5',
              date: '03/01/2022',
              doctorId: 6,
              address: 'Av Bento Gonçalves 965',
              details: 'é na sala 20',
            },
            {
              id: '6',
              date: '03/01/2022',
              doctorId: 6,
              address: 'Av Bento Gonçalves 965',
              details: 'é na sala 20',
            },
            {
              id: '7',
              date: '03/01/2022',
              doctorId: 6,
              address: 'Av Bento Gonçalves 965',
              details: 'é na sala 20',
            },
            {
              id: '8',
              date: '03/01/2022',
              doctorId: 6,
              address: 'Av Bento Gonçalves 965',
              details: 'é na sala 20',
            },
            {
              id: '9',
              date: '03/01/2022',
              doctorId: 6,
              address: 'Av Bento Gonçalves 965',
              details: 'é na sala 20',
            },
          ]
        }
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: '#9f9f9f',
              padding: 20,
              marginVertical: 8,
              marginHorizontal: 16,
            }}>
            <Text style={{color: '#fff'}}>{item.date}</Text>
            <Text style={{color: '#fff'}}>{item.address}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <IconButton
        onPress={() => navigation.navigate('AddAppointments')}
        icon="plus"
        size={30}
        style={{
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          width: 100,
          height: 100,
          backgroundColor: '#fff',
          borderRadius: 100,
          alignSelf: 'flex-end',
          position: 'absolute',
          bottom: 15,
          right: 15,
        }}
      />
    </SafeAreaView>
  );
}
