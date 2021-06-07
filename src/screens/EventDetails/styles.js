const React = require("react-native");
const { Dimensions, Platform } = React;

const commonColor = require("../../theme/variables/commonColor");
const deviceWidth = Dimensions.get("window").width;

export default {
  groupImage: {
    width: deviceWidth,
    height: (deviceWidth * 350) / 1102 * 1.5
  },
  listHeaderContainer: {
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  groupTitleContainer: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginHorizontal: 15,
  },
  titleView: {
    // alignItems: 'center'
  },
  saperator: {
    marginTop: 10,
    height: 10,
    backgroundColor: '#ddd',
    width: '100%'
  },
  addPostContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: 'center',
    width: '100%'
  },
  inputText: {
    flex: 1,
    marginHorizontal: 10,
    color: '#999',
    fontSize: 16
  },
  activityHeader: {
    flexDirection: "row",
    padding: 10,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#ddd',
    justifyContent: 'space-between'
  },
  optionButton: {
    flex: 1,
    alignItems: 'center'
  },
  timeDetailText: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
    alignItems: 'center'
  },
  locationIcon: {
    color: '#999',
    alignSelf: 'flex-start',
    top: 2,
    fontSize: 20,
    width: 25,
    textAlign: 'center'
  },
  attendeeDetailContainer: {
    width: '100%',
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  }
};