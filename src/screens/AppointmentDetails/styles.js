import { StyleSheet, Dimensions } from 'react-native'
import Color from '../../Helper/Color'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  btnMenu: {
    width: 25,
    height: 20,
    margin: 10
  },
  btnPlus: {
    width: 22,
    height: 22,
    margin: 10
  },
  headerText: {
    fontSize: 20,
  },
  subHeader: {
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.6
  },
  docContainer: {
    flexDirection: 'row',
    backgroundColor: Color.BLUE,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  proPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  appointmentContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingVertical: 8,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.8
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  detailsImg: {
    height: 30,
    width: 30,
    marginRight: 10,
    tintColor: 'gray'
  },
  detailText: {
    color: 'gray',
    fontSize: 16
  },
  bottombtnCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomImg: {
    height: 20,
    width: 20,
    marginBottom: 5
  },
  bottomCont: {
    flexDirection: 'row',
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
    paddingTop: 8
  }
})