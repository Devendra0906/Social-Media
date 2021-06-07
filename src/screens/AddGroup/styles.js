const React = require("react-native");
const { Platform, Dimensions } = React;

const lightTextColor = require("../../theme/variables/commonColor")
  .lightTextColor;

const deviceHeight = Dimensions.get("window").height;

export default {
  content: {
    marginBottom: Platform.OS === "ios" ? 0 : undefined
  },

  requestContainerOneView: {
    backgroundColor: "#fff",

    height: deviceHeight / 8,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center"
  },
  requestContainerTwoView: {
    backgroundColor: "#fff"
  },
  requestContainerTwoText: {
    color: "#000",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10
  },
  searchPlaceholder: {
    top: Platform.OS === "ios" ? undefined : -2,
    backgroundColor: "#fff",
    paddingLeft: 10,
    color: "#000"
  },
  requestContainerInnerView: {
    flexDirection: "row",
    alignItems: 'center',
  },
  nameText: {
    fontSize: 15,
    marginLeft: 10,
    flex: 1,
  },
  noOfMutualFriendsText: {
    color: lightTextColor
  },
  actionButtonsBlock: {
    flexDirection: "row",
    marginTop: 5
  }
};
