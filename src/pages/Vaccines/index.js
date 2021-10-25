import React, {useState, useEffect} from 'react';
import {View, FlatList, StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton, Text} from 'react-native-paper';
import styles from './styles.js';

export default function Vaccines({navigation}) {
  const [vaccines, setVaccines] = useState([]);

  useEffect(() => {
    //refresh all Vaccines when page loads
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[
          {
            id: '0',
            name: 'Covid-19',
            date: '18/10/2021',
            batch: 'PFIZER',
            address: 'postinho',
            details: 'é na sala 807',
          },
          {
            id: '1',
            name: 'Covid-19',
            date: '18/10/2021',
            batch: 'PFIZER',
            address: 'postinho',
            details: 'é na sala 807',
          },
          {
            id: '2',
            name: 'Covid-19',
            date: '18/10/2021',
            batch: 'PFIZER',
            address: 'postinho',
            details: 'é na sala 807',
          },
          {
            id: '3',
            name: 'Covid-19',
            date: '18/10/2021',
            batch: 'PFIZER',
            address: 'postinho',
            details: 'é na sala 807',
          },
          {
            id: '4',
            name: 'Covid-19',
            date: '18/10/2021',
            batch: 'PFIZER',
            address: 'postinho',
            details: 'é na sala 807',
          },
          {
            id: '5',
            name: 'Covid-19',
            date: '18/10/2021',
            batch: 'PFIZER',
            address: 'postinho',
            details: 'é na sala 807',
          },
          {
            id: '6',
            name: 'Covid-19',
            date: '18/10/2021',
            batch: 'PFIZER',
            address: 'postinho',
            details: 'é na sala 807',
          },
          {
            id: '7',
            name: 'Covid-19',
            date: '18/10/2021',
            batch: 'PFIZER',
            address: 'postinho',
            details: 'é na sala 807',
          },
          {
            id: '8',
            name: 'Covid-19',
            date: '18/10/2021',
            batch: 'PFIZER',
            address: 'postinho',
            details: 'é na sala 807',
          },
          {
            id: '9',
            name: 'Covid-19',
            date: '18/10/2021',
            batch: 'PFIZER',
            address: 'postinho',
            details: 'é na sala 807',
          },
        ]}
        renderItem={({item}) => (
          <View style={styles.row}>
            <IconButton
              style={styles.icon}
              icon="needle"
              color="#fff"
              size={30}
            />
            <View>
              <Text style={styles.headerText}>{item.name}</Text>
              <Text style={styles.text}>Lote: {item.batch}</Text>
              <Text style={styles.text}>
                Local: {item.address} - {item.date}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <IconButton
        onPress={() => navigation.navigate('AddVaccines')}
        icon="plus"
        size={30}
        style={styles.addButton}
      />
    </SafeAreaView>
  );
}
