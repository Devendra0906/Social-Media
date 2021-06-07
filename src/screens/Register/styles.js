import { StyleSheet } from 'react-native';
import Color from '../../Helper/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE
  },
  contentContainer: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 20
  },
  image: {
    marginTop: 40
  },
  title: {
    fontWeight: '600',
    marginTop: 20,
    fontSize: 22,
    color: Color.BLACK
  },
  inputContainer: {
    flexDirection: 'row',
    marginHorizontal: 0,
    marginTop: 10,
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
  continueContainer: {
    marginHorizontal: 0,
    marginTop: 10
  },
  continueText: {
    fontSize: 17,
    color: Color.WHITE
  }
})