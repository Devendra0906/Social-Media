import { StyleSheet } from 'react-native';
import Color from '../../Helper/Color';

export default styles = StyleSheet.create({
  listItemContainer: {
    marginVertical: 5,
    borderColor: Color.LIGHT_GREY,
    flexDirection: 'row',
    backgroundColor: Color.WHITE,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center'
  },
})