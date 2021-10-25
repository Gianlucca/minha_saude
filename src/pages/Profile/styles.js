import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 15,
  },
  button: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    color: '#fff',
  },
  iconButton: {
    flexDirection: 'row',
    marginTop: 30,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#000',
  },
  textInput: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },
  headerText: {
    color: '#999',
    fontWeight: 'bold',
    fontSize: 36,
    alignSelf: 'center',
    padding: 20,
    margin: 25,
  },
});

export default styles;
