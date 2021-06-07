import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  avatarContainer: {
    borderColor: "#9B9B9B",
    borderWidth: 1,
    margin: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    position: "absolute",
    width: "100%",
    height: 200
  },
  subtitleView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 20,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: "grey"
  },
  inputFieldContainer: {
    borderRadius: 8,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    backgroundColor: "rgba(0,0,0,.05)",
    marginTop: 4
  },
  inputField: {
    margin: 0,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    color: "#8c8c8c",
    fontSize: 16,
    textAlignVertical: "top"
  },
  dropdownTextStyle: {
    margin: 0,
    fontSize: 16,
    color: "#8c8c8c",
    padding: 8,
    minHeight: 20,
    minWidth: 80
  },
  addImageButton: {
    width: "100%",
    backgroundColor: "#29323b",
    height: 200,
    paddingLeft: 0,
    paddingRight: 0,
    justifyContent: "center"
  },
  addImageText: {
    fontWeight: "600",
    color: "#FFF",
    paddingLeft: 0,
    paddingRight: 0
  },
  switchContainer: {
    height: 1,
    backgroundColor: '#000'
  },
  enableTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  enableTitleText: {
    color: "#000",
  },
  enablaeTitleStyle: {
    color: "#000",
    fontSize: 16
  },
  dropdownContainerStyle: {
    marginTop: 4,
    right: 0,
    left: 0,
    borderWidth: 0,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0, .05)"
  },
  dropdownStyle: {
    marginTop: -34,
    paddingLeft: 0,
    height: 200,
    right: 15,
    left: 0,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 2
  },
  dropdownHighlightStyle: {
    color: "#fff",
    backgroundColor: "#000"
  },
  jobDescriptionTextLength: {
    alignSelf: "flex-end",
    fontSize: 12,
    color: "#666",
    marginTop: 5
  },
  fullTimeListItemContainer: {
    minHeight: 70,
    borderBottomWidth: 0,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  shiftItemContainer: {
    borderBottomWidth: 0,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10
  },
  shiftContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  shiftTextInput: {
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0, .05)",
    color: "#8c8c8c",
    fontSize: 16,
    width: "25%",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4
  },
  workExperienceDropdownStyle: {
    marginTop: -30,
    marginLeft: 0,
    paddingLeft: 0,
    paddingRight: 0,
    height: 155,
    borderColor: "#000",
    borderWidth: 2
  },
  minSalaryContainer: {
    minHeight: 70,
    borderBottomWidth: 0,
    marginLeft: 10,
    marginRight: 10
  },
  minSalaryInputContainer: {
    paddingTop: 8,
    alignItems: "center",
    justifyContent: "space-between"
  },
  minSalartText: {
    color: "#000",
    fontSize: 14
  },
  startTimeTitle: {
    color: "#000",
    fontSize: 16,
    alignSelf: "flex-start"
  },
  locationButtonStyle: {
    flexDirection: "column",
    zIndex: 10
  },
  locationTextInutContainer: {
    flexDirection: "column",
    width: "100%",
    flex: 1
  },
  mapViewStyle: {
    height: 150,
    width: "100%",
    flex: 1
  },
  datePickerModalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end"
  },
  datePickerContainer: {
    backgroundColor: "#fff",
    paddingBottom: 10
  },
  doneButton: {
    alignItems: "flex-end",
    paddingHorizontal: 15,
    paddingTop: 10
  },
  joblistModalContainer: {
    marginHorizontal: 40,
    height: "60%",
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden"
  },
  modalHeaderContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-between"
  },
  backIcon: {
    height: 15,
    width: 15,
    tintColor: "#fff"
  },

  headerTitle: {
    color: "#fff",
  },
  searchInput: {
    marginHorizontal: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#0004",
    color: "#000",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  separator: {
    marginHorizontal: 0,
    height: 1,
    backgroundColor: "#999"
  },
  emptyListComponent: {
    margin: 20,
    textAlign: "center"
  },
  jobTitleText: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  roleDropdownStyle: {
    marginTop: 4,
    right: 0,
    left: 0,
    borderWidth: 0,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0, .05)"
  },
  roleDropdownContainer: {
    marginTop: -34,
    paddingLeft: 0,
    // width: 265,
    height: 200,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 2
  },
  dropdownTextHighlightStyle: {
    color: "#fff",
    backgroundColor: "#000"
  },
  itemContainer: {
    marginHorizontal: 0,
    flexDirection: 'row'
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  title: {
    fontWeight: '600',
    fontSize: 18
  },
  input: {
    backgroundColor: '#fff',
    marginTop: 8,
    borderRadius: 5,
    paddingVertical: 8,
    paddingLeft: 8,
    fontSize: 15,
    color: '#000',
    borderWidth: 1,
    borderColor: '#ddd'
  }
});