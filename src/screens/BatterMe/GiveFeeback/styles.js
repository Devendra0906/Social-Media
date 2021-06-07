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
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7,
    alignItems: 'center',
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
  feedbackIcon: {
    fontSize: 20,
    color: '#fff'
  },
  feedbackIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden'
  },
  feedbackIconMainContainer: {
    position: 'absolute',
    right: 30,
    width: 130,
    flexDirection: 'row',
    zIndex: 999,
    backgroundColor: 'transparent'
  }
}