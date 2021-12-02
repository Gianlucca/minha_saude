import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, StatusBar, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton, Button, Text} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
import moment from 'moment';

export default function ImageModal({route, navigation}) {
  //const isFocused = useIsFocused();
  //useEffect(() => {
  //  console.log(route.params.base64Icon);
  //}, [isFocused]);
  return (
    <Image
      style={{
        flex: 1,
        maxWidth: '100%',
        maxHeight: '100%',
      }}
      source={{uri: route.params.base64Icon}}
    />
  );
}
