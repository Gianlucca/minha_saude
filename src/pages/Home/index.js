import * as React from 'react';
import SecureStore from 'react-native-sensitive-info';
import {Text, View, Button, FlatList, StatusBar} from 'react-native';
import AppContext from '../../components/AppContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles.js';

export default function Home({navigation}) {
  const myContext = React.useContext(AppContext);

  const [upcomingTasks, setUpcomingTasks] = React.useState([]);

  React.useEffect(() => {
    //
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[
          {
            id: '0',
            date: '02/11/2021',
            doctorId: 1,
            address: 'Av Carlos Gomes 888',
            details: 'é na sala 903',
          },
          {
            id: '1',
            date: '02/12/2021',
            doctorId: 3,
            address: 'Av Nilo Peçanha 99',
            details: 'é na sala 807',
          },
          {
            id: '2',
            date: '03/01/2022',
            doctorId: 6,
            address: 'Av Bento Gonçalves 965',
            details: 'é na sala 20',
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
            date: '03/01/2022',
            doctorId: 6,
            address: 'Av Bento Gonçalves 965',
            details: 'é na sala 20',
          },
          {
            id: '5',
            date: '03/01/2022',
            doctorId: 6,
            address: 'Av Bento Gonçalves 965',
            details: 'é na sala 20',
          },
          {
            id: '6',
            date: '03/01/2022',
            doctorId: 6,
            address: 'Av Bento Gonçalves 965',
            details: 'é na sala 20',
          },
          {
            id: '7',
            date: '03/01/2022',
            doctorId: 6,
            address: 'Av Bento Gonçalves 965',
            details: 'é na sala 20',
          },
          {
            id: '8',
            date: '03/01/2022',
            doctorId: 6,
            address: 'Av Bento Gonçalves 965',
            details: 'é na sala 20',
          },
          {
            id: '9',
            date: '03/01/2022',
            doctorId: 6,
            address: 'Av Bento Gonçalves 965',
            details: 'é na sala 20',
          },
          {
            id: '10',
            date: '03/01/2022',
            doctorId: 6,
            address: 'Av Bento Gonçalves 965',
            details: 'é na sala 20',
          },
          {
            id: '11',
            date: '03/01/2022',
            doctorId: 6,
            address: 'Av Bento Gonçalves 965',
            details: 'é na sala 20',
          },
          {
            id: '12',
            date: '03/01/2022',
            doctorId: 6,
            address: 'Av Bento Gonçalves 965',
            details: 'é na sala 20',
          },
        ]}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <>
            <View style={styles.headerText}>
              <Text style={styles.headerText}>{item.date}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>{item.address}</Text>
              <Text style={styles.text}>{item.details}</Text>
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
}
