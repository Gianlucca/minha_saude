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
    borderColor: '#2b2d42',
    color: '#2b2d42',
  },
  iconButton: {
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#2b2d42',
  },
  textInput: {
    flex: 1,
    justifyContent: 'flex-start',
    color: '#2b2d42',
  },
  picker: {
    flex: 1,
    marginTop: 15,
  },
  rowIcon: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  inputRow: {
    paddingLeft: 5,
    paddingRight: 15,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
});

export default styles;
