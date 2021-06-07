const React = require("react-native");
const { Platform, Dimensions } = React;

const lightTextColor = require("../../theme/variables/commonColor")
  .lightTextColor;

const deviceHeight = Dimensions.get("window").height;

export default {
  content: {
    marginBottom: Platform.OS === "ios" ? 0 : undefined
  },
  emailInput: {
    backgroundColor: '#fff',
    marginBottom: 10,
    color: '#000'
  },
  requestContainerTwoView: {
    backgroundColor: "#ddd"
  },
  requestContainerInnerView: {
    flexDirection: "row"
  },
  nameText: {
    fontSize: 15,
  },
  innerContainerView: {
    backgroundColor: '#fff', paddingHorizontal: 10, marginBottom: 10
  },
  iconView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#6666ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  }
};
