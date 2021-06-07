import { StyleSheet } from 'react-native'
import Color from '../../Helper/Color'

export default StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  introText: {
    fontSize: 20,
    color: 'gray',
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: 25,
    marginVertical: 15
  },
  btnAddNew: {
    height: 40,
    width: 250,
    backgroundColor: Color.BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 5
  }
})