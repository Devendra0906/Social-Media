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

})