const React = require("react-native");
const { Dimensions, Platform } = React;

const commonColor = require("../../theme/variables/commonColor");
const deviceWidth = Dimensions.get("window").width;

export default {
  headerBtn: {
    alignSelf: "center",
    marginLeft: 10
  },
  sidebarIcon: {
    resizeMode: "contain",
    height: 30,
    width: 30
  },
  content: {
    flex: 1
  },
  detailsBlockView: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderBottomWidth: 10,
    borderTopWidth: 10,
    borderColor: "#DDDEE3"
  },
  whatsOnMindView: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    paddingBottom: 10
  },
  nameText: {
    color: commonColor.lightTextColor,
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10
  },
  navLinksView: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  navLinkBtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  navLinkIcons: {
    height: 17,
    width: 17,
    alignSelf: "center",
    resizeMode: "contain"
  },
  navLinkText: {
    marginLeft: 6,
    color: commonColor.lightTextColor,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center"
  },
  listViewBlock: {
    marginTop: 3
  },
  thumbnail: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  userNameText: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 3
  },
  timeText: {
    fontSize: 12,
    color: commonColor.textColor
  },
  globeIcon: {
    resizeMode: "contain",
    height: 13,
    width: 13,
    marginLeft: 5,
    marginTop: 1
  },
  postContentText: {
    color: commonColor.contentTextColor,
    lineHeight: Platform.OS === "ios" ? 20 : 22
  },
  cardFooterIcons: {
    fontSize: 20,
    color: commonColor.lightTextColor
  },
  cardFooterText: {
    color: commonColor.lightTextColor,
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 5
  },
  activeIcon: {
    color: "#000"
  },
  rowHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center"
  },
  col: {
    height: 50,
    width: deviceWidth / 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  topOptions: {
    color: "#484D51",
    marginTop: 10
  },
  topIcons: {
    color: "#484D51"
  },
  searchInputGroup: {
    flex: 1,
    height: 40,
    backgroundColor: "#293E6B",
    borderRadius: 8,
    borderBottomWidth: 0,
    paddingLeft: 15,
    paddingRight: 15
  },
  searchIcon: {
    fontSize: 20
  },
  inputBox: {
    height: 40
  },
  contentView: {
    flex: 1
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
  listItemContainer: {
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden'
  },
  likeItemContainer: {
    borderTopColor: '#DDDEE3',
    borderBottomColor: '#DDDEE3',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    alignItems: 'center',
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  commentItemContainer: {
    backgroundColor: '#fff',
    padding: 10
  },
  inputContainer: {
    height: 40,
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    backgroundColor: '#efefef',
    borderColor: '#DDDEE3',
    flexDirection: 'row'
  },
  thumbImage: {
    height: 30,
    width: 30,
    borderRadius: 15
  },
  commentInput: {
    color: '#000',
    flex: 1,
    fontSize: 15,
    paddingHorizontal: 8,
  },
  newPostMainContainer: {
    backgroundColor: '#fff',
    height: 50,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 5,
    padding: 5,
    flexDirection: 'row',
    marginBottom: 15
  },
  postItemContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  postText: {
    marginLeft: 10,
    color: '#bbb',
    fontSize: 15,
    fontWeight: 'bold'
  },
  verticalSaperator: {
    height: 40,
    width: 1,
    backgroundColor: '#DDDEE3'
  }
};
