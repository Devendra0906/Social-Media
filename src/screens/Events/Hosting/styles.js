const React = require("react-native");
const { Platform, Dimensions } = React;

// const lightTextColor = require("../../../theme/variables/commonColor")
//   .lightTextColor;

const deviceHeight = Dimensions.get("window").height;

export default {
  content: {
    marginBottom: Platform.OS === "ios" ? 0 : undefined
  },
  eventsContainer: {
    backgroundColor: "#fff"
  },
  title: {
    color: "#123432",
    padding: 10,
    paddingBottom: 0,
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 10,
  },
  nameText: {
    fontSize: 15
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: 'center'
  }
};
