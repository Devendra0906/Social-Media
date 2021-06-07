import { StyleSheet } from 'react-native';
import Color from '../../Helper/Color';

export default (styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.SHADOW,
  },
  contentOuter: {
    maxHeight: '70%',
    marginHorizontal: 20,
    backgroundColor: Color.WHITE,
    padding: 10,
    borderRadius: 5,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10
  },
  blackDivider: {
    backgroundColor: Color.BLACK,
    height: 1,
  },
  blackDividerBolder: {
    backgroundColor: Color.BLACK,
    height: 2,
  },
  modelCloseStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  modelCloseText: {
    textTransform: "uppercase",
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    color: Color.BLACK,
    alignSelf: 'flex-end'
  },
  modelRowText: {
    color: Color.BLACK,
    fontSize: 16,
    paddingVertical: 5,
  },
  modelRowText2: {
    color: Color.BLACK,
    fontSize: 14,
  },

  modelRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  modelRow2: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modelRowTextHeader: {
    color: Color.BLACK,
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  modelRowTextHeader2: {
    color: Color.BLACK,
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabStyle: {
    flex: 1,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Color.BLACK
  },
  bottomContainerBorder: {
    borderBottomColor: Color.BLACK,
    borderBottomWidth: 1,
  },
  closeButtonContainer: {
    marginHorizontal: 0,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BLACK,
    marginTop: 20
  },
  closrButtonText: {
    color: Color.WHITE, fontSize: 17, fontWeight: 'bold'
  }
}));
