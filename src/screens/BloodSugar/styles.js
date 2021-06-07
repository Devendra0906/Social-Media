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
  textInput: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
    marginVertical: 8,
    fontSize: 18,
    paddingBottom: 4,
  },
  activateBtn: {
    backgroundColor: Color.BLUE,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    borderColor: 'rgb(255,49,70)',
    borderWidth: 1,
    borderRadius: 5
  },
  subContainer: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  headerbtnContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgb(255,49,70)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  mainImage: {
    alignSelf: 'center',
    height: 150,
    width: 150,
    marginTop: 25,
    tintColor: 'red'
  }
})