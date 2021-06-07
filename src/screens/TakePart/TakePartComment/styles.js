import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Color from '../../../Helper/Color';

export default {
  listViewBlock: {
    backgroundColor: "#DDDEE3",
    flex: 1
  },
  listItem: {
    borderRadius: 5,
    marginHorizontal: 0
  },
  listButtonContainer: {
    marginHorizontal: 15,
    marginBottom: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY
  },
  itemIcon: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  commentContainer: {
    marginHorizontal: 0,
    paddingHorizontal: 15,
    paddingVertical: 8,
    alignItems: 'center',
    flexDirection: 'row'
  },
  comment: {
    marginLeft: 10,
    fontSize: 15,
    color: '#000'
  },
  dateTime: {
    marginLeft: 10,
    fontSize: 15,
    color: '#bbb'
  },
  title: {
    marginVertical: 8,
    fontSize: 20,
    color: '#000',
    marginHorizontal: 15,
    fontWeight: 'bold'
  },
  time: {
    marginVertical: 8,
    fontSize: 12,
    color: '#bbb',
    marginLeft: 15,
    fontWeight: 'bold'
  },
  reason: {
    marginVertical: 8,
    fontSize: 12,
    color: '#000',
    marginLeft: 15
  },
  optionsContainer: {
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10
  },
  option: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    flex: 1
  },
  optionText: {
    padding: 5,
    flex: 1
  },
  answerCount: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 5
  },
  commentBoxText: {
    marginVertical: 8,
    fontSize: 20,
    color: '#000',
    marginHorizontal: 15,
    fontWeight: 'bold'
  },
  commentInputContainer: {
    marginHorizontal: 0,
    marginTop: 15,
    marginBottom: DeviceInfo.hasNotch() && Platform.OS === 'ios' ? 25 : 5,
    flexDirection: 'row'
  },
  commentInput: {
    marginHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#bbb',
    paddingLeft: 10,
    flex: 1
  },
  sendContainer: {
    marginRight: 15,
    backgroundColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 7
  },
  saperator: {
    marginHorizontal: 0,
    height: 0.5,
    backgroundColor: '#bbb'
  },
  bottomViewContainer: {
    flexDirection: 'row',
    marginHorizontal: 0,
    alignItems: 'center',
    padding: 10
  },

}