import { StyleSheet } from 'react-native';
import Color from '../../Helper/Color';
const COLOR_ACTIVE = '#000';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: COLOR_ACTIVE,
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 3,
    borderColor: COLOR_ACTIVE,
    borderWidth: 0.5,
  },
  dollar: {
    color: '#FFFFFF',
    fontSize: 10,
  },
  amount: {
    color: '#FFFFFF',
    fontSize: 13,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: COLOR_ACTIVE,
    alignSelf: 'center',
    marginTop: -9,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: COLOR_ACTIVE,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  businessCardContiner: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingBottom: 8,
    paddingTop: 8,
  },
  businessNameText: {
    fontSize: 20,
    color: '#222',
    fontWeight: 'bold',
  },
  businessAddress: {
    fontSize: 12,
    color: '#333',
    marginLeft: 5,
  },
  distanceText: {
    fontSize: 12,
    color: '#666',
  },
  businessDetailContainer: {
    flex: 1,
    borderColor: '#eee',
  },
  jobRoleContainer: {
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  jobRoleText: {
    fontSize: 16,
    color: '#444',
    fontWeight: '600',
  },
  buttonContainerStyle: {
    marginLeft: 0,
    marginRight: 0,
  },
  buttonStyle: {
    backgroundColor: COLOR_ACTIVE,
    paddingVertical: 10,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
  },
  buttonTitleStyle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 14,
    color: '#4c4c4c',
    marginTop: 5,
  },
  jobDetailMainContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  jobdetailContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workExperienceText: {
    color: '#555',
    fontSize: 14,
  },
  workExperienceOptions: {
    fontSize: 14,
    color: '#666',
    fontWeight: 'bold',
  },
  salaryContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  minSalaryLabel: {
    color: '#555',
    fontSize: 14,
  },
  minSalaryText: {
    fontSize: 14,
    color: '#666',
    fontWeight: 'bold',
  },
  maxSalaryContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  maxSalaryLabel: {
    color: '#555',
    fontSize: 14,
  },
  maxSalaryText: {
    fontSize: 14,
    color: '#666',
    fontWeight: 'bold',
  },
  filterButtonContainer: {
    marginHorizontal: 0,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY,
    marginBottom: 15,
  },
  filterViewContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 15,
  },
  filterIconStyle: {
    fontSize: 15,
  },
  filterText: {
    fontSize: 11,
    color: '#000',
    marginLeft: 8,
  },
  dropdownTitleStyle: {
    textAlign: 'center',
    width: 60,
    fontSize: 11,
    color: '#000',
  },
  dropdownStyle: {
    marginTop: 10,
    marginLeft: -12,
    paddingLeft: 0,
    width: 120,
    height: 200,
  },
  dropdownTextStyle: {
    fontSize: 16,
    paddingTop: 4,
    paddingBottom: 4,
    color: '#555',
  },
  dropdownTextHighlightStyle: {},
});
