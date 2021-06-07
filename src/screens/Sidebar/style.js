const React = require("react-native");
const { Platform } = React;

const commonColor = require("../../theme/variables/commonColor");

export default {
  drawerContent: {
    paddingTop: Platform.OS === "android" ? 0 : 30,
    backgroundColor: "#fff"
  },
  headerView: {
    flexDirection: "row",
    paddingLeft: 15,

    marginLeft: Platform.OS === "ios" ? undefined : -30,
    marginBottom: 5
  },
  searchBlockView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    marginTop: Platform.OS === "android" ? 10 : 0
  },
  sidebarSearch: {
    flex: 1,
    height: Platform.OS === "android" ? 35 : 35,
    paddingBottom: 0,

    marginLeft: Platform.OS === "android" ? 25 : null,
    backgroundColor: "transparent",
    borderRadius: 8,
    borderBottomWidth: 1,
    paddingLeft: 15,
    borderBottomColor: "#000",
  },
  searchIcon: {
    fontSize: 20,
    color: "#bbb"
  },
  searchPlaceholder: {
    top: Platform.OS === "ios" ? undefined : -2
  },
  settingsIcon: {
    color: "#000",
    fontSize: 28
  },
  userDataListitem: {
    paddingBottom: 15,
    paddingLeft: Platform.OS === "android" ? 0 : 0,
    position: "relative"
  },
  userDataNameText: {
    color: "#000",
    fontSize: 18
  },
  userDataDescriptionText: {
    color: "#999",
    fontSize: 13,
    fontWeight: "bold"
  },
  userDataArrowIcon: {
    color: "rgba(255,255,255,0.3)",
    position: "absolute",
    right: 10,
    top: 25
  },
  menuHeadView: {
    backgroundColor: "#fff"
  },
  menuHeaderText: {
    color: commonColor.lightTextColor,
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 10
  },
  menuIconContainerView: {
    height: 30,
    width: 30,
    // justifyContent: "center",
    // alignItems: "center"
  },
  menuIcon: {
    fontSize: Platform.OS === "ios" ? 25 : 25,
    color: "#fff",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  menuItemText: {
    paddingLeft: 15,
    color: commonColor.contentTextColor,
    fontSize: 15
  },
  contactListView: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#DDDEE3",
    paddingBottom: 30
  }
};
