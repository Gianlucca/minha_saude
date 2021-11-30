import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
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
  textInput: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },
  image: {width: 200, height: 220},
});

export default styles;
