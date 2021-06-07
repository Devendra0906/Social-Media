const React = require("react-native");
const { Platform, Dimensions } = React;

const lightTextColor = require("../../theme/variables/commonColor")
  .lightTextColor;

const deviceHeight = Dimensions.get("window").height;

export default {
  content: {
    marginBottom: Platform.OS === "ios" ? 0 : undefined
  },
  title: {
    fontSize: 14,
    color: "#000",
    backgroundColor: '#fff',
    textAlign: 'left',
    paddingLeft: 10,
    paddingVertical: 10
  },
};
