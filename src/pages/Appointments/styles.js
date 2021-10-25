import {StyleSheet} from 'react-native';
import {Text, View, Button, FlatList, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  row: {
    backgroundColor: '#9f9f9f',
    borderRadius: 4,
    flexDirection: 'row',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 15,
    flex: 1,
  },
  text: {
    flex: 5,
    color: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    lineHeight: 20,
    color: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'center',
  },
  addButton: {
    width: 100,
    height: 100,
    backgroundColor: '#f3f3f3',
    borderRadius: 100,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
});

export default styles;
