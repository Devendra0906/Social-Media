import Color from "../../../../Helper/Color";

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
  listItem: {
    marginHorizontal: 15,
    marginBottom: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY
  },
  flatList: {
    flex: 1,
    paddingVertical: 20
  },
  buttonContainer: {
    borderRadius: 5,
    overflow: 'hidden'
  },
  compitenciesContainer: {
    backgroundColor: 'rgb(245,245,245)',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  compitenciesCount: {
    color: '#6495ed',
    fontSize: 25,
    fontWeight: '700'
  },
  compitenciesText: {
    color: '#90949C',
    fontWeight: '500'
  },
  commentContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderBottomColor: '#90949C',
    borderTopColor: '#90949C',
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  commentText: {
    color: '#000'
  },
  tagMainContainer: {
    flexDirection: 'row'
  },
  verticalLine: {
    marginVertical: 0,
    width: 8,
    marginRight: 5
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10
  },
  tagTextContainer: {
    paddingHorizontal: 10,
    height: 26,
    borderRadius: 13,
    marginLeft: 7,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center'
  }
};
