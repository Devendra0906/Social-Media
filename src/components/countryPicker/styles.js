import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../Helper/Color'

const { width, height } = Dimensions.get('window');

const SCREEN_WIDTH = width - 20;
const SCREEN_WIDTH2 = width - 60;


export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:1,
  },
  basicContainer: {
    zIndex: 999,
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryInfo: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: COLORS.TEXT_FIELD_BG,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: COLORS.TEXT_FIELD_BORDER,
    alignItems: 'center',
    flexDirection: 'row',
    color: COLORS.BLACK,
    letterSpacing: 1.2,
    fontSize: 16
  },
});
