// Global imports
import React, {Component} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Header} from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Dropdown} from 'react-native-material-dropdown';
import {Icon} from 'native-base';
import moment from 'moment';

// File imports
import styles from './styles';
import {headerMarginTop} from '../../Helper/Constants';
import Color from '../../Helper/Color';
import CountryPicker from '../../components/countryPicker/countryPicker';
import flags from '../../components/countryPicker/resources/flags';
import localizedStrings from '../../Helper/LocalisedString';

// Image imports
import imgBack from '../../../assets/images/back.png';
import imgCalendar from '../../../assets/images/calendar.png';
import imgSearch from '../../../assets/images/search.png';
import profileImg from '../../../assets/images/batman.jpg';
import {setAppointment} from '../../__Redux/__actions/appointmentActions';
const cources = [
  {value: 'Clinic Consultation(15 mins)'},
  {value: 'Clinic Consultation(20 mins)'},
  {value: 'Clinic Consultation(25 mins)'},
  {value: 'Clinic Consultation(30 mins)'},
  {value: 'Clinic Consultation(35 mins)'},
];

const practiceLocation = [
  {value: 'Patel Darshit'},
  {value: 'Patel Darshit 1'},
  {value: 'Patel Darshit 2'},
  {value: 'Patel Darshit 3'},
  {value: 'Patel Darshit 4'},
];

