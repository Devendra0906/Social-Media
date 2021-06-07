import Color from "../../Helper/Color";

export default {
  commentContainer: {
    marginRight: 10,
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 15
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  userdetailContainer: {
    marginHorizontal: 8,
    flex: 1
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  comment: {
    fontSize: 12,
    color: Color.GREY,
    marginTop: 8
  },
  likeContainer: {
    flexDirection: 'row',
    marginTop: 5
  },
  likeText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  replyText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  repliesList: {
    flexGrow: 0,
    marginLeft: 30
  }
}