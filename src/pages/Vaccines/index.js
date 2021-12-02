import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton, Text} from 'react-native-paper';
import AppContext from '../../components/AppContext';
import {getRealmApp} from '../../services/realm-config';
import {useIsFocused} from '@react-navigation/native';
import moment from 'moment';
import styles from './styles.js';

export default function Vaccines({navigation}) {
  const [vaccines, setVaccines] = useState([]);
  const isFocused = useIsFocused();
  const myContext = useContext(AppContext);
  const app = getRealmApp();

  const deleteRow = async item => {
    let id = item._id;
    await app.currentUser.functions.deleteVaccine({id}).then(async () => {
      await fetchAllVaccines();
    });
  };

  const fetchAllVaccines = async () => {
    let allVaccines = await app.currentUser.functions.fetchAllVaccines(
      myContext.userToken,
    );
    console.log('fetching all vaccines');
    setVaccines(allVaccines);
  };

  useEffect(() => {
    //refresh all Vaccines when page loads
    if (isFocused) {
      fetchAllVaccines();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={vaccines}
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
                      icon="needle"
                      color="#edf2f4"
                    />
                    <Text style={styles.text}>{item.name}</Text>
                  </View>
                )}
                {item.batch != '' && (
                  <View style={styles.detailRow}>
                    <IconButton
                      style={styles.rowIcon}
                      icon="package-variant-closed"
                      color="#edf2f4"
                    />
                    <Text style={styles.text}>{item.batch}</Text>
                  </View>
                )}
                {item.address != '' && (
                  <View style={styles.detailRow}>
                    <IconButton
                      style={styles.rowIcon}
                      icon="hospital-building"
                      color="#edf2f4"
                    />
                    <Text style={styles.text}>{item.address}</Text>
                  </View>
                )}
                {item.date != '' && (
                  <View style={styles.detailRow}>
                    <IconButton
                      style={styles.rowIcon}
                      icon="calendar"
                      color="#edf2f4"
                    />
                    <Text style={styles.text}>
                      {moment(item.date).format('DD-MM-YYYY')}
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
        onPress={() => navigation.navigate('AddVaccines')}
        icon="plus"
        size={30}
        color="#edf2f4"
        style={styles.addButton}
      />
    </SafeAreaView>
  );
}
