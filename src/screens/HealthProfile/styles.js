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
  flatListStyle: {
    flex: 1,
  },
  nameStyle: {
    fontSize: 17,
    color: Color.BLACK,
  },
  descStyle: {
    fontSize: 16,
    color: Color.LIGHT_GREY,
    marginVertical: 4
  },
  rightArrow: {
    fontSize: 20,
    color: Color.LIGHT_GREY,
    alignSelf: 'center',
  },
  bottomBtn: {
    margin: 15,
    tintColor: 'white',
    height: 35,
    width: 35,
  },
  bottomBtnContainer: {
    backgroundColor: 'rgb(254,176,66)',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 15,
    bottom: 30,
    zIndex: 999
  },
  cellContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    marginTop: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginLeft: 15
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
})