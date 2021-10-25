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
            <IconButton
              style={styles.icon}
              icon="pill"
              color="#fff"
              size={30}
            />
            <View>
              <Text style={styles.headerText}>{item.name}</Text>
              <View>
                <Text style={styles.text}>Dosagem: {item.dosage}</Text>
                {item.howManyPills > 0 && (
                  <Text style={styles.text}>
                    Comprimidos restantes: {item.howManyPills}
                  </Text>
                )}
                <Text style={styles.text}>
                  Data de Validade: {item.expDate}
                </Text>
              </View>
            </View>
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
