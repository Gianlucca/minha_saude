import {StyleSheet} from 'react-native';
import {Text, View, Button, FlatList, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  row: {
    backgroundColor: '#9f9f9f',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {color: '#fff'},

  addButton: {
    width: 100,
    height: 100,
    backgroundColor: '#',
    borderRadius: 100,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
});

export default styles;
