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
  headerText: {
    fontSize: 20,
  },
  dropdownContainer: {
    marginTop: 5,
    borderBottomColor: 'gray',
    marginHorizontal: 15,
    marginTop: 15
  },
  dropdownTitle: {
    color: 'gray',
    fontSize: 16,
    marginRight: 15
  },
  modelStyle1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.COLOR_MODAL_BACKGROUND
  },
  modelStyle2: {
    width: Dimensions.get('window').width - 40,
    backgroundColor: '#FFF',
    borderRadius: 0,
  },
  modalHeader: {
    backgroundColor: Color.BLUE,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleModal: {
    backgroundColor: Color.BLUE,
    fontSize: 18,
    color: Color.WHITE,
    alignSelf: 'center',
    marginVertical: 8,
    flex: 1,
    textAlign: 'center'
  },
  prescribeModalBottomPart: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderTopColor: 'lightgray',
    borderTopWidth: 0.5
  }
})