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
    paddingBottom: 4
  },
  imgAdd: {
    marginLeft: 10,
    borderRadius: 13,
    color: Color.BLUE,
    fontSize: 25
  },
  totalAmountText: {
    color: Color.BLUE,
    fontSize: 20,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 10
  }
  ,
  subContainer: {
    paddingVertical: 12,
    alignItems: 'flex-start',
  },
  headerbtnContainer: {
    flexDirection: 'row',
    backgroundColor: Color.BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: 4
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
    borderColor: Color.BLUE,
    borderWidth: 1,
    borderRadius: 5
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  genrateBillContainer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.BLUE,
  }
})