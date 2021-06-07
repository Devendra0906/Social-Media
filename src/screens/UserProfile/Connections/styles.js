import { StyleSheet } from 'react-native'
import Color from '../../../Helper/Color'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  filterContainer: {
    flex: 1,
    backgroundColor: Color.SHADOW,
    justifyContent: 'flex-end'
  },
  filterContentContainer: {
    backgroundColor: Color.WHITE,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  shape: {
    backgroundColor: Color.LIGHT_GREY,
    height: 4,
    borderRadius: 2,
    width: '20%',
    marginTop: 10,
    alignSelf: 'center'
  },
  headerContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Color.LIGHT_GREY,
    marginTop: 10,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: 17,
    color: Color.BLACK,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center'
  },
  resetTitle: {
    color: Color.GREY
  },
  sortOptions: {
    height: 30,
    borderRadius: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 10
  },
  sortTitles: {
    fontSize: 15,
    color: Color.BLACK,
    fontWeight: '600'
  },
  filterContent: {
    padding: 20,
    backgroundColor: Color.WHITE
  },
  selectedFilter: {
    backgroundColor: Color.BLUE,
    borderWidth: 0
  },
  showResultButton: {
    height: 50,
    borderRadius: 25,
    backgroundColor: Color.BLUE,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  showResult: {
    fontSize: 18,
    color: Color.WHITE,
    fontWeight: '600'
  }
})