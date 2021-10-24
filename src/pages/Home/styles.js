import {StyleSheet} from 'react-native';
import {Text, View, Button, FlatList, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  row: {
    flex: 1,
    backgroundColor: '#9f9f9f',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  headerText: {color: '#000', fontSize: 24, paddingLeft: 10, paddingTop: 5},
  text: {color: '#fff'},
});

export default styles;
