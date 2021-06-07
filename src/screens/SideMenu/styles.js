import { StyleSheet } from 'react-native'
import Color from '../../Helper/Color'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.OFF_WHITE
  },
  flatList: {
    paddingHorizontal: 10
  },
  screensList: {
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: 'center',
    height: 90,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: Color.WHITE,
    borderRadius: 8
  },
  screenTitle: {
    fontSize: 16,
    color: 'black',
    marginTop: 8
    // marginLeft: 15
  },
  headerContainer: {
    marginHorizontal: 0,
    paddingHorizontal: 10,
    flexDirection: 'row',
    paddingVertical: 20,
    marginBottom: 10,
    alignItems: 'center'
  },
  imageContainer: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  userName: {
    marginTop: 10,
    fontSize: 20,
    color: Color.BLACK
  },
  viewProfile: {
    marginTop: 3,
    fontSize: 15,
    color: Color.GREY
  }
})