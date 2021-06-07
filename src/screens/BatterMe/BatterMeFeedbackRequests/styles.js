import Color from "../../../Helper/Color";

export default {
  listViewBlock: {
    backgroundColor: "#DDDEE3",
    flex: 1
  },
  listItem: {
    borderRadius: 5,
    // borderWidth: 1,
    // borderColor: '#90949C',
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listButtonContainer: {
    marginHorizontal: 15,
    marginBottom: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY
  },
  itemIcon: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  tagTextContainer: {
    paddingHorizontal: 10,
    height: 26,
    borderRadius: 13,
    marginRight: 7,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
    paddingHorizontal: 15,
  },
}