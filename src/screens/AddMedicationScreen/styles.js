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
  viewContainer: {
    paddingHorizontal: 20,
    marginTop: 15
  },
  indicationText: {
    fontSize: 16,
    color: Color.BLUE
  },
  textInput: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
    marginVertical: 8,
    fontSize: 18,
    paddingBottom: 4,
  },
  subContainer: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  headerbtnContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgb(238,238,239)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: 4
  },
  instructionText: {
    fontSize: 17,
    color: Color.BLUE,
    fontWeight: '700'
  },
  activateBtn: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    borderColor: 'rgb(238,238,239)',
    borderWidth: 1,
    borderRadius: 5
  },
})