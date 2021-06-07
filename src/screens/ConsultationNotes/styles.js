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
    backgroundColor: Color.BLUE,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    borderColor: 'rgb(238,238,239)',
    borderWidth: 1,
    borderRadius: 5
  },
  emptycontainer: {
    alignItems: 'center',
    marginTop: 30
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