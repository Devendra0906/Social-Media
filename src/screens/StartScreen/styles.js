import { StyleSheet } from "react-native";
import Color from '../../Helper/Color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.WHITE
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 20,
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greetingsContainer: {
    alignItems: 'center'
  },
  greetingsText: {
    fontSize: 25,
    fontWeight: '800',
    color: Color.BLACK
  },
  weatherContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 3,
    justifyContent: 'center'
  },
  weatherText: {
    color: Color.GREY,
    fontSize: 14,
    marginLeft: 8
  },
  calenderHeaderDate: {
    marginTop: 20,
    alignSelf: 'center',
    color: Color.BLACK,
    fontWeight: '600'
  },
  calender: {
    marginTop: 10,
    height: 70,
    paddingVertical: 5,
    backgroundColor: Color.WHITE,
    borderBottomColor: Color.LIGHT_GREY,
    borderBottomWidth: 1,
    borderTopColor: Color.LIGHT_GREY,
    borderTopWidth: 1
  },
  statusMainContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 20
  },
  statusContainer: {
    flex: 1
  },
  statusCount: {
    color: Color.BLACK,
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 10
  },
  statusTitle: {
    color: Color.BLACK,
    fontSize: 12,
    fontWeight: '600'
  },
  separator: {
    marginHorizontal: 0,
    height: 3,
    backgroundColor: Color.LIGHT_GREY
  },
  statusTextContainer: {
    alignSelf: 'center',
    marginBottom: 5
  },
  listItemContainer: {
    marginVertical: 5,
    marginHorizontal: 15,
    borderColor: Color.LIGHT_GREY,
    flexDirection: 'row',
    backgroundColor: Color.WHITE,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center'
  },
  brandLogo: {
    height: 40,
    width: 40
  },
  taskDetailContainer: {
    flex: 1,
    marginHorizontal: 10
  },
  taskTitle: {
    fontSize: 15,
    color: Color.BLACK
  },
  locationText: {
    fontSize: 12,
    color: Color.GREY,
    marginTop: 5
  }
})

export default styles;