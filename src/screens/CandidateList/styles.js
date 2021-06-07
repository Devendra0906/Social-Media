import { StyleSheet, Dimensions } from 'react-native';
import Color from '../../Helper/Color';
const { height, width } = Dimensions.get("window");

export default styles = StyleSheet.create({
  viewContiner: {
    backgroundColor: Color.WHITE,
    flex: 1
  },
  candidateListItemContainer: {
    marginHorizontal: 20,
    backgroundColor: Color.WHITE,
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY
  },
  buttonsContainer: {
    marginTop: 15,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  locationContainer: {
    marginTop: 2,
    flexDirection: "row",
    alignItems: "center"
  },
  locationIcon: {
    color: "rgba(28, 117, 245, 1)",
    fontSize: 17
  },
  locationText: {
    fontSize: 11,
    color: "#000",
    marginLeft: 5
  },
  filterButtonContainer: {
    marginHorizontal: 0,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.WHITE,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY,
    marginBottom: 15
  },
  filterViewContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 15
  },
  filterIconStyle: {
    fontSize: 15
  },
  filterText: {
    fontSize: 11,
    color: "#000",
    marginLeft: 8
  },
  dropdownTitleStyle: {
    textAlign: "center",
    width: 60,
    fontSize: 11,
    color: "#000"
  },
  dropdownStyle: {
    marginTop: 10,
    marginLeft: -12,
    paddingLeft: 0,
    width: 120,
    height: 200
  },
  dropdownTextStyle: {
    fontSize: 16,
    paddingTop: 4,
    paddingBottom: 4,
    color: "#555"
  },
  dropdownTextHighlightStyle: {

  },
  candidateDetailContainer: {
    flexDirection: "row",
    alignSelf: "center"
  },
  candidateProfile: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#ddd'
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10
  },
  candidateName: {
    fontSize: 16,
    fontWeight: "600"
  },
  lastConnectedStatus: {
    fontSize: 10,
    color: "#999"
  },
  totalExperienceStyle: {
    fontSize: 10,
    color: '#000',
    fontWeight: "500"
  },
  profileButtonTitle: {
    fontSize: 14,
    color: '#000',
    fontWeight: "600"
  },
  profileButtonStyle: {
    backgroundColor: Color.WHITE,
    borderWidth: 1,
    borderColor: '#000',
    height: 28,
    margin: 0,
    padding: 0
  },
  emptyListView: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: width
  },
  emptyImage: {
    height: width * 0.9,
    width: width * 0.9
  },
  emptyViewText: {
    textAlign: "center"
  },
  lockIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    height: 20,
    width: 20,
    zIndex: 999
  },
  dropdownContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})