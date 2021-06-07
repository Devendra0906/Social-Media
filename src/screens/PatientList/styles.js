import {StyleSheet} from 'react-native';
import Color from '../../Helper/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  btnMenu: {
    tintColor: Color.BLACK,
    width: 25,
    height: 20,
    margin: 10,
  },
  actionButtonIcon: {
    fontSize: 20,
  },
  btnPlus: {
    tintColor: Color.BLACK,
    width: 20,
    height: 20,
    margin: 10,
  },
  headerText: {
    fontSize: 20,
    color: Color.BLACK,
  },
  currentlyTrialContainer: {
    backgroundColor: 'rgb(254,176,66)',
    borderRadius: 4,
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 15,
  },
  trialPeriodText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 16,
  },
  patientShowingContainer: {
    marginVertical: 8,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flatListStyle: {
    flex: 1,
  },
  cellContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  btnRadio: {
    tintColor: 'gray',
    width: 22,
    height: 22,
    margin: 5,
  },
  profilePic: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  patinetDetails: {
    fontSize: 15,
    color: 'gray',
  },
  activePatient: {
    fontSize: 14,
    color: 'rgb(138,138,138)',
    fontWeight: '700',
  },
  bottomBtn: {
    margin: 15,
    tintColor: 'white',
    height: 35,
    width: 35,
  },
  bottomBtnContainer: {
    backgroundColor: 'rgb(254,176,66)',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 15,
    bottom: 30,
    zIndex: 999,
  },
  loading: {
    fontSize: 30,
  },
});
