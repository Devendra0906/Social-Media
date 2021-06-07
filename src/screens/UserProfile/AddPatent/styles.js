import Color from "../../../Helper/Color";

export default {
  profileImageButton: {
    alignSelf: 'center',
    borderRadius: 75,
    marginTop: 15,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY
  },
  imageContainer: {
    height: 150,
    width: 150,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  editIcon: {
    color: '#666',
    fontSize: 20
  },
  editContainer: {
    position: 'absolute',
    bottom: 0,
    right: 15,
    zIndex: 999,
    padding: 5,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY
  },
  textInput: {
    marginHorizontal: 0,
    paddingVertical: 8,
    fontSize: 15,
    borderBottomColor: '#666',
    borderBottomWidth: 0.5
  },
  saveContainer: {
    marginTop: 30,
    marginHorizontal: 15,
    backgroundColor: '#000',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  saveText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#fff'
  },
  checkboxContiner: {
    marginHorizontal: 0,
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center'
  },
  checkbox: {
    fontSize: 25,
    color: '#000'
  },
  checkboxText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 10
  }
}