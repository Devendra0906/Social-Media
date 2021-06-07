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
    fontSize: 20,
  },
  mainImage: {
    alignSelf: 'center',
    height: 150,
    width: 150,
    marginTop: 25,
    tintColor: 'red'
  },
  subHeader: {
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#888',
    borderBottomWidth: 1
  },
  introText: {
    fontSize: 20,
    color: 'gray',
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: 25,
    marginVertical: 15
  },
  btnAddNew: {
    height: 40,
    width: 250,
    backgroundColor: Color.BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 5
  },
  descStyle: {
    fontSize: 20,
    color: Color.BLACK,
    marginVertical: 4
  },
  nameStyle: {
    fontSize: 15,
    color: Color.GREY,
    fontWeight: '600'
  },
  cellContainer: {
    paddingTop: 5,
    marginTop: 5,
    borderBottomColor: 'red',
    borderBottomWidth: 0.3,
    marginLeft: 15
  },
})