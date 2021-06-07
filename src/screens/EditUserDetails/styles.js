import Color from "../../Helper/Color";

export default {
  profileImageButton: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY,
    borderRadius: 75,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#ddd'
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
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff'
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
  }
}