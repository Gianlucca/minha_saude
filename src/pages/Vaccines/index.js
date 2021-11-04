import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, StatusBar, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton, Text} from 'react-native-paper';
import styles from './styles.js';
import AppContext from '../../components/AppContext';
import {getRealmApp} from '../../services/realm-config';
import {useIsFocused} from '@react-navigation/native';

export default function Vaccines({navigation}) {
  const [vaccines, setVaccines] = useState([]);
  const isFocused = useIsFocused();
  const myContext = useContext(AppContext);
  const app = getRealmApp();

  useEffect(() => {
    //refresh all Vaccines when page loads
    const fetchAllVaccines = async () => {
      let allVaccines = await app.currentUser.functions.fetchAllVaccines(
        myContext.userToken,
      );
      console.log('fetching all vaccines');
      setVaccines(allVaccines);
    };
    if (isFocused) {
      fetchAllVaccines();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={vaccines}
        renderItem={({item}) => {
          let base64Icon = `data:image/png;base64,${item.file}`;
          return (
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
              <Image style={{flex: 1, width: 50}} source={{uri: base64Icon}} />
            </View>
          );
        }}
        keyExtractor={item => item._id}
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
