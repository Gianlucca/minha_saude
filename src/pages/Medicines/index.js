import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, StatusBar, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton, Text} from 'react-native-paper';
import styles from './styles.js';
import AppContext from '../../components/AppContext';
import {getRealmApp} from '../../services/realm-config';
import {useIsFocused} from '@react-navigation/native';

export default function Medicines({navigation}) {
  const [medicines, setMedicines] = useState([]);
  const isFocused = useIsFocused();
  const myContext = useContext(AppContext);
  const app = getRealmApp();

  useEffect(() => {
    const fetchAllMedicines = async () => {
      let allMedicines = await app.currentUser.functions.fetchAllMedicines(
        myContext.userToken,
      );
      console.log('fetching all medicines');
      setMedicines(allMedicines);
    };
    if (isFocused) {
      fetchAllMedicines();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={medicines}
        renderItem={({item}) => {
          let base64Icon = `data:image/png;base64,${item.file}`;
          return (
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
                  <Text style={styles.text}>
                    Comprimidos restantes: {item.how_many_pills}
                  </Text>
                  <Text style={styles.text}>
                    Data de Validade: {item.exp_date}
                  </Text>
                </View>
              </View>
              <Image style={{flex: 1, width: 50}} source={{uri: base64Icon}} />
            </View>
          );
        }}
        keyExtractor={item => item._id}
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
