import {StyleSheet, Dimensions} from 'react-native';
import Color from '../../Helper/Color';
const WIDTH = Dimensions.get('window').width;

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
  btnPlus: {
    tintColor: Color.BLACK,
    width: 25,
    height: 25,
    margin: 10,
  },
  headerText: {
    fontSize: 20,
    color: Color.BLACK,
  },
  subHeader: {
    height: 50,
    backgroundColor: 'rgb(70,75,92)',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subHeaderContentsView: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  confirmedView: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'rgb(107,232,137)',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  contentText: {
    color: 'rgb(70,75,92)',
    fontSize: 18,
  },
  cellContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    paddingRight: 10,
    borderRightColor: 'lightgray',
    borderRightWidth: 2,
    borderTopColor: 'lightgray',
    borderTopWidth: 2,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 2,
    marginHorizontal: 10,
  },
  profilePic: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  timeText: {
    color: 'rgb(70,75,92)',
    fontSize: 18,
  },
  taskStatusText: {
    fontSize: 20,
    paddingVertical: 10,
    backgroundColor: Color.WHITE,
  },
  modelStyle1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },
  modelStyle2: {
    width: WIDTH - 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 15,
  },
  modalHeader: {
    color: 'rgb(107,232,137)',
    fontSize: 20,
    marginTop: 8,
    marginLeft: 8,
  },
  textInput: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
    marginVertical: 8,
    fontSize: 14,
    paddingBottom: 4,
  },
  loading: {
    fontSize: 30,
  },
});
