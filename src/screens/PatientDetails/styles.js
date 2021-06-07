import { StyleSheet } from 'react-native';
import Color from '../../Helper/Color';
import Constants from '../../Helper/Constants';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  detailContainer: {
    backgroundColor: Color.WHITE,
    padding: 15,
    borderRadius: 8
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  profileImage: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderRadius: 50
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 20
  },
  detailTitle: {
    // marginTop: 10,
    fontSize: 17,
    color: Color.GREY,
    flex: 1,
  },
  detilText: {
    fontSize: 15,
    fontWeight: '500',
    flex: 0.4,
    textAlign: 'right'
  },
  listItemContainer: {
    marginVertical: 5,
    borderColor: Color.LIGHT_GREY,
    flexDirection: 'row',
    backgroundColor: Color.WHITE,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center'
  },
  brandLogo: {
    height: 40,
    width: 40
  },
  taskDetailContainer: {
    flex: 1,
    marginHorizontal: 10
  },
  taskTitle: {
    fontSize: 15,
    color: Color.GREY
  },
  locationText: {
    fontSize: 12,
    color: Color.GREY,
    marginTop: 5
  },
  flightIdContainer: {
    marginTop: 10
  },
  seeDetailButtonText: {
    fontSize: 11,
    color: Color.BLUE
  },
  title: {
    color: Color.BLACK,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: Constants.AppFont,
    marginTop: 20,
    marginBottom: 10
  },
  inputTitle: {
    color: Color.GREY,
    fontFamily: Constants.AppFont
  },
})