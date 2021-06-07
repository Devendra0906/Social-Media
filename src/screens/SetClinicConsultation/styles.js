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
  textInput: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
    marginVertical: 8,
    fontSize: 18,
    paddingBottom: 4,
  },
  indicationLabel: {
    color: 'gray',
    fontSize: 16,
    marginBottom: 5
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
  dropdownMainContainer: {
    marginTop: 15,
    marginHorizontal: 15,
    paddingBottom: 15,
  },
  dropdownTextFieldContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
    paddingBottom: 5
  },
  dropdownTextInput: {
    flex: 1,
    marginHorizontal: 0,
    fontSize: 15
  },
  dropdownDownArrow: {
    fontSize: 20,
    color: 'rgb(255,49,70)'
  },
  consultationTiming: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: 20,
    alignItems: 'center'
  },
  phoneSection: {
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 16,
    marginVertical: 15,
    color: 'gray',
    alignSelf: 'center'
  },
  countryInfo: {
    height: 50,
    paddingHorizontal: 12,
    borderBottomWidth: 1.5,
    borderBottomColor: Color.TEXT_FIELD_BORDER,
    alignItems: 'center',
    flexDirection: 'row',
    color: '#000',
    letterSpacing: 1.2,
    fontSize: 14
  },
  flagStyle: {
    height: 20,
    width: 25,
    resizeMode: 'stretch'
  },
  zipCode: {
    color: Color.CHARCOAL_GREY,
    marginLeft: 10
  },
})