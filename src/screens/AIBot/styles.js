import { StyleSheet } from 'react-native';
import Color from '../../Helper/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  messageContainer: {
    maxWidth: '70%',
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#bbb',
    padding: 8,
    borderRadius: 8,
    marginTop: 10
  },
  inputContainer: {
    flexDirection: 'row',
    marginHorizontal: 0,
    alignItems: 'center',
    paddingVertical: 8
  },
  input: {
    flex: 1,
    paddingVertical: 0,
    borderRadius: 20,
    height: 40,
    borderWidth: 1,
    paddingLeft: 15,
  },

})