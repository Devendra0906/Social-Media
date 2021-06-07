import {
  Dimensions,
  StyleSheet
} from 'react-native';
import Constants from '../../Helper/Constants';
import Color from '../../Helper/Color';
const { width } = Dimensions.get('window')
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE
  },
  infoItemContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  infoTitle: {
    fontWeight: '700',
    fontSize: 25,
    color: Color.BLUE,
    textAlign: 'center',
    fontFamily: Constants.AppFont
  },
  infoDescription: {
    fontSize: 18,
    textAlign: 'center',
    color: Color.GREY,
    marginTop: 20,
    fontFamily: Constants.AppFont
  },
  dotsContainer: {
    alignSelf: 'center',
    flexDirection: 'row'
  },
  dot: {
    marginHorizontal: 3,
    borderRadius: 4,
    height: 8,
    width: 8,
  },
  loginContainer: {
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 10
  },
  registerContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: Color.BLUE
  }
})