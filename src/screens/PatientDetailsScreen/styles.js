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
    fontSize: 20,
  },
  cellContainer: {
    flex: 1,
    margin: 8,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 0.2,
    backgroundColor: Color.WHITE,
    borderColor: Color.LIGHT_GREY,
    borderWidth: 1
  }
})