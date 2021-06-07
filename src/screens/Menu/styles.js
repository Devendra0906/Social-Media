import { StyleSheet } from 'react-native';
import Color from '../../Helper/Color';
import Constants from '../../Helper/Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE
  },
  mainViewContainer: {
    marginHorizontal: 20
  },
  title: {
    color: Color.BLACK,
    fontSize: 25,
    fontWeight: '700',
    fontFamily: Constants.AppFont,
    marginTop: 20,
    marginBottom: 10
  },
  inputContainer: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: Color.LIGHT_GREY
  },
  inputTitle: {
    color: Color.GREY,
    fontFamily: Constants.AppFont
  },
  input: {
    color: Color.BLACK,
    fontSize: 20,
    fontFamily: Constants.AppFont,
    paddingVertical: 5,
    marginTop: 5
  },
  listItem: {
    padding: 10,
    borderColor: Color.LIGHT_GREY,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 8
  },
  medicationTitleContainer: {
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  medicine: {
    fontSize: 18,
    fontFamily: Constants.AppFont
  }
})