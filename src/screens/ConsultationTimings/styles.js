import { StyleSheet } from 'react-native'
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
    fontSize: 18,
  },
  patientMainContainer: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
    paddingBottom: 15
  },
  indicationLabel: {
    color: 'gray',
    fontSize: 15,
    marginBottom: 5
  },
  valueLabel: {
    color: 'black',
    fontSize: 16,
    marginBottom: 5
  },
  dropdownMainContainer: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  dayContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 4,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.4,
    paddingVertical: 4
  }
})