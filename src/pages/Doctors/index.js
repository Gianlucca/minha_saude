import React, {useState, useEffect} from 'react';
import {View, FlatList, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton, Text} from 'react-native-paper';
import styles from './styles.js';

export default function Doctors({navigation}) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    //refresh all Doctors when page loads
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        marginTop: StatusBar.currentHeight || 0,
      }}>
      <FlatList
        data={[
          {
            id: '0',
            name: 'Doutor abobrinha',
            phone: 11968477754,
            email: 'teste@teste.com',
            speciality: 'Joelho',
            crm: '6555',
            address: 'Av Carlos Gomes 888',
            clinicName: 'hospital sao luiz',
            details: 'é na sala 903',
          },
          {
            id: '1',
            name: 'Doutor abobrinha',
            phone: 11968477754,
            email: 'teste@teste.com',
            speciality: 'Joelho',
            crm: '6555',
            address: 'Av Carlos Gomes 888',
            clinicName: 'hospital sao luiz',
            details: 'é na sala 903',
          },
          {
            id: '2',
            name: 'Doutor abobrinha',
            phone: 11968477754,
            email: 'teste@teste.com',
            speciality: 'Joelho',
            crm: '6555',
            address: 'Av Carlos Gomes 888',
            clinicName: 'hospital sao luiz',
            details: 'é na sala 903',
          },
          {
            id: '3',
            name: 'Doutor abobrinha',
            phone: 11968477754,
            email: 'teste@teste.com',
            speciality: 'Joelho',
            crm: '6555',
            address: 'Av Carlos Gomes 888',
            clinicName: 'hospital sao luiz',
            details: 'é na sala 903',
          },
          {
            id: '4',
            name: 'Doutor abobrinha',
            phone: 11968477754,
            email: 'teste@teste.com',
            speciality: 'Joelho',
            crm: '6555',
            address: 'Av Carlos Gomes 888',
            clinicName: 'hospital sao luiz',
            details: 'é na sala 903',
          },
          {
            id: '5',
            name: 'Doutor abobrinha',
            phone: 11968477754,
            email: 'teste@teste.com',
            speciality: 'Joelho',
            crm: '6555',
            address: 'Av Carlos Gomes 888',
            clinicName: 'hospital sao luiz',
            details: 'é na sala 903',
          },
          {
            id: '6',
            name: 'Doutor abobrinha',
            phone: 11968477754,
            email: 'teste@teste.com',
            speciality: 'Joelho',
            crm: '6555',
            address: 'Av Carlos Gomes 888',
            clinicName: 'hospital sao luiz',
            details: 'é na sala 903',
          },
          {
            id: '7',
            name: 'Doutor abobrinha',
            phone: 11968477754,
            email: 'teste@teste.com',
            speciality: 'Joelho',
            crm: '6555',
            address: 'Av Carlos Gomes 888',
            clinicName: 'hospital sao luiz',
            details: 'é na sala 903',
          },
          {
            id: '8',
            name: 'Doutor abobrinha',
            phone: 11968477754,
            email: 'teste@teste.com',
            speciality: 'Joelho',
            crm: '6555',
            address: 'Av Carlos Gomes 888',
            clinicName: 'hospital sao luiz',
            details: 'é na sala 903',
          },
          {
            id: '9',
            name: 'Doutor abobrinha',
            phone: 11968477754,
            email: 'teste@teste.com',
            speciality: 'Joelho',
            crm: '6555',
            address: 'Av Carlos Gomes 888',
            clinicName: 'hospital sao luiz',
            details: 'é na sala 903',
          },
        ]}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: '#9f9f9f',
              padding: 20,
              marginVertical: 8,
              marginHorizontal: 16,
            }}>
            <IconButton icon="account" size={30} />
            <Text style={{color: '#fff'}}>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <IconButton
        onPress={() => navigation.navigate('AddDoctors')}
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
