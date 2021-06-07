const React = require("react-native");
const { Platform, Dimensions } = React;

// const lightTextColor = require("./../../../theme/variables/commonColor.js")
//   .lightTextColor;

const deviceHeight = Dimensions.get("window").height;

export default {
  content: {
    marginBottom: Platform.OS === "ios" ? 0 : undefined
  },
  searchPlaceholder: {
    top: Platform.OS === "ios" ? undefined : -2,
    backgroundColor: "#fff",
    paddingLeft: 10,
    color: "#000"
  },
  title: {
    fontSize: 14,
    color: "#000",
    backgroundColor: '#fff',
    textAlign: 'left',
    paddingLeft: 10,
    paddingVertical: 10
  },
  groupNameContainer: {
    marginTop: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  groupImage: {
    width: 40,
    height: 40,
    marginVertical: 10,
    borderRadius: 20,
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
  subHeader: {
    fontSize: 15,
    fontWeight: '500',
    color: "#000",
    marginTop: 10
  },
  detailText: {
    fontSize: 14,
    color: "#000",
    marginTop: 5,
    marginBottom: 10
  }
};
