import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, StatusBar, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton, Text} from 'react-native-paper';
import AppContext from '../../components/AppContext';
import {getRealmApp} from '../../services/realm-config';
import {useIsFocused} from '@react-navigation/native';
import moment from 'moment';
import styles from './styles.js';

export default function Documents({navigation}) {
  const [documents, setDocuments] = useState([]);
  const isFocused = useIsFocused();
  const myContext = useContext(AppContext);
  const app = getRealmApp();

  useEffect(() => {
    //refresh all documents when page loads
    const fetchAllDocuments = async () => {
      let allDocuments = await app.currentUser.functions.fetchAllDocuments(
        myContext.userToken,
      );
      console.log('fetching all documents');
      setDocuments(allDocuments);
    };
    if (isFocused) {
      fetchAllDocuments();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={documents}
        keyExtractor={item => item._id}
        renderItem={({item}) => {
          let base64Icon = `data:image/png;base64,${item.file}`;
          return (
            <View style={styles.row}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                {item.title !== '' && (
                  <View style={styles.detailRow}>
                    <IconButton
                      style={styles.rowIcon}
                      icon="file-document"
                      color="#edf2f4"
                    />
                    <Text style={styles.text}>{item.title}</Text>
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
                {item.category !== '' && (
                  <View style={styles.detailRow}>
                    <IconButton
                      style={styles.rowIcon}
                      icon="format-list-bulleted-type"
                      color="#edf2f4"
                    />
                    <Text style={styles.text}>{item.category}</Text>
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

              <Image
                style={{
                  flex: 1,
                  width: 50,
                  margin: 10,
                }}
                source={{uri: base64Icon}}
              />
            </View>
          );
        }}
      />
      <IconButton
        onPress={() => navigation.navigate('AddDocuments')}
        icon="plus"
        size={30}
        color="#edf2f4"
        style={styles.addButton}
      />
    </SafeAreaView>
  );
}
