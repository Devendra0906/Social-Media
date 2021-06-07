import { StyleSheet } from 'react-native';
import Color from '../../Helper/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE
  },
  mainViewContainer: {
    padding: 20,
    justifyContent: 'flex-end',
    flex: 1
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    marginTop: 20,
    paddingHorizontal: 20,
    minWidth: 100
  },
  inputContainer: {
    flexDirection: 'row',
    marginHorizontal: 0,
    marginTop: 30,
    borderRadius: 20,
    height: 40,
    borderWidth: 1,
    paddingLeft: 15,
    alignItems: 'center'
  },
  input: {
    flex: 1,
    paddingVertical: 0
  },
})