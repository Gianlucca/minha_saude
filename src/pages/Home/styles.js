import {StyleSheet} from 'react-native';
import {Text, View, Button, FlatList, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  row: {
    backgroundColor: '#8d99ae',
    borderRadius: 4,
    flexDirection: 'column',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 15,
    flex: 1,
  },
  medicineRow: {
    backgroundColor: '#8d99ae',
    borderRadius: 4,
    flexDirection: 'row',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 15,
    flex: 1,
  },
  detailRow: {
    marginBottom: -5,
    marginTop: -5,
    justifyContent: 'flex-start',
    alignContent: 'center',
    flexDirection: 'row',
  },
  header: {
    color: '#2b2d42',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: -15,
  },
  text: {
    color: '#edf2f4',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignContent: 'center',
  },
  rowIcon: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  addButton: {
    width: 100,
    height: 100,
    backgroundColor: '#2b2d42',
    borderRadius: 100,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
});

export default styles;
