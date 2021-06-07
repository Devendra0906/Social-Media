import { StyleSheet } from 'react-native'
import Color from '../../Helper/Color'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    justifyContent: 'space-between',
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
    // color: '#fff'
  },
  proPic: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 15
  },
  cameraIcon: {
    alignSelf: 'center',
    height: 25,
    width: 25,
    tintColor: '#fff'
  },
  cameraContainer: {
    marginTop: -15,
    padding: 20,
    height: 40,
    width: 40,
    borderRadius: 25,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 80,
    marginTop: -25
  }
})