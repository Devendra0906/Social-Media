// Global imports
import React, {Component} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  SectionList,
  Modal,
  TextInput,
} from 'react-native';
import {Header} from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ActionSheet from 'react-native-actionsheet';
import moment from 'moment';

// File imports
import styles from './styles';
import {headerMarginTop} from '../../Helper/Constants';
import localizedStrings from '../../Helper/LocalisedString';

// Image imports
import imgMenu from '../../../assets/images/menu.png';
import imgPlus from '../../../assets/images/plus.png';
import imgRefresh from '../../../assets/images/refresh.png';
import profileImg from '../../../assets/images/batman.jpg';
import imgCalendar from '../../../assets/images/calendar.png';
import imgTick from '../../../assets/images/tick.png';
import Color from '../../Helper/Color';
import imgFilter from '../../../assets/images/filter.png';
import {fetchAppointments} from '../../__Redux/__actions/appointmentActions';
import {connect} from 'react-redux';
/*
 {
  "aptdatetime": "2021-04-12T10:25:32.810536", 
  "drname": "string",
  "id": "c0749f18-6c51-4ec2-a590-eaf903839ced", 
  "mobile": 9373072048, 
  "patient_firstname": "string",
  "patient_lastname": "string",
  "reason": "string"}
*/
// const dummnyJune18 = [this.props.state.appointmentReducer.items];
const dummnyJune19 = [
  {
    title: 'test test',
    description: 'Video Consultation(15 mins)',
    drName: 'Dr. Stefan Wagner',
    type: 'Wagner',
    isFree: true,
    time: '02:45 AM',
    color: 'rgb(97,223,245)',
  },
  {
    title: 'test test',
    description: 'Clinic Consultation(15 mins)',
    drName: 'Dr. Stefan Wagner',
    type: 'Wagner',
    isFree: true,
    time: '12:00 AM',
    color: 'rgb(255,187,88)',
  },
];

class AppointmentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultDate: new Date(),
      isOpenRescheduleModal: false,
      isOpenConfirmModal: false,
      showDatePicker: false,
      type: 'start',
      startDate: '',
      endDate: '',
      rescheduledNote: '',
      confirmAppointment: '',
    };
  }

  testfn(val) {
    return val + 1;
  }
  componentDidMount() {
    this.props.getAppointments();
    // console.log('appointments', this.props.state.appointmentReducer);
  }
  render() {
    return this.renderMainView();
  }

  _onPressDatePicker = type => {
    this.setState({isOpenRescheduleModal: false}, () => {
      this.setState({showDatePicker: true, type: type});
    });
  };

  hideDatePicker = () => {
    this.setState({showDatePicker: false}, () => {
      setTimeout(() => {
        this.setState({isOpenRescheduleModal: true});
      }, 500);
    });
  };

  handleConfirm = date => {
    if (this.state.type == 'start') {
      this.setState({startDate: moment(date).format('MMM DD, YYYY')});
    } else {
      this.setState({endDate: moment(date).format('hh:mm A')});
    }
    this.hideDatePicker();
  };

  renderMainView = () => {
    const {type} = this.state;
    return (
      <View testID="AppMainView" style={styles.container}>
        {this.renderHeader()}
        {this.renderSubHeader()}
        {this.props.state.appointmentReducer.loading == false ? (
          this.renderSectionList()
        ) : (
          <Text testID="loadingtxt" style={styles.loading}>
            loading...
          </Text>
        )}
        {this.renderRescheduleModal()}
        {this.renderConfirmModal()}
        <DateTimePickerModal
          testID="datePicker"
          isVisible={this.state.showDatePicker}
          mode={type == 'start' ? 'date' : 'time'}
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
          date={this.state.defaultDate}
          // maximumDate={new Date(moment().subtract(16, 'years'))}
        />
        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          title={localizedStrings.appointmentList.selectAppointmtntType}
          options={[
            `${localizedStrings.appointmentList.clinicConsultation}`,
            `${localizedStrings.appointmentList.videoConsultation}`,
            `${localizedStrings.appointmentList.cancel}`,
          ]}
          destructiveButtonIndex={2}
          onPress={index => {
            this.props.navigation.navigate('SetClinicConsultation');
          }}
        />
      </View>
    );
  };

  renderHeader = () => {
    return (
      <Header
        testID="AppHeader"
        containerStyle={{
          backgroundColor: Color.WHITE,
          marginTop: headerMarginTop,
          borderBottomWidth: 0,
        }}
        leftComponent={this.renderLeftHeader()}
        centerComponent={this.renderCenterHeader()}
        rightComponent={this.renderRightHeader()}
      />
    );
  };

  renderLeftHeader = () => {
    return (
      <TouchableOpacity
        testID="LeftHeader"
        onPress={() => this.props.navigation.navigate('SideMenu')}>
        <Image source={imgMenu} style={styles.btnMenu} />
      </TouchableOpacity>
    );
  };

  renderCenterHeader = () => {
    return (
      <Text testID="AppCentertext" style={styles.headerText}>
        {localizedStrings.appointmentList.appointments}
      </Text>
    );
  };

  renderRightHeader = () => {
    return (
      <TouchableOpacity onPress={() => this.ActionSheet.show()}>
        <Image source={imgPlus} style={styles.btnPlus} />
      </TouchableOpacity>
    );
  };

  renderSubHeader = () => {
    return (
      <>
        {/* <View testID="AppSubHeader" style={styles.subHeader}>
          <TouchableOpacity>
            <Image
              source={imgRefresh}
              style={[styles.btnPlus, {tintColor: Color.WHITE}]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[styles.headerText, {fontSize: 17, color: Color.WHITE}]}>
              June 2020
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AppointmentFilter')}>
            <Image
              source={imgFilter}
              style={{height: 25, width: 25, tintColor: Color.WHITE}}
            />
          </TouchableOpacity>
        </View> */}
        <View style={styles.subHeaderContentsView}>
          <Text testID="newText" style={styles.contentText}>
            {localizedStrings.appointmentList.new}
          </Text>
          <View
            style={[
              styles.confirmedView,
              {marginRight: 5, backgroundColor: 'rgb(255,188,92)'},
            ]}>
            <Text>1</Text>
          </View>
          <Text testID="confirmtext" style={styles.contentText}>
            {localizedStrings.appointmentList.confirmed}
          </Text>
          <View style={styles.confirmedView}>
            <Text>1</Text>
          </View>
        </View>
      </>
    );
  };

  renderSectionList = () => {
    const dummnyJune18 = [this.props.state.appointmentReducer.items];

    return (
      <SectionList
        style={styles.flatListStyle}
        contentContainerStyle={{paddingBottom: 25, paddingTop: 15}}
        keyExtractor={this.keyExtractor}
        sections={[{title: '', data: dummnyJune18}]}
        renderSectionHeader={({section}) => (
          <Text style={styles.taskStatusText}> {section.title} </Text>
        )}
        renderItem={this.renderSectionListCell}
      />
    );
  };

  renderSectionListCell = ({item, index}) => {
    var d = new Date(item.aptdatetime);
    return (
      <View style={styles.cellContainer}>
        <View style={{width: 3, height: '100%', backgroundColor: item.color}} />
        <View
          style={{
            marginHorizontal: 5,
            backgroundColor: '#fff',
            width: 85,
            marginTop: 5,
          }}>
          <Image
            source={profileImg}
            style={styles.profilePic}
            resizeMode="cover"
          />
          <Text style={styles.timeText}>
            {d.getHours()}:{d.getMinutes()}
          </Text>
          <Text style={{alignSelf: 'center', color: 'gray'}}>CET</Text>
        </View>
        <View
          style={{width: 3, height: '100%', backgroundColor: 'lightgray'}}
        />
        <View style={{marginHorizontal: 5, flex: 1, marginTop: 5}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>
              {item.patient_firstname} {item.patient_lastname}
            </Text>
            <View style={{alignItems: 'center'}}>
              <Image
                source={profileImg}
                style={{height: 20, width: 20}}
                resizeMode="cover"
              />
              <Text style={{fontSize: 10}}>Video</Text>
            </View>
          </View>
          <Text style={{marginVertical: 4, fontSize: 16}}>{item.reason}</Text>
          <Text style={{fontSize: 16}}>{item.drname}</Text>
          <Text style={{fontSize: 12, color: 'lightgray', marginVertical: 4}}>
            Wagner
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={imgTick}
              style={{height: 15, width: 15, tintColor: 'green'}}
              resizeMode="cover"
            />
            <Text style={{marginLeft: 5, color: 'green', fontWeight: '300'}}>
              Free
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginVertical: 8,
            }}>
            <TouchableOpacity>
              <Text
                testID="AppConfirm"
                style={{color: 'rgb(36,196,253)'}}
                onPress={() => this.setState({isOpenConfirmModal: true})}>
                {localizedStrings.appointmentList.confirm}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginHorizontal: 8}}
              onPress={() => this.setState({isOpenRescheduleModal: true})}>
              <Text testID="resheduleText" style={{color: 'rgb(36,196,253)'}}>
                {localizedStrings.appointmentList.reschedule}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text testID="cancelText" style={{color: 'rgb(36,196,253)'}}>
                {localizedStrings.appointmentList.cancel}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  renderRescheduleModal = () => {
    const {isOpenRescheduleModal} = this.state;
    return (
      <Modal
        animationType="fade"
        transparent
        visible={isOpenRescheduleModal}
        supportedOrientations={['portrait', 'landscape']}
        onRequestClose={() => handleBack()}>
        <View style={styles.modelStyle1}>
          <View style={styles.modelStyle2}>
            <Text testID="resheduleApptext" style={styles.modalHeader}>
              {localizedStrings.appointmentList.rescheduleAppointment}
            </Text>
            {this.renderRescheduledDate()}
          </View>
        </View>
      </Modal>
    );
  };

  renderRescheduledDate = () => {
    return (
      <View testID="ResheduleDate" style={{height: 235}}>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={{alignItems: 'flex-start', flex: 1}}>
            <Text testID="ResheduleDateText" style={{fontSize: 12}}>
              {localizedStrings.appointmentList.rescheduledDate}
            </Text>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => this._onPressDatePicker('start')}>
              <TextInput
                placeholder={moment(new Date()).format('MMM DD, YYYY')}
                style={[styles.textInput, {paddingRight: 22, flex: 1}]}
                value={this.state.startDate}
                editable={false}
                pointerEvents="none"
              />
              <Image
                source={imgCalendar}
                style={{
                  tintColor: 'red',
                  height: 20,
                  width: 20,
                  marginLeft: -15,
                  alignSelf: 'center',
                  marginRight: 5,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{flex: 0.8, marginLeft: 10}}>
            <Text testID="rescheduledTimeText" style={{fontSize: 12}}>
              {localizedStrings.appointmentList.rescheduledTime}
            </Text>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => this._onPressDatePicker('end')}>
              <TextInput
                placeholder={moment(new Date()).format('hh:mm A')}
                style={[styles.textInput, {flex: 1}]}
                value={this.state.endDate}
                editable={false}
                pointerEvents="none"
              />
              <Image
                source={imgCalendar}
                style={{
                  tintColor: 'red',
                  height: 20,
                  width: 20,
                  marginLeft: -15,
                  alignSelf: 'center',
                  marginRight: 5,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.5, marginLeft: 10, justifyContent: 'center'}}>
            <Text style={{fontSize: 12}}>IST(UTC+05:30)</Text>
          </View>
        </View>
        <Text testID="noSlots" style={{color: 'red'}}>
          {localizedStrings.appointmentList.noSlots}
        </Text>
        <Text
          testID="rescheduleNote"
          style={[styles.timeText, {fontSize: 16, marginTop: 12}]}>
          {localizedStrings.appointmentList.rescheduleNote}
        </Text>
        <TextInput
          style={[
            {
              marginTop: 8,
              height: 80,
              borderColor: 'rgb(70,75,92)',
              borderWidth: 0.5,
              paddingBottom: 10,
              padding: 8,
            },
          ]}
          value={this.state.rescheduledNote}
          multiline
          onChangeText={text => this.setState({rescheduledNote: text})}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            style={{padding: 8}}
            onPress={() => this.setState({isOpenRescheduleModal: false})}>
            <Text style={{color: 'rgb(36,196,253)', fontSize: 16}}>
              {localizedStrings.appointmentList.cancel}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: 8, marginLeft: 8}}
            onPress={() => this.setState({isOpenRescheduleModal: false})}>
            <Text style={{color: 'rgb(36,196,253)', fontSize: 16}}>
              {localizedStrings.appointmentList.submit}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderConfirmModal = () => {
    const {isOpenConfirmModal} = this.state;
    return (
      <Modal
        animationType="fade"
        transparent
        visible={isOpenConfirmModal}
        supportedOrientations={['portrait', 'landscape']}
        onRequestClose={() => handleBack()}>
        <View style={styles.modelStyle1}>
          <View style={styles.modelStyle2}>
            <Text
              style={[
                styles.modalHeader,
                {textAlign: 'center', alignSelf: 'center'},
              ]}>
              {localizedStrings.appointmentList.confirmAppointmtent}
            </Text>
            <TextInput
              style={[
                {
                  marginTop: 8,
                  height: 80,
                  borderColor: 'rgb(70,75,92)',
                  borderWidth: 0.5,
                  paddingBottom: 10,
                  padding: 8,
                },
              ]}
              value={this.state.confirmAppointment}
              multiline
              onChangeText={text => this.setState({confirmAppointment: text})}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{padding: 8, flex: 1, alignItems: 'center'}}
                onPress={() => this.setState({isOpenConfirmModal: false})}>
                <Text style={{color: 'rgb(36,196,253)', fontSize: 16}}>
                  {localizedStrings.appointmentList.cancel}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 8,
                  flex: 1,
                  alignItems: 'center',
                  marginLeft: 8,
                }}
                onPress={() => this.setState({isOpenConfirmModal: false})}>
                <Text style={{color: 'rgb(107,232,137)', fontSize: 16}}>
                  {localizedStrings.appointmentList.submit}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
}

// export default AppointmentList;
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAppointments: () => {
      dispatch(fetchAppointments());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppointmentList);
