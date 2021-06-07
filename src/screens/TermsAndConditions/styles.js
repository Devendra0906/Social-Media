import { StyleSheet } from 'react-native';
import Color from '../../Helper/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE
  },
  dataContainer: {
    padding: 20,
    justifyContent: 'space-between',
    flex: 1
  },
  detailContainer: {
    marginTop: 10
  },
  headerText: {
    fontWeight: '600',
    fontSize: 22,
    marginBottom: 10,
    color: Color.BLACK
  },
  checkboxContainer: {
    marginHorizontal: 0,
    marginTop: 10,
    flexDirection: 'row'
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 18,
    flex: 1,
    marginTop: 7,
    color: Color.GREY
  },
  continueContainer: {
    marginHorizontal: 0,
    marginTop: 10
  },
  continueText: {
    fontSize: 17,
    color: Color.WHITE
  }
})