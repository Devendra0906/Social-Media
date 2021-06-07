const React = require("react-native");
const { Platform, Dimensions } = React;

// const lightTextColor = require("../../theme/variables/commonColor")
// .lightTextColor;

const deviceHeight = Dimensions.get("window").height;

export default {
  content: {
    marginBottom: Platform.OS === "ios" ? 0 : undefined
  },
  lazyPlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarIndicator: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(150, 150, 150)'
  }
};
