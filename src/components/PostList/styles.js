import { Platform } from "react-native";
import Color from "../../Helper/Color";
import { Col } from "native-base";

export default {
  listItemContainer: {
    marginBottom: 10,
    marginHorizontal: 15,
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY
  },
  userNameText: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 3
  },
  timeText: {
    fontSize: 12,
    color: Color.GREY
  },
  likeItemContainer: {
    borderTopColor: Color.OFF_WHITE,
    borderBottomColor: Color.OFF_WHITE,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  cardFooterIcons: {
    // fontSize: 20,
    width: 25,
    height: 25
    // color: Color.GREY
  },
  postContentText: {
    color: Color.GREY,
    lineHeight: Platform.OS === "ios" ? 20 : 22
  },
  cardFooterText: {
    color: Color.GREY,
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 5
  },
  commentItemContainer: {
    backgroundColor: Color.WHITE,
    padding: 10
  },
  inputContainer: {
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: Color.OFF_WHITE,
    borderColor: Color.OFF_WHITE,
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
    color: Color.BLACK,
    flex: 1,
    fontSize: 15,
    height: 30,
    paddingHorizontal: 8,
    paddingVertical: 0
  }
}