import { StyleSheet } from 'react-native';
import Color from '../../Helper/Color';

export default styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, .4)',
    justifyContent: 'center',
  },
  modalViewContainer: {
    backgroundColor: Color.WHITE,
    marginHorizontal: 50,
  },
  modalHeaderContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backIcon: {
    height: 15,
    width: 15,
    tintColor: Color.WHITE,
  },
  headerTitle: {
    color: Color.WHITE
  },
  backButtonContainer: {
    position: 'absolute',
    alignSelf: 'center',
  },
  inputFieldContainer: {
    padding: 10
  },
  inputField: {
    fontSize: 16,
    color: '#8c8c8c',
    padding: 5,
    minHeight: 20,
    borderRadius: 8,
    marginTop: 4,
    minWidth: 56,
    backgroundColor: 'rgba(0,0,0, .05)'
  },
  inputFieldTitle: {
    color: '#000'
  },
  searchButtonText: {
    fontSize: 20,
    fontWeight: '300',
    color: Color.WHITE
  }
})