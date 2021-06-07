import React, { Component } from 'react';
import { View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import styles from './styles';
import Logo from '../../components/Logo';
import CustomText from '../../components/CustomText';
import CustomButton from '../../components/CustomButtom';
import Footer from '../../components/Footer';

class SelectBirthdate extends Component {

  state = {
    dob: new Date(moment().subtract(16, 'years')),
    showDatePicker: false
  }

  hideDatePicker = () => {
    this.setState({ showDatePicker: false })
  }

  handleConfirm = date => {
    this.setState({ dob: date })
    this.hideDatePicker();
  };

  _onPressDatePicker = () => {
    this.setState({ showDatePicker: true })
  }

  _onPressSelect = () => {
    this.props.navigation.navigate('SmokePreference')
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainViewContainer}>
          <Logo />
          <CustomText text={'And what is your date of birth?'} />
          <TouchableOpacity style={styles.datePickerContainer}
            onPress={this._onPressDatePicker}>
            <Text style={styles.dob}>
              {moment(this.state.dob).format('MMMM Do, YYYY')}
            </Text>
          </TouchableOpacity>
          <CustomButton
            buttonContainer={styles.buttonContainer}
            onPress={this._onPressSelect}
            title={'Select your birthday'}
          />
          <Footer />
        </View>
        <DateTimePickerModal
          isVisible={this.state.showDatePicker}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
          date={this.state.dob}
          maximumDate={new Date(moment().subtract(16, 'years'))}
        />
      </SafeAreaView>
    );
  }
}

export default SelectBirthdate;
