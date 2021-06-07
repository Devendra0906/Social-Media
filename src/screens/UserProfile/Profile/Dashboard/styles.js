import Color from "../../../../Helper/Color";

export default {
  userNameText: {
    fontSize: 17,
    color: Color.BLACK
  },
  sectionContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 15,
    backgroundColor: Color.WHITE
  },
  sectionTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 0
  },
  editIcon: {
    color: Color.GREY,
    fontSize: 20
  },
  separator: {
    marginHorizontal: 0,
    height: 0.5,
    backgroundColor: Color.GREY
  },
  privateText: {
    fontSize: 13,
    color: Color.GREY,
    marginTop: 3
  },
  statViewContainer: {
    marginHorizontal: 0,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: Color.GREY,
    paddingHorizontal: 10,
    marginTop: 15
  },
  stateView: {
    flex: 1,
    paddingVertical: 10
  },
  statText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.BLACK
  },
  stateCenterView: {
    paddingHorizontal: 8,
    borderLeftColor: Color.GREY,
    borderRightColor: Color.GREY,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    marginHorizontal: 8
  },
  dashboardItemContainer: {
    marginHorizontal: 0,
    borderWidth: 0.5,
    borderColor: Color.GREY,
    marginTop: 15,
  },
  dashboardItem: {
    flexDirection: 'row',
    padding: 10
  }
};
