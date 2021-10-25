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
    <SafeAreaView style={styles.container}>
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
          <View style={styles.row}>
            <IconButton
              style={styles.icon}
              color="#fff"
              icon="account"
              size={30}
            />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <IconButton
        onPress={() => navigation.navigate('AddDoctors')}
        icon="plus"
        size={30}
        style={styles.addButton}
      />
    </SafeAreaView>
  );
}
