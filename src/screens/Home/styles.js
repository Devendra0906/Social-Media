import Color from "../../Helper/Color";

const React = require("react-native");
const { Dimensions, Platform } = React;

const commonColor = require("../../theme/variables/commonColor");
const deviceWidth = Dimensions.get("window").width;

export default {
  content: {
    marginBottom: Platform.OS === "ios" ? 0 : undefined
  },
  listViewBlock: {
    marginTop: 3
  },
  newPostMainContainer: {
    backgroundColor: '#fff',
    height: 50,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 5,
    padding: 5,
    flexDirection: 'row',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY
  },
  postItemContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 15
  },
  postText: {
    marginLeft: 10,
    color: '#666',
    fontSize: 15,
    flex: 1
  },
  verticalSaperator: {
    height: 40,
    width: 1,
    backgroundColor: '#DDDEE3'
  },
  tabImage: {
    width: 25,
    height: 25,
    opacity: 0.6
  },
  badgeTextContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 3,
    backgroundColor: 'red',
    height: 16,
    width: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  badgeText: {
    color: 'white',
    fontSize: 11,
  },
};
