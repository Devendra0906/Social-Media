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
    paddingHorizontal: 0,
    width: 100
  }
})