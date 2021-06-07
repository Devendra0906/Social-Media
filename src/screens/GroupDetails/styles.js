const React = require("react-native");
const { Dimensions, Platform } = React;

const commonColor = require("../../theme/variables/commonColor");
const deviceWidth = Dimensions.get("window").width;

export default {
  headerBtn: {
    alignSelf: "center",
    marginLeft: 10
  },
  groupImage: {
    width: deviceWidth,
    height: (deviceWidth * 350) / 1102 * 1.5
  },
  editContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.4)',
    right: 10,
    bottom: 10,
    padding: 8,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  editTitle: {
    color: "#000",
    fontSize: 12,
    marginLeft: 5
  },
  createButtonContainer: {
    width: deviceWidth - 20,
    backgroundColor: "#000",
    borderRadius: 5,
    height: 35,
    justifyContent: 'center',
    marginTop: 10,
  },
  createText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  },
  thumbnail: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  globeIcon: {
    resizeMode: "contain",
    height: 13,
    width: 13,
    marginLeft: 5,
    marginTop: 1
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
    backgroundColor: "#D3D6DB",
    flex: 1
  },
  listHeaderContainer: {
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  editCameraIcon: {
    color: "#000",
    fontSize: 22
  },
  groupTitleContainer: {
    marginTop: 10,
    alignItems: 'center'
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 22,
    fontWeight: '700',
    marginRight: 5
  },
  groupMemberText: {
    fontSize: 12,
    marginRight: 5,
    marginTop: 5
  },
  optionsListItem: {
    marginRight: 10,
    alignItems: 'center',
    height: 30,
    paddingHorizontal: 15,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    borderRadius: 15
  },
  saperator: {
    marginTop: 20,
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
    borderRadius: 20,
    height: 40,
    borderWidth: 1,
    borderColor: '#999',
    marginHorizontal: 10,
    paddingLeft: 15
  },
  activityHeader: {
    flexDirection: "row",
    padding: 10,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#ddd',
    justifyContent: 'space-between'
  },
  listItemContainer: {
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden'
  },
  userNameText: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 3
  },
  timeText: {
    fontSize: 12,
    color: '#666'
  },
  likeItemContainer: {
    borderTopColor: '#DDDEE3',
    borderBottomColor: '#DDDEE3',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  cardFooterIcons: {
    fontSize: 20,
    width: 20,
    color: '#666'
  },
  postContentText: {
    color: '#666',
    lineHeight: Platform.OS === "ios" ? 20 : 22
  },
  cardFooterText: {
    color: '#666',
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 5
  },
  commentItemContainer: {
    backgroundColor: '#fff',
    padding: 10
  },
  inputContainer: {
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#efefef',
    borderColor: '#DDDEE3',
    padding: 5,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
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
    height: 30,
    paddingHorizontal: 8,
    paddingVertical: 0
  }
};