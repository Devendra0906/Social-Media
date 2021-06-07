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
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.6,
    marginHorizontal: 20
  },
  cellContainer: {
    padding: 5,
    marginTop: 8
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
    padding: 2,
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
  patientDetailCont: {
    flexDirection: 'row',
    marginHorizontal: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    paddingBottom: 10
  },
  monitoringPlanCont: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    padding: 10,
    flexDirection: 'row',
  },
  instructionCont: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    paddingBottom: 15
  },
  pricingCont: {
    padding: 10,
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    width: 150
  }
})