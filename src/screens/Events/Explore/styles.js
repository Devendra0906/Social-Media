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
    padding: 15,
    paddingBottom: 0,
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  nameText: {
    color: '#000',
    fontWeight: '600'
  },
  date: {
    color: '#666',
    fontSize: 12,
  },
  attendee: {
    fontSize: 11,
    color: '#999'
  }
};
