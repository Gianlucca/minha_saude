import React, {useState, useEffect} from 'react';
import {View, FlatList, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton, Text} from 'react-native-paper';
import styles from './styles.js';

export default function Medicines({navigation}) {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    //refresh all Medicines when page loads
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[
          {
            id: '0',
            file: 'image.jpg',
            name: 'paracetamal',
            dosage: '1 por dia',
            howManyPills: '12',
            expDate: '12/12/2022',
            details: 'tomar pra dores em geral',
          },
          {
            id: '1',
            file: 'image.jpg',
            name: 'paracetamal',
            dosage: '1 por dia',
            howManyPills: '12',
            expDate: '12/12/2022',
            details: 'tomar pra dores em geral',
          },
          {
            id: '2',
            file: 'image.jpg',
            name: 'paracetamal',
            dosage: '1 por dia',
            howManyPills: '12',
            expDate: '12/12/2022',
            details: 'tomar pra dores em geral',
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
            file: 'image.jpg',
            name: 'paracetamal',
            dosage: '1 por dia',
            howManyPills: '12',
            expDate: '12/12/2022',
            details: 'tomar pra dores em geral',
          },
          {
            id: '5',
            file: 'image.jpg',
            name: 'paracetamal',
            dosage: '1 por dia',
            howManyPills: '12',
            expDate: '12/12/2022',
            details: 'tomar pra dores em geral',
          },
          {
            id: '6',
            file: 'image.jpg',
            name: 'paracetamal',
            dosage: '1 por dia',
            howManyPills: '12',
            expDate: '12/12/2022',
            details: 'tomar pra dores em geral',
          },
          {
            id: '7',
            file: 'image.jpg',
            name: 'paracetamal',
            dosage: '1 por dia',
            howManyPills: '12',
            expDate: '12/12/2022',
            details: 'tomar pra dores em geral',
          },
          {
            id: '8',
            file: 'image.jpg',
            name: 'paracetamal',
            dosage: '1 por dia',
            howManyPills: '12',
            expDate: '12/12/2022',
            details: 'tomar pra dores em geral',
          },
          {
            id: '9',
            file: 'image.jpg',
            name: 'paracetamal',
            dosage: '1 por dia',
            howManyPills: '12',
            expDate: '12/12/2022',
            details: 'tomar pra dores em geral',
          },
        ]}
        renderItem={({item}) => (
          <View style={styles.row}>
            <IconButton icon="pill" size={30} />
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.dosage}</Text>
            <Text style={styles.text}>{item.howManyPills}</Text>
            <Text style={styles.text}>{item.expDate}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <IconButton
        onPress={() => navigation.navigate('AddMedicines')}
        icon="plus"
        size={30}
        style={styles.addButton}
      />
    </SafeAreaView>
  );
}
