import Color from "../../../Helper/Color";

export default {
  listViewBlock: {
    backgroundColor: "#DDDEE3",
    flex: 1
  },
  listItem: {
    borderRadius: 5,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  listButtonContainer: {
    marginHorizontal: 15,
    marginBottom: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY
  },
  itemIcon: {
    width: 30,
    height: 30
  },
  bedgeContainer: {
    position: 'absolute',
    left: 30,
    height: 20,
    width: 20,
    top: 8,
    backgroundColor: '#f00',
    borderRadius: 10,
    zIndex: 99339,
    alignItems: 'center',
    justifyContent: 'center'
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'
  }
}