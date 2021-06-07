import { StyleSheet, Dimensions } from 'react-native'
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
  instructionText: {
    fontSize: 14,
    color: 'lightgray',
    fontWeight: '600'
  },
  textInput: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
    marginVertical: 8,
    fontSize: 16,
    paddingBottom: 4,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 12
  },
  downArrow: {
    tintColor: 'red',
    height: 12,
    width: 12,
    marginLeft: -15,
    marginTop: 8
  },
  optionsCell: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectionContainer: {
    height: 20,
    width: 20,
    borderRadius: 10,
    padding: 3,
    borderWidth: 1,
    borderColor: 'gray'
  },
  bottomContainer: {
    flexDirection: 'row',
    height: 40,
    borderTopColor: Color.BLUE,
    borderTopWidth: 1
  },
  cancelBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.BLUE
  }
})