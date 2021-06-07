// Global imports
import React, {Component} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Modal,
  SafeAreaView,
} from 'react-native';
import {Header} from 'react-native-elements';
import {Icon} from 'native-base';
import Swiper from 'react-native-swiper';

// File imports
import styles from './styles';
import {headerMarginTop} from '../../Helper/Constants';
import localizedStrings from '../../Helper/LocalisedString';

// Image imports
import imgBack from '../../../assets/images/back.png';
import profileImg from '../../../assets/images/batman.jpg';
import imgAdd from '../../../assets/images/plus.png';
import imgEdit from '../../../assets/images/edit.png';
import imgCorrect from '../../../assets/images/correct.png';
import imgHospital from '../../../assets/images/healthBuilding.png';
import imgPdf from '../../../assets/images/pdf.png';
import Color from '../../Helper/Color';

class ConsultationNotesDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenAttachments: false,
      PatientData: [],
    };
  }

  render() {
    this.state.PatientData = this.props.route.params.PatientData;
    console.log('pdaata', this.state.PatientData);
    return this.renderMainVIew();
  }

  renderMainVIew = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={{flex: 1}}>
          {this.renderClinicConsultation()}
          {this.renderUserDetails()}
          {this.renderReasonForConsultation()}
          {this.renderClinicSummary()}
          {this.renderPrescriptions()}
          {this.renderGoals()}
          {this.renderAttachmentModal()}
        </ScrollView>
      </View>
    );
  };

  renderHeader = () => {
    return (
      <Header
        testID="cdheader"
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
        testID="cdLeftHeader"
        onPress={() => {
          this.props.navigation.goBack();
        }}>
        <Image source={imgBack} style={styles.btnMenu} />
      </TouchableOpacity>
    );
  };

  renderCenterHeader = () => {
    return (
      <Text testID="cdCenterHeader" style={styles.headerText}>
        {localizedStrings.consultationNotes.consultationNotes}
      </Text>
    );
  };

  renderRightHeader = () => {
    return (
      <TouchableOpacity testID="cdRightHeader" style={{marginRight: 8}}>
        <Image
          source={imgPdf}
          style={{height: 25, width: 20}}
          resizeMode="stretch"
        />
      </TouchableOpacity>
    );
  };

  renderClinicConsultation = () => {
    return (
      <View testID="ClinicConsultation" style={styles.containerView}>
        <Icon name={'hospital-o'} type="FontAwesome" style={{fontSize: 30}} />
        <View style={{marginHorizontal: 10, flex: 1}}>
          <Text
            testID="ClinicConsultationText"
            style={{color: Color.BLACK, fontSize: 16}}>
            {localizedStrings.consultationNotes.clinicConsultation}
          </Text>
          <Text style={{color: Color.BLACK, fontSize: 16}}>
            Dr. Patel Darshit @ Patel Darshit
          </Text>
          <Text style={{color: Color.BLUE, fontSize: 16}}>
            08:19 pm IST, 12-Aug-2020
          </Text>
        </View>
      </View>
    );
  };

  renderUserDetails = () => {
    var d = new Date();
    var dob = new Date(1998, 11, 24, 10, 33, 30, 0);
    var gender = 'Male';
    return (
      <View testID="cdUserDetails" style={styles.containerView}>
        <Image
          testID="cdProfileImg"
          source={profileImg}
          style={{height: 60, width: 60, borderRadius: 30}}
        />
        <View testID="cdName" style={{marginHorizontal: 8, flex: 1}}>
          <Text style={{color: Color.BLUE, fontSize: 16}}>
            {this.state.PatientData.name}
          </Text>
          <Text testID="cdgender" style={{color: Color.BLACK, fontSize: 16}}>
            {gender}, {d.getFullYear() - dob.getFullYear()} Years
          </Text>
          <Text style={{color: Color.BLACK, fontSize: 16}}>
            Medication: PCM 20 mg. Eye drops 80 mg
          </Text>
        </View>
      </View>
    );
  };

  renderReasonForConsultation = () => {
    return (
      <View testID="ReasonForConsultation" style={styles.introductionView}>
        <Text testID="textReasonForConsultation" style={styles.instructionText}>
          {localizedStrings.consultationNotes.reasonForConsultation}
        </Text>
        <Text style={styles.introText}>
          {this.state.PatientData.appointmentType}
        </Text>
      </View>
    );
  };

  renderClinicSummary = () => {
    return (
      <View testID="ClinicSummary" style={styles.introductionView}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text testID="ClinicSummaryLabel" style={styles.instructionText}>
            {localizedStrings.consultationNotes.clinicSummary}
          </Text>
          <TouchableOpacity>
            <Image source={imgEdit} style={{width: 20, height: 20}} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={imgCorrect}
            style={{width: 20, height: 20, marginRight: 12, marginTop: 15}}
          />
          <Text
            testID="visibleToPatient"
            style={[styles.introText, {color: 'green'}]}>
            {localizedStrings.consultationNotes.visibleToPatient}
          </Text>
        </View>
        <Text style={styles.introText}>Hi</Text>
        <TouchableOpacity
          onPress={() => this.setState({isOpenAttachments: true})}>
          <Text
            testID="viewAttachment"
            style={[
              styles.instructionText,
              {fontWeight: '300', marginTop: 10},
            ]}>
            {localizedStrings.consultationNotes.viewAttachment}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderPrescriptions = () => {
    return (
      <View
        testID="Prescriptions"
        style={[styles.introductionView, {borderBottomWidth: 0}]}>
        <Text testID="PrescriptionsLabel" style={styles.instructionText}>
          {localizedStrings.consultationNotes.prescriptions}
        </Text>
        <View style={[styles.introductionView, {paddingHorizontal: 0}]}>
          <Text style={{fontSize: 16, color: 'gray'}}>Eye drops 80 mg</Text>
          <Text style={{fontSize: 16, color: 'lightgray'}}>
            2 Drops - every 3 hours, Before Meals(in eye)
          </Text>
          <Text style={{fontSize: 16, color: 'lightgray'}}>
            Prescribed Quality: 1
          </Text>
        </View>
        <View style={[styles.introductionView, {paddingHorizontal: 0}]}>
          <Text style={{fontSize: 16, color: 'gray'}}>PCM 20 mg</Text>
          <Text style={{fontSize: 16, color: 'lightgray'}}>
            1 Tablet - twice daily, After meals (Orally)
          </Text>
          <Text style={{fontSize: 16, color: 'lightgray'}}>
            Prescribed Quality: 10
          </Text>
        </View>
      </View>
    );
  };

  renderGoals = () => {
    return (
      <View testID="Goals" style={[styles.introductionView]}>
        <Text testID="GoalsLabel" style={styles.instructionText}>
          {localizedStrings.consultationNotes.goals}
        </Text>
        <Text style={{fontSize: 16, color: 'gray'}}>Test</Text>
        <Text style={{fontSize: 16, color: 'gray'}}>Hello</Text>
        <Text style={{fontSize: 16, color: 'gray'}}>
          Target date: 12 Aug 202
        </Text>
      </View>
    );
  };

  renderAttachmentModal = () => {
    const {isOpenAttachments} = this.state;
    return (
      <Modal
        animationType="fade"
        transparent
        visible={isOpenAttachments}
        supportedOrientations={['portrait', 'landscape']}
        onRequestClose={() => handleBack()}>
        <Header
          containerStyle={{
            backgroundColor: Color.WHITE,
            marginTop: headerMarginTop,
            borderBottomWidth: 0,
          }}
          centerComponent={() => (
            <Text testID="attachments" style={styles.headerText}>
              {localizedStrings.consultationNotes.attachments}
            </Text>
          )}
          rightComponent={() => (
            <TouchableOpacity
              style={{paddingHorizontal: 8}}
              onPress={() => this.setState({isOpenAttachments: false})}>
              <Text
                testID="doneLabel"
                style={{fontSize: 16, color: Color.BLACK}}>
                {localizedStrings.consultationNotes.done}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.modelStyle1}>
          <Swiper
            showsButtons={false}
            activeDotColor={Color.BLUE}
            dotColor={Color.WHITE}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#92BBD9',
              }}>
              <Image
                testID="cdProfImg"
                source={profileImg}
                style={{flex: 1, width: '100%', backgroundColor: Color.BLACK}}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#92BBD9',
              }}>
              <Image
                source={profileImg}
                style={{flex: 1, width: '100%', backgroundColor: Color.BLACK}}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#92BBD9',
              }}>
              <Image
                source={profileImg}
                style={{flex: 1, width: '100%', backgroundColor: Color.BLACK}}
                resizeMode="contain"
              />
            </View>
          </Swiper>
        </View>
      </Modal>
    );
  };
}

export default ConsultationNotesDetails;
