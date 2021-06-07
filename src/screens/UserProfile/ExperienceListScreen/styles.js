import Color from "../../../Helper/Color";

const React = require("react-native");

export default {
  sectionContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Color.WHITE
  },
  experienceListItem: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: 10,
  },
  companyImage: {
    width: 40,
    height: 40,
    borderRadius: 8
  },
  experienceDetailContainer: {
    flex: 1,
    marginLeft: 10
  },
  designationText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Color.BLACK
  },
  experienceDetailText: {
    fontSize: 12,
    color: Color.BLACK,
    marginTop: 1
  },
  separator: {
    marginHorizontal: 0,
    height: 0.5,
    backgroundColor: Color.LIGHT_GREY
  },
  editIcon: {
    color: Color.GREY,
    fontSize: 20
  },
};
