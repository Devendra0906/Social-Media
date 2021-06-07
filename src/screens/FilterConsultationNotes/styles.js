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
  headerText: {
    fontSize: 20,
  },
  dropdownContainer: {
    marginTop: 5,
    borderBottomColor: 'gray',
    marginHorizontal: 15,
    paddingBottom: 15
  },
  dropdownTitle: {
    color: 'gray',
    fontSize: 18,
    marginRight: 15
  },
  baseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#666',
    borderBottomWidth: 0.5,
    marginTop: 5
  },
  input: {
    flex: 1,
    marginHorizontal: 0,
    fontSize: 15,
    paddingVertical: 8
  },
  sectionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderBottomColor: Color.BLUE,
    borderTopColor: Color.BLUE,
    borderLeftColor: Color.BLUE,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    height: 30
  },
  textInput: {
    fontSize: 15
  },
})