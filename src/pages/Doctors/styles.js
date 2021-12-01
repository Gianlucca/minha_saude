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
    padding: 20,
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
  text: {
    flex: 6,
    color: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  rowIcon: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignContent: 'center',
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
