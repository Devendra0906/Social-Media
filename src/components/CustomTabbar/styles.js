import { StyleSheet } from 'react-native';
import Color from '../../Helper/Color';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    borderTopColor: Color.GREY,
    borderTopWidth: 1
  },
  tabContainer: {
    height: 49,
    flexDirection: 'row'
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})