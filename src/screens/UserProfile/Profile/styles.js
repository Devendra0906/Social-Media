import Color from '../../../Helper/Color';

const React = require('react-native');
const {Dimensions} = React;
const deviceWidth = Dimensions.get('window').width;

export default {
  profileImgInnerView: {
    flexDirection: 'row',
    backgroundColor: Color.WHITE,
    marginTop: 15,
  },
  btnMenu: {
    tintColor: Color.BLACK,
    width: 25,
    height: 20,
    margin: 10,
  },
  profileImg: {
    height: deviceWidth / 2.5,
    width: deviceWidth / 2.5,
    borderRadius: 75,
  },
  editCamIcon: {
    marginRight: 5,
    fontSize: 20,
  },
  profileNameContainerView: {
    marginLeft: 10,
    flex: 1,
  },
  userNameText: {
    fontSize: 17,
    color: Color.BLACK,
  },
  pendingPostText: {
    fontSize: 15,
    paddingTop: 0,
    color: Color.BLACK,
  },
  sectionContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 15,
    backgroundColor: Color.WHITE,
  },
  sectionTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 0,
  },
  editIcon: {
    color: Color.GREY,
    fontSize: 20,
  },
  separator: {
    marginHorizontal: 0,
    height: 0.5,
    backgroundColor: Color.GREY,
  },
  tabBarIndicator: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: Color.LIGHT_GREY,
  },
  addProfileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    backgroundColor: Color.BLACK,
    marginTop: 10,
  },
};
