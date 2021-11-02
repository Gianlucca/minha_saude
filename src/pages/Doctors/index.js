import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton, Text} from 'react-native-paper';
import styles from './styles.js';
import AppContext from '../../components/AppContext';
import {getRealmApp} from '../../services/realm-config';
import {useIsFocused} from '@react-navigation/native';

export default function Doctors({navigation}) {
  const [doctors, setDoctors] = useState([]);
  const isFocused = useIsFocused();
  const myContext = useContext(AppContext);
  const app = getRealmApp();

  useEffect(() => {
    //refresh all Doctors when page loads
    const fetchAllDoctors = async () => {
      let allDoctors = await app.currentUser.functions.fetchAllDoctors(
        myContext.userToken,
      );
      console.log('fetching all doctors');
      setDoctors(allDoctors);
    };
    if (isFocused) {
      fetchAllDoctors();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={doctors}
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
        keyExtractor={item => item._id}
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
