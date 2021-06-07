import { StyleSheet } from 'react-native';
import Color from '../../Helper/Color';
import Constants from '../../Helper/Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE
  },
  separator: {
    height: 1,
    backgroundColor: Color.LIGHT_GREY,
    marginHorizontal: 20
  },
  itemContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row'
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 8
  },
  newsTitle: {
    fontSize: 20,
    fontFamily: Constants.AppFont,
    color: Color.BLACK,
    fontWeight: '700'
  },
  newsDescription: {
    fontSize: 13,
    fontFamily: Constants.AppFont,
    color: Color.GREY,
    marginTop: 8
  },
  date: {
    fontSize: 13,
    fontFamily: Constants.AppFont,
    color: Color.GREY,
    marginTop: 8,
    alignSelf: 'flex-end'
  }
})