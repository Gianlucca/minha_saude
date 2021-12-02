import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton, Text} from 'react-native-paper';
import styles from './styles.js';
import moment from 'moment';
import AppContext from '../../components/AppContext';
import {getRealmApp} from '../../services/realm-config';
import {useIsFocused} from '@react-navigation/native';

export default function Medicines({navigation}) {
  const [medicines, setMedicines] = useState([]);
  const isFocused = useIsFocused();
  const myContext = useContext(AppContext);
  const app = getRealmApp();

  const deleteRow = async item => {
    let id = item._id;
    await app.currentUser.functions.deleteMedicine({id}).then(async () => {
      await fetchAllMedicines();
    });
  };

  const fetchAllMedicines = async () => {
    let allMedicines = await app.currentUser.functions.fetchAllMedicines(
      myContext.userToken,
    );
    console.log('fetching all medicines');
    setMedicines(allMedicines);
  };

  useEffect(() => {
    if (isFocused) {
      fetchAllMedicines();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={medicines}
        keyExtractor={item => item._id}
        renderItem={({item}) => {
          let base64Icon = `data:image/png;base64,${item.file}`;
          return (
            <View style={styles.row}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                {item.name != '' && (
                  <View style={styles.detailRow}>
                    <IconButton
                      style={styles.rowIcon}
                      icon="medical-bag"
                      color="#edf2f4"
                    />
                    <Text style={styles.text}>{item.name}</Text>
                  </View>
                )}
                {item.dosage != '' && (
                  <View style={styles.detailRow}>
                    <IconButton
                      style={styles.rowIcon}
                      icon="beer"
                      color="#edf2f4"
                    />
                    <Text style={styles.text}>{item.dosage}</Text>
                  </View>
                )}
                {item.how_many_pills != '' && (
                  <View style={styles.detailRow}>
                    <IconButton
                      style={styles.rowIcon}
                      icon="pill"
                      color="#edf2f4"
                    />
                    <Text style={styles.text}>{item.how_many_pills}</Text>
                  </View>
                )}
                {item.exp_date != '' && (
                  <View style={styles.detailRow}>
                    <IconButton
                      style={styles.rowIcon}
                      icon="calendar-check"
                      color="#edf2f4"
                    />
                    <Text style={styles.text}>
                      {moment(item.exp_date).format('DD-MM-YYYY')}
                    </Text>
                  </View>
                )}
              </View>
              {item.file != '' && (
                <TouchableOpacity
                  style={{
                    flex: 1,
                    margin: 10,
                    minHeight: 150,
                  }}
                  onPress={() => {
                    navigation.navigate('ImageModal', {
                      base64Icon,
                    });
                  }}>
                  <Image
                    style={{
                      flex: 1,
                      margin: 10,
                      minHeight: 150,
                    }}
                    source={{uri: base64Icon}}
                  />
                </TouchableOpacity>
              )}
              <IconButton
                style={{
                  minHeight: 20,
                  minWidth: 40,
                }}
                icon="delete"
                color="#D90429"
                onPress={() => deleteRow(item)}
              />
            </View>
          );
        }}
      />
      <IconButton
        onPress={() => navigation.navigate('AddMedicines')}
        icon="plus"
        size={30}
        color="#edf2f4"
        style={styles.addButton}
      />
    </SafeAreaView>
  );
}
