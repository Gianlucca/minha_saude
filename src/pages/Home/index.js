import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, StatusBar, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton, Text} from 'react-native-paper';
import styles from './styles.js';
import moment from 'moment';
import AppContext from '../../components/AppContext';
import {getRealmApp} from '../../services/realm-config';
import {useIsFocused} from '@react-navigation/native';

export default function Home({navigation}) {
  const [appointments, setAppointments] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const isFocused = useIsFocused();
  const myContext = useContext(AppContext);
  const app = getRealmApp();

  const filter = item => {
    return moment() < moment(item.date);
  };
  useEffect(() => {
    const fetchAllAppointments = async () => {
      let allAppointments =
        await app.currentUser.functions.fetchAllAppointments(
          myContext.userToken,
        );
      allAppointments = allAppointments.filter(filter);
      console.log(allAppointments);
      setAppointments(allAppointments);
    };
    const fetchAllMedicines = async () => {
      let allMedicines = await app.currentUser.functions.fetchAllMedicines(
        myContext.userToken,
      );
      console.log('fetching all medicines');
      setMedicines(allMedicines);
    };
    if (isFocused) {
      fetchAllAppointments();
      fetchAllMedicines();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      {appointments.length == 0 && medicines.length == 0 ? (
        <Text style={styles.header}> Não há nada por aqui</Text>
      ) : (
        <>
          {appointments.length > 0 && (
            <>
              <Text style={styles.header}>Próximos Compromissos</Text>
              <FlatList
                data={appointments}
                keyExtractor={item => item._id}
                renderItem={({item}) =>
                  moment() < moment(item.date) && (
                    <View style={styles.row}>
                      <View style={styles.detailRow}>
                        <IconButton
                          style={styles.rowIcon}
                          icon="calendar-clock"
                          color="#edf2f4"
                        />
                        <Text style={styles.text}>
                          {moment(item.date).format('DD/MM/YYYY HH:MM')}
                        </Text>
                      </View>

                      {item.address !== '' && (
                        <View style={styles.detailRow}>
                          <IconButton
                            style={styles.rowIcon}
                            icon="city"
                            color="#edf2f4"
                          />
                          <Text style={styles.text}>{item.address}</Text>
                        </View>
                      )}

                      {item.details !== '' && (
                        <View style={styles.detailRow}>
                          <IconButton
                            style={styles.rowIcon}
                            icon="comment-processing"
                            color="#edf2f4"
                          />
                          <Text style={styles.text}>
                            {String(item.details).trim()}
                          </Text>
                        </View>
                      )}
                    </View>
                  )
                }
              />
            </>
          )}
          {medicines.length > 0 && (
            <>
              <Text style={styles.header}>
                Remédios dentro do prazo de validade
              </Text>
              <FlatList
                data={medicines}
                keyExtractor={item => item._id}
                renderItem={({item}) => {
                  let base64Icon = `data:image/png;base64,${item.file}`;
                  return (
                    moment() < moment(item.exp_date) && (
                      <View style={styles.medicineRow}>
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
                              <Text style={styles.text}>
                                {item.how_many_pills}
                              </Text>
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
                          <Image
                            style={{
                              flex: 1,
                              width: 50,
                              margin: 10,
                              minHeight: 150,
                            }}
                            source={{uri: base64Icon}}
                          />
                        )}
                      </View>
                    )
                  );
                }}
              />
            </>
          )}
        </>
      )}
    </SafeAreaView>
  );
}
