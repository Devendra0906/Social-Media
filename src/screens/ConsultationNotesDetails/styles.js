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
  subContainer: {
    paddingVertical: 12,
    alignItems: 'center',
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
  introText: {
    fontSize: 16,
    color: 'gray',
    marginTop: 15
  },
  containerView: {
    flexDirection: 'row',
    marginTop: 15,
    paddingHorizontal: 15,
    // alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
    paddingBottom: 10
  },
  introductionView: {
    marginTop: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
    paddingBottom: 10
  },
  modelStyle1: {
    flex: 1,
    backgroundColor: 'white'
  }
})