import Color from "../../../../Helper/Color";

const React = require("react-native");
const { Dimensions, Platform, PixelRatio } = React;
const deviceWidth = Dimensions.get("window").width;

export default {
  profileImgInnerView: {
    flexDirection: 'row',
    backgroundColor: Color.WHITE,
    marginTop: 15
  },
  profileImg: {
    height: deviceWidth / 3.5,
    width: deviceWidth / 3.5,
    borderRadius: 8,
  },
  editCamIcon: {
    marginRight: 5,
    fontSize: 20
  },
  profileNameContainerView: {
    marginLeft: 10,
    flex: 1
  },
  userNameText: {
    fontSize: 17,
    color: Color.BLACK
  },
  pendingPostText: {
    fontSize: 13,
    paddingTop: 0,
    color: Color.BLACK
  },
  sectionContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 15,
    backgroundColor: Color.WHITE
  },
  sectionTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 0
  },
  editIcon: {
    color: Color.GREY,
    fontSize: 20
  },
  experienceListItem: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 10,
  },
  companyImage: {
    width: 40,
    height: 40,
    borderRadius: 8
  },
  experienceDetailContainer: {
    flex: 1,
    marginLeft: 10
  },
  designationText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Color.BLACK
  },
  experienceDetailText: {
    fontSize: 12,
    color: Color.BLACK,
    marginTop: 1
  },
  separator: {
    marginHorizontal: 0,
    height: 0.5,
    backgroundColor: Color.LIGHT_GREY
  },
  accomplishmentContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
};
