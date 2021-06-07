import { StyleSheet } from 'react-native'
import Color from '../../Helper/Color'
export default style = StyleSheet.create({
  container: {
    flex: 1
  },
  textStyle: {
    flexDirection: "column",
    padding: 40,
    textAlign: "center",
    fontSize: 22,
    color: "#666"
  },
  jobListItemContainer: {
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY
  },
  jobEditIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    padding: 8
  },
  jobTitleText: {
    fontSize: 15,
    color: "#000",
    fontWeight: "bold",
    fontFamily: "HelveticaNeue-Bold",
    marginRight: 30
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
    fontSize: 12,
    color: "#999",
  },
  companyName: {
    fontSize: 13,
    color: "#000",
    fontWeight: "600",
    marginTop: 8
  },
  desctiptionText: {
    fontSize: 13,
    color: "#999",
    marginTop: 5
  },
  jobStatusText: {
    fontSize: 13,
    marginTop: 5,
    fontWeight: "600"
  },
  viewButtonTitle: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold"
  },
  badge: {
    borderRadius: 9,
    height: 18,
    minWidth: 0,
    width: 18
  },
  badgeContainer: {
    position: "absolute",
    zIndex: 1,
    right: 0
  },
  badgeText: {
    fontSize: 10,
    paddingHorizontal: 0
  }
})
