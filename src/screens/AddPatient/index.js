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
  Alert,
} from 'react-native';
import {Header} from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import axios from 'axios';
import {connect, useDispatch} from 'react-redux';

// File imports
import styles from './styles';
import {headerMarginTop} from '../../Helper/Constants';
import localizedStrings from '../../Helper/LocalisedString';

// Image imports
import imgBack from '../../../assets/images/back.png';
import imgCamera from '../../../assets/images/camera.png';
import imgCalendar from '../../../assets/images/calendar.png';
import profileImg from '../../../assets/images/batman.jpg';
import imgDownArrow from '../../../assets/images/downArrow.png';
import {addPatient} from '../../__Redux/__actions/patientActions';

class AddPatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      countryCode: '',
      phone: '',
      firstName: '',
      lastName: '',
      gender: '',
      pId: '',
      dob: '',
      showDatePicker: false,
    };
  }

  hideDatePicker = () => {
    this.setState({showDatePicker: false});
  };

  handleConfirm = date => {
    this.setState({
      showDatePicker: false,
      dob: moment(new Date(date.toString().substr(0, 16))).format('DD-MM-YYYY'),
    });
    console.log(this.state.dob);
    this.hideDatePicker();
  };

  _onPressDatePicker = () => {
    this.setState({showDatePicker: true});
  };

  render() {
    // console.log(email);
    return this.renderMainView();
  }

  renderMainView = () => {
    return (
      <View testID="AddPMainView" style={styles.container}>
        {this.renderHeader()}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' && 'padding'}
          style={{flex: 1}}>
          <ScrollView style={{flex: 1}}>
            {this.renderChangeProPic()}
            {this.renderEmailAddress()}
            {this.renderMobileNumber()}
            {this.renderFirstName()}
            {this.renderLastName()}
            {this.renderPatientDetails()}
            {this.renderPatientId()}
            <DateTimePickerModal
              isVisible={this.state.showDatePicker}
              mode="date"
              onConfirm={this.handleConfirm}
              onCancel={this.hideDatePicker}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  };

  renderHeader = () => {
    return (
      <Header
        testID="AddPHeader"
        containerStyle={{
          backgroundColor: '#fff',
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
        testID="AddPBackBtn"
        onPress={() => {
          this.props.navigation.goBack();
        }}>
        <Image source={imgBack} style={styles.btnMenu} />
      </TouchableOpacity>
    );
  };

  renderCenterHeader = () => {
    return (
      <Text testID="AddPCenterHeader" style={styles.headerText}>
        {localizedStrings.addPatient.addPatient}
      </Text>
    );
  };

  renderRightHeader = () => {
    return (
      <View testID="AddPRightHeader" style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{marginRight: 8}}
          onPress={() => this.updateToDB()}>
          <Text style={styles.headerText}>
            {localizedStrings.addPatient.save}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  updateToDB() {
    const pData = {
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      email: this.state.email,
      mobilePrefix: '91',
      mobile: this.state.phone,
      gender: this.state.gender,
      birthDate: this.state.dob,
      patientId: this.state.pId,
    };
    this.props.postData(pData);
    Alert.alert('Patient Added Successfully');
    this.props.navigation.navigate('SideMenu');
  }

  renderChangeProPic = () => {
    return (
      <View testID="ProfilePic">
        <Image source={profileImg} style={styles.proPic} />
        <TouchableOpacity style={styles.cameraContainer}>
          <Image
            source={imgCamera}
            style={styles.cameraIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  };

  renderEmailAddress = () => {
    const {email} = this.state;
    return (
      <View
        testID="AppPEmailAddress"
        style={{paddingHorizontal: 20, marginTop: 40}}>
        <Text testID="emailAdder">Email Address</Text>
        <TextInput
          value={email}
          keyboardType="email-address"
          onChangeText={text => this.setState({email: text})}
          style={{
            borderBottomColor: 'gray',
            height: 40,
            borderBottomWidth: 1.0,
          }}
        />
      </View>
    );
  };

  renderMobileNumber = () => {
    const {countryCode, phone} = this.state;
    return (
      <View
        testID="AddPRenderMob"
        style={{paddingHorizontal: 20, marginVertical: 15}}>
        <Text testID="MobileNo">
          {localizedStrings.addPatient.mobileNumber}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              borderBottomColor: 'gray',
              height: 40,
              borderBottomWidth: 1.0,
              width: 100,
            }}>
            <TextInput
              value={'91'}
              keyboardType="phone-pad"
              onChangeText={text => this.setState({countryCode: text})}
              style={{flex: 1}}
            />
            <Image
              testID="AddPMobileImg"
              source={imgDownArrow}
              style={{
                tintColor: 'red',
                height: 12,
                width: 12,
                marginRight: 5,
                alignSelf: 'center',
              }}
            />
          </View>
          <TextInput
            value={phone}
            keyboardType="phone-pad"
            onChangeText={text => this.setState({phone: text})}
            style={{
              borderBottomColor: 'gray',
              height: 40,
              borderBottomWidth: 1.0,
              flex: 1,
              marginLeft: 10,
            }}
          />
        </View>
      </View>
    );
  };

  renderFirstName = () => {
    const {firstName} = this.state;
    return (
      <View
        testID="FirstName"
        style={{paddingHorizontal: 20, marginVertical: 15}}>
        <Text testID="FirstNameHead">
          {localizedStrings.addPatient.firstName}
        </Text>
        <TextInput
          value={firstName}
          onChangeText={text => this.setState({firstName: text})}
          style={{
            borderBottomColor: 'gray',
            height: 40,
            borderBottomWidth: 1.0,
          }}
        />
      </View>
    );
  };

  renderLastName = () => {
    const {lastName} = this.state;
    return (
      <View style={{paddingHorizontal: 20, marginVertical: 15}}>
        <Text>{localizedStrings.addPatient.lastName}</Text>
        <TextInput
          value={lastName}
          onChangeText={text => this.setState({lastName: text})}
          style={{
            borderBottomColor: 'gray',
            height: 40,
            borderBottomWidth: 1.0,
          }}
        />
      </View>
    );
  };

  renderPatientDetails = () => {
    const {dob, gender} = this.state;
    return (
      <View testID="patientTest" style={{flexDirection: 'row'}}>
        <View style={{paddingHorizontal: 20, marginVertical: 15, flex: 1}}>
          <Text testID="dobField">{localizedStrings.addPatient.dob}</Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              borderBottomColor: 'gray',
              height: 40,
              borderBottomWidth: 1.0,
              flex: 1,
            }}
            onPress={this._onPressDatePicker}>
            <TextInput
              value={this.state.dob}
              onChangeText={text => this.setState({dob: text})}
              style={{flex: 1}}
              editable={false}
              pointerEvents="none"
            />
            <Image
              source={imgCalendar}
              style={{
                tintColor: 'red',
                height: 18,
                width: 18,
                marginRight: 5,
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 20, marginVertical: 15, flex: 1}}>
          <Text testID="genderField">{localizedStrings.addPatient.gender}</Text>
          <View
            style={{
              flexDirection: 'row',
              borderBottomColor: 'gray',
              height: 40,
              borderBottomWidth: 1.0,
              flex: 1,
            }}>
            <TextInput
              value={gender}
              onChangeText={text => this.setState({gender: text})}
              style={{flex: 1}}
            />
            <Image
              source={imgDownArrow}
              style={{
                tintColor: 'red',
                height: 12,
                width: 12,
                marginRight: 5,
                alignSelf: 'center',
              }}
            />
          </View>
        </View>
      </View>
    );
  };

  renderPatientId = () => {
    const {pId} = this.state;
    return (
      <View style={{paddingHorizontal: 20, marginVertical: 15}}>
        <Text testID="PatientID">{localizedStrings.addPatient.patientId}</Text>
        <TextInput
          value={pId}
          onChangeText={text => this.setState({pId: text})}
          style={{
            borderBottomColor: 'gray',
            height: 40,
            borderBottomWidth: 1.0,
          }}
        />
      </View>
    );
  };
}
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    postData: pData => {
      dispatch(addPatient(pData));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPatient);
