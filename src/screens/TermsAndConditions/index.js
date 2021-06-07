import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomButton from '../../components/CustomButtom';
import styles from './styles';
import Color from '../../Helper/Color';

class TermsAndConditions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termsCheckBox: false,
      privacyCheckBox: false,
      assessmentCheckBox: false
    };
  }

  _onPressTermsCheckbox = () => {
    this.setState({ termsCheckBox: !this.state.termsCheckBox })
  }

  _onPressPrivacyCheckbox = () => {
    this.setState({ privacyCheckBox: !this.state.privacyCheckBox })
  }

  _onPressAssessmentCheckbox = () => {
    this.setState({ assessmentCheckBox: !this.state.assessmentCheckBox })
  }


  _onPressContinue = () => {
    this.props.navigation.navigate('FirstScreen')
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.dataContainer}>
          <View style={styles.detailContainer}>
            <Text style={styles.headerText}>
              To continue you must confirm the following
            </Text>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity onPress={this._onPressTermsCheckbox}>
                <MaterialCommunityIcons name={this.state.termsCheckBox ? 'check-box-outline' : 'checkbox-blank-outline'} size={40} color={this.state.termsCheckBox ? Color.BLUE : Color.LIGHT_GREY} />
              </TouchableOpacity>
              <Text style={styles.checkboxText}>
                I have read and accepted the
                 <Text style={{ color: Color.BLUE }}>
                  {" "}Terms & Conditions.
                 </Text>
              </Text>
            </View>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity onPress={this._onPressPrivacyCheckbox}>
                <MaterialCommunityIcons name={this.state.privacyCheckBox ? 'check-box-outline' : 'checkbox-blank-outline'} size={40} color={this.state.privacyCheckBox ? Color.BLUE : Color.LIGHT_GREY} />
              </TouchableOpacity>
              <Text style={styles.checkboxText}>
                I have read the
                 <Text style={{ color: Color.BLUE }}>
                  {" "}Privacy Policy.
                 </Text>
              </Text>
            </View>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity onPress={this._onPressAssessmentCheckbox}>
                <MaterialCommunityIcons name={this.state.assessmentCheckBox ? 'check-box-outline' : 'checkbox-blank-outline'} size={40} color={this.state.assessmentCheckBox ? Color.BLUE : Color.LIGHT_GREY} />
              </TouchableOpacity>
              <Text style={styles.checkboxText}>
                I concent to Chain.care analyzing the personal health data I supply to create an account and to provide me with an assessment and health guidance.
              </Text>
            </View>
          </View>
          <CustomButton
            buttonContainer={styles.continueContainer}
            onPress={this._onPressContinue}
            title={'Continue'}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default TermsAndConditions;
