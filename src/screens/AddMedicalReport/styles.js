import { StyleSheet } from 'react-native'
import Color from '../../Helper/Color'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  btnMenu: {
    width: 25,
    height: 20,
    margin: 10
  },
  btnPlus: {
    width: 22,
    height: 22,
    margin: 10
  },
  headerText: {
    fontSize: 18,
  },
  subHeader: {
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#888',
    borderBottomWidth: 1
  },
  headerRightText: {
    fontSize: 14,
    color: Color.BLACK
  },
  inputStyle: {
    marginHorizontal: 0,
    color: Color.BLACK,
    fontSize: 15,
    borderBottomColor: Color.LIGHT_GREY,
    borderBottomWidth: 1,
    marginTop: 5,
    paddingVertical: 10
  }
})