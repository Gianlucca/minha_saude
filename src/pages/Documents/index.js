import React, {useState, useEffect} from 'react';
import {View, FlatList, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton, Text} from 'react-native-paper';
import styles from './styles.js';

export default function Documents({navigation}) {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    //refresh all Documents when page loads
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[
          {
            id: '0',
            file: 'image.jpg',
            title: 'exame raio x',
            date: '12/12/2020',
            category: 'raio x',
            details: 'aquele raio x la',
          },
          {
            id: '1',
            file: 'image.jpg',
            title: 'exame raio x',
            date: '12/12/2020',
            category: 'raio x',
            details: 'aquele raio x la',
          },
          {
            id: '2',
            file: 'image.jpg',
            title: 'exame raio x',
            date: '12/12/2020',
            category: 'raio x',
            details: 'aquele raio x la',
          },
          {
            id: '3',
            file: 'image.jpg',
            title: 'exame raio x',
            date: '12/12/2020',
            category: 'raio x',
            details: 'aquele raio x la',
          },
        ]}
        renderItem={({item}) => (
          <View style={styles.row}>
            <IconButton
              style={styles.icon}
              icon="file"
              color="#fff"
              size={30}
            />
            <View>
              <Text style={styles.headerText}>
                {item.date} - {item.title}
              </Text>
              <Text style={styles.text}>Categoria: {item.category}</Text>
              <Text style={styles.text}>Detalhes: {item.details}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <IconButton
        onPress={() => navigation.navigate('AddDocuments')}
        icon="plus"
        size={30}
        style={styles.addButton}
      />
    </SafeAreaView>
  );
}