class SetClinicConsultation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      readingTakenOn: new Date(),
      showDatePicker: false,
      fluidIntake: '',
      associate: 'Clinic Consultation(15 mins)',
      practiceLocation: 'Patel Darshit',
      selectedOxygenLevel: 'Option 1',
      isOpenAddScreen: false,
      type: 'start',
      patientName: '',
      isCountryPickerVisible: false,
      zipCode: '+91',
      flag: 'in',
      phone: '',
      reasonForAppointment: '',
    };
  }

  render() {
    return this.renderMainView();
  }

  hideDatePicker = () => {
    this.setState({showDatePicker: false});
  };

  handleConfirm = date => {
    if (this.state.type == 'start') {
      this.setState({startDate: moment(date).format('MMM DD, YYYY')});
    } else {
      this.setState({endDate: moment(date).format('hh:mm A')});
    }
    this.hideDatePicker();
  };

  _onPressDatePicker = type => {
    this.setState({showDatePicker: true, type: type});
  };

  _onPressApprovalStatus = name => {
    this.setState({selectedTabName: name});
  };

  _setCountryDetail = item => {
    this.setState({
      zipCode: '+' + item.dialCode,
      flag: item.iso2,
      isCountryPickerVisible: false,
    });
  };

  _setDefaultData = () => {
    this.setState({
      zipCode: this.state.zipCode,
      flag: this.state.flag,
      isCountryPickerVisible: false,
    });
  };

  _handleCountryPickerModal = () => {
    this.setState({isCountryPickerVisible: true});
  };

  _onChangeTextPhone = text => {
    this.setState({phone: text});
  };

  renderMainView = () => {
    const {isOpenAddScreen, type, isCountryPickerVisible} = this.state;
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{flex: 1}}>
          <ScrollView style={{flex: 1}}>
            {this.renderMainScreen()}
            <DateTimePickerModal
              isVisible={this.state.showDatePicker}
              mode={type == 'start' ? 'date' : 'time'}
              onConfirm={this.handleConfirm}
              onCancel={this.hideDatePicker}
              date={this.state.readingTakenOn}
              // maximumDate={new Date(moment().subtract(16, 'years'))}
            />
            <CountryPicker
              close={isCountryPickerVisible}
              selectCountry={this._setCountryDetail}
              onClose={this._setDefaultData}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  };

  renderMainScreen = () => {
    return (
      <View style={{flex: 1}}>
        {this.renderPatientDetails()}
        {this.renderServiceView()}
        {this.renderPracticeLocation()}
        {this.renderConsultationTiming()}
        {this.renderAppointmentDate()}
        {this.renderPatientList()}
        {this.renderPhoneTextField()}
        {this.renderAppointmentReason()}
      </View>
    );
  };

  renderHeader = () => {
    return (
      <Header
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
        onPress={() => {
          this.props.navigation.goBack();
        }}>
        <Image source={imgBack} style={styles.btnMenu} />
      </TouchableOpacity>
    );
  };

  renderCenterHeader = () => {
    return (
      <Text style={styles.headerText}>
        {localizedStrings.setClinicConsultation.setClinicConsultation}
      </Text>
    );
  };

  renderRightHeader = () => {
    return (
      <TouchableOpacity
        style={{marginRight: 8}}
        onPress={
          () => this.updateToDb()
          // this.setState({isOpenAddScreen: !this.state.isOpenAddScreen})
        }>
        <Text style={styles.headerText}>
          {localizedStrings.setClinicConsultation.done}
        </Text>
      </TouchableOpacity>
    );
  };

  updateToDb = () => {
    const appointment = {
      aptdatetime: 'not set',
      drname: this.state.practiceLocation,
      patient_firstname: this.state.patientName,
      patient_lastname: this.state.patientName,
      mobile: this.state.phone,
      reason: this.state.reasonForAppointment,
    };
    console.log(appointment);
    try {
      this.props.postData(appointment);
      this.props.navigation.navigate('SideMenu');
    } catch (e) {
      console.log('error has occured', e);
    }
  };

  renderPatientDetails = () => {
    return (
      <View style={styles.patientMainContainer}>
        <Image
          source={profileImg}
          style={{height: 70, width: 70, borderRadius: 35}}
        />
        <View
          style={{
            marginHorizontal: 8,
            flex: 1,
            alignSelf: 'flex-start',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 16, color: 'rgb(0,164,249)'}}>
            dr Patel Darshit
          </Text>
          <Text style={{fontSize: 15}}>.</Text>
        </View>
      </View>
    );
  };

  renderServiceView = () => {
    return (
      <View style={styles.dropdownMainContainer}>
        <View style={{flex: 1}}>
          <Text style={styles.indicationLabel}>
            {localizedStrings.setClinicConsultation.service}
          </Text>
          <Dropdown
            rippleOpacity={0}
            data={cources}
            textColor={'#000'}
            baseColor={'#000'}
            value={this.state.associate}
            onChangeText={label => {
              this.setState({associate: label});
            }}
            renderBase={() => {
              return (
                <View style={styles.dropdownTextFieldContainer}>
                  <TextInput
                    placeholderTextColor="#666"
                    style={styles.dropdownTextInput}
                    value={this.state.associate}
                    editable={false}
                    pointerEvents="none"
                  />
                  <Icon
                    name="chevron-thin-down"
                    type="Entypo"
                    style={styles.dropdownDownArrow}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  };

  renderPracticeLocation = () => {
    return (
      <View style={styles.dropdownMainContainer}>
        <View style={{flex: 1}}>
          <Text style={styles.indicationLabel}>
            {localizedStrings.setClinicConsultation.practiceLocation}
          </Text>
          <Dropdown
            rippleOpacity={0}
            data={practiceLocation}
            textColor={'#000'}
            baseColor={'#000'}
            value={this.state.practiceLocation}
            onChangeText={label => {
              this.setState({practiceLocation: label});
            }}
            renderBase={() => {
              return (
                <View style={styles.dropdownTextFieldContainer}>
                  <TextInput
                    placeholderTextColor="#666"
                    style={styles.dropdownTextInput}
                    value={this.state.practiceLocation}
                    editable={false}
                    pointerEvents="none"
                  />
                  <Icon
                    name="chevron-thin-down"
                    type="Entypo"
                    style={styles.dropdownDownArrow}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  };

  renderConsultationTiming = () => {
    return (
      <View>
        <TouchableOpacity
          style={styles.consultationTiming}
          onPress={() => this.props.navigation.navigate('ConsultationTimings')}>
          <Image
            source={imgCalendar}
            style={{
              height: 15,
              width: 15,
              tintColor: 'rgb(0,164,249)',
              marginRight: 4,
            }}
          />
          <Text style={{color: 'rgb(0,164,249)', fontSize: 16}}>
            {localizedStrings.setClinicConsultation.showConsultationTimings}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderAppointmentDate = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          paddingBottom: 20,
          paddingHorizontal: 20,
        }}>
        <View style={{alignItems: 'flex-start', flex: 1}}>
          <Text>{localizedStrings.setClinicConsultation.from}</Text>
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
          <Text>{localizedStrings.setClinicConsultation.to}</Text>
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
    );
  };

  renderPatientList = () => {
    return (
      <View style={{marginHorizontal: 20}}>
        <Text style={styles.indicationLabel}>
          {localizedStrings.setClinicConsultation.patient}
        </Text>
        <View style={[styles.dropdownTextFieldContainer]}>
          <TextInput
            placeholderTextColor="#666"
            style={styles.dropdownTextInput}
            value={this.state.patientName}
            onChangeText={text => this.setState({patientName: text})}
          />
          <Image
            source={imgSearch}
            style={{
              tintColor: 'red',
              height: 20,
              width: 20,
              marginLeft: -15,
              alignSelf: 'center',
              marginRight: 5,
            }}
          />
        </View>
      </View>
    );
  };

  renderPhoneTextField = () => {
    const {phone} = this.state;
    return (
      <View style={{marginHorizontal: 20, marginTop: 15}}>
        <Text style={styles.indicationLabel}>
          {localizedStrings.setClinicConsultation.phonenumber}
        </Text>
        <View style={styles.phoneSection}>
          <TouchableOpacity
            style={styles.countryInfo}
            onPress={() => this._handleCountryPickerModal()}>
            <Image
              style={styles.flagStyle}
              source={flags.get(this.state.flag)}
            />
            <Text style={styles.zipCode}>{this.state.zipCode}</Text>
          </TouchableOpacity>
          <TextInput
            value={phone}
            onChangeText={this._onChangeTextPhone}
            placeholder={localizedStrings.setClinicConsultation.phonenumber}
            keyboardType="number-pad"
            returnKeyType="done"
            maxLength={16}
            placeholderTextColor={Color.BLACK}
            style={[
              styles.dropdownTextInput,
              {
                flex: 1,
                marginLeft: 10,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 0.5,
              },
            ]}
          />
        </View>
      </View>
    );
  };

  renderAppointmentReason = () => {
    return (
      <View style={{marginTop: 12, paddingHorizontal: 20}}>
        <Text style={styles.indicationLabel}>
          {localizedStrings.setClinicConsultation.reasonforAppointment}
        </Text>
        <TextInput
          placeholder={localizedStrings.setClinicConsultation.reasonPlaceholder}
          style={styles.textInput}
          multiline
          value={this.state.reasonForAppointment}
          onChangeText={text => this.setState({reasonForAppointment: text})}
        />
      </View>
    );
  };
}
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    postData: appointment => {
      dispatch(setAppointment(appointment));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SetClinicConsultation);
