import { StyleSheet } from 'react-native';
import Color from '../../Helper/Color';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  companyImage: {
    width: '100%',
    aspectRatio: 2.5,
    backgroundColor: '#bbb',
    marginBottom: 20
  },
  indicationLabel: {
    fontWeight: '600',
    fontSize: 18
  },
  inputField: {
    backgroundColor: '#fff',
    marginTop: 8,
    borderRadius: 5,
    paddingVertical: 8,
    paddingLeft: 8,
    fontSize: 15,
    color: '#000',
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY
  },
  companyImage: {
    width: '100%',
    aspectRatio: 2.5,
    backgroundColor: '#bbb',
    marginBottom: 20
  },
  floatButtons: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    height: 40,
    width: 40,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY
  },
  dropdownContainer: {
    backgroundColor: '#fff',
    marginTop: 8,
    borderRadius: 5,
    paddingVertical: 8,
    paddingLeft: 8,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY
  },
  filterText: {
    fontSize: 16,
    color: "#000",
    marginLeft: 8,
    paddingVertical: 2,
    textAlign: 'left'
  },
})