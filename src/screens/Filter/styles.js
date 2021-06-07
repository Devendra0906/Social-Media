import { StyleSheet } from 'react-native'
import Color from '../../Helper/Color'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(249,249,249)',
    justifyContent: 'space-between',
  },
  btnMenu: {
    tintColor: '#fff',
    width: 25,
    height: 20,
    margin: 10
  },
  btnPlus: {
    tintColor: '#fff',
    width: 22,
    height: 22,
    margin: 10
  },
  headerText: {
    fontSize: 20,
    color: '#fff'
  },
  filterByContainer: {
    marginVertical: 8,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
    paddingVertical: 8,
    backgroundColor: 'rgb(244,245,246)',
  },
  filterByText: {
    fontSize: 16,
    color: 'rgb(138,138,138)',
  },
  subContainer: {
    padding: 15,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  instructionText: {
    fontSize: 17,
    color: Color.BLUE,
    fontWeight: '700'
  },
  activateBtn: {
    backgroundColor: Color.BLUE,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    marginTop: 5,
    borderColor: Color.BLUE,
    borderWidth: 1
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15
  },
  applyBtn: {
    backgroundColor: 'rgb(238,81,89)',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }
})