import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton, Text} from 'react-native-paper';
import styles from './styles.js';
import moment from 'moment';
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
            <View style={styles.detailRow}>
              <IconButton
                style={styles.rowIcon}
                color="#edf2f4"
                icon="account"
              />
              <Text style={styles.text}>{item.name}</Text>
            </View>
            {item.phone != '' && (
              <View style={styles.detailRow}>
                <IconButton
                  style={styles.rowIcon}
                  icon="phone"
                  color="#edf2f4"
                />
                <Text style={styles.text}>{item.phone}</Text>
              </View>
            )}
            {item.address != '' && (
              <View style={styles.detailRow}>
                <IconButton
                  style={styles.rowIcon}
                  icon="map-marker"
                  color="#edf2f4"
                />
                <Text style={styles.text}>{item.address}</Text>
              </View>
            )}
            {item.email != '' && (
              <View style={styles.detailRow}>
                <IconButton
                  style={styles.rowIcon}
                  icon="email"
                  color="#edf2f4"
                />
                <Text style={styles.text}>{item.email}</Text>
              </View>
            )}
            {item.speciality != '' && (
              <View style={styles.detailRow}>
                <IconButton
                  style={styles.rowIcon}
                  icon="doctor"
                  color="#edf2f4"
                />
                <Text style={styles.text}>{item.speciality}</Text>
              </View>
            )}
            {item.crm != '' && (
              <View style={styles.detailRow}>
                <IconButton
                  style={styles.rowIcon}
                  icon="identifier"
                  color="#edf2f4"
                />
                <Text style={styles.text}>{item.crm}</Text>
              </View>
            )}
            {item.clinic_name != '' && (
              <View style={styles.detailRow}>
                <IconButton
                  style={styles.rowIcon}
                  icon="hospital-building"
                  color="#edf2f4"
                />
                <Text style={styles.text}>{item.clinic_name}</Text>
              </View>
            )}
            {item.details !== '' && (
              <View style={styles.detailRow}>
                <IconButton
                  style={styles.rowIcon}
                  icon="comment-processing"
                  color="#edf2f4"
                />
                <Text style={styles.text}>{String(item.details).trim()}</Text>
              </View>
            )}
          </View>
        )}
        keyExtractor={item => item._id}
      />
      <IconButton
        onPress={() => navigation.navigate('AddDoctors')}
        icon="plus"
        size={30}
        color="#edf2f4"
        style={styles.addButton}
      />
    </SafeAreaView>
  );
}
