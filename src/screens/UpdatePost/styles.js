import Color from "../../Helper/Color";

const React = require("react-native");
const { Platform, PixelRatio } = React;

export default {
  headerBtnText: {
    color: Color.BLACK,
    fontSize: 17
  },
  content: {
    backgroundColor: Color.OFF_WHITE,
    marginBottom: Platform.OS === "ios" ? -50 : undefined
  },
  nameContainerLink: {
    padding: 15,
    backgroundColor: Color.WHITE,
    flexDirection: "row",
  },
  userNameText: {
    fontSize: 17,
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: "bold"
  },
  profileVisibilityText: {
    fontSize: 12,
    color: Color.GREY
  },
  textareaView: {
    marginHorizontal: 5,
    backgroundColor: Color.WHITE,
    padding: 10,
    borderBottomWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    borderBottomColor: Color.LIGHT_GREY
  },
  textarea: {
    height: 160,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY,
    padding: 5,
    marginBottom: 10,
    fontSize: 20,
    color: "rgba(0,0,0,0.5)",
    textAlignVertical: "top"
  },
  optionsView: {
    backgroundColor: Color.WHITE,
    paddingTop: 5
  },
  optionIcon: {
    fontSize: 30,

    paddingLeft: 3
  },
  optionText: {
    fontSize: 16,
    paddingTop: 5,
    paddingLeft: 1
  },
  userInfoContainer: {
    marginTop: 8,
    alignItems: 'flex-start'
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY,
    borderRadius: 20
  },
  globeIcon: {
    color: Color.LIGHT_GREY,
    fontSize: 15,
    marginRight: 5
  },
  dropDownIcon: {
    color: Color.LIGHT_GREY,
    fontSize: 15,
    marginLeft: 5
  },
  filterContainer: {
    flex: 1,
    backgroundColor: Color.SHADOW,
    justifyContent: 'flex-end'
  },
  filterContentContainer: {
    backgroundColor: Color.WHITE,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  shape: {
    backgroundColor: Color.LIGHT_GREY,
    height: 4,
    borderRadius: 2,
    width: '15%',
    marginTop: 10,
    alignSelf: 'center'
  },
  headerContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Color.LIGHT_GREY,
    marginTop: 10,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: 17,
    color: Color.BLACK,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center'
  },
  resetTitle: {
    color: Color.GREY
  },
  sortOptions: {
    height: 30,
    borderRadius: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 10
  },
  sortTitles: {
    fontSize: 15,
    color: Color.BLACK,
    fontWeight: '600'
  },
  filterContent: {
    padding: 20,
    backgroundColor: Color.WHITE
  },
  selectedFilter: {
    backgroundColor: Color.BLUE,
    borderWidth: 0
  },
  showResultButton: {
    height: 50,
    borderRadius: 25,
    backgroundColor: Color.BLUE,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  showResult: {
    fontSize: 18,
    color: Color.WHITE,
    fontWeight: '600'
  }
};
