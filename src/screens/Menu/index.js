import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import SegmentControl from '../../components/SegmentControl';
import styles from './styles';
import moment from 'moment';
import Color from '../../Helper/Color';
import Constants from '../../Helper/Constants';

class Menu extends Component {
  state = {
    dob: new Date(moment().subtract(16, 'years')),
    showDatePicker: false,
    name: 'Darshit Zalavadiya',
  };

  hideDatePicker = () => {
    this.setState({showDatePicker: false});
  };

  handleConfirm = date => {
    this.setState({dob: date});
    this.hideDatePicker();
  };

  _onPressDatePicker = () => {
    this.setState({showDatePicker: true});
  };

  _onChangeNameText = text => {
    this.setState({name: text});
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
          <ScrollView style={styles.container}>
            <View style={styles.mainViewContainer}>
              <Text style={styles.title}>Basic Information</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Name</Text>
                <TextInput
                  style={styles.input}
                  value={this.state.name}
                  onChangeText={this._onChangeNameText}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Date of birth</Text>
                <TouchableOpacity onPress={this._onPressDatePicker}>
                  <TextInput
                    style={styles.input}
                    value={moment(this.state.dob).format('MMMM Do, YYYY')}
                    editable={false}
                    pointerEvents="none"
                  />
                </TouchableOpacity>
              </View>
              <View style={[styles.inputContainer, {borderBottomWidth: 0}]}>
                <Text style={styles.inputTitle}>Select Gender</Text>
                <SegmentControl
                  data={['Male', 'Female']}
                  container={[{width: 100}, {width: 100}]}
                />
              </View>

              <Text style={[styles.title, {marginTop: 30}]}>
                Health Background
              </Text>
              <View style={[styles.inputContainer, {borderBottomWidth: 0}]}>
                <Text style={styles.inputTitle}>Are you a smoker?</Text>
                <SegmentControl
                  data={['Yes', 'Not Answered', 'No']}
                  container={[{flex: 1}, {flex: 1.5}, {flex: 1}]}
                />
              </View>
              <View style={[styles.inputContainer, {borderBottomWidth: 0}]}>
                <Text style={styles.inputTitle}>
                  Have you ever been dignosed with high blood pressure?
                </Text>
                <SegmentControl
                  data={['Yes', 'Not Answered', 'No']}
                  container={[{flex: 1}, {flex: 1.5}, {flex: 1}]}
                />
              </View>
              <View style={[styles.inputContainer, {borderBottomWidth: 0}]}>
                <Text style={styles.inputTitle}>Do you have diabetes?</Text>
                <SegmentControl
                  data={['Yes', 'Not Answered', 'No']}
                  container={[{flex: 1}, {flex: 1.5}, {flex: 1}]}
                />
              </View>
              <View style={styles.medicationTitleContainer}>
                <Text style={styles.title}>Medication</Text>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('AddMedication')
                  }>
                  <Text style={[styles.inputTitle, {fontSize: 17}]}>Add</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={['PCM', 'PCM1', 'PCM2']}
                style={{flexGrow: 0}}
                renderItem={({item}) => {
                  return (
                    <View style={styles.listItem}>
                      <Text style={styles.medicine}>{item}</Text>
                    </View>
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
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

export default Menu;
