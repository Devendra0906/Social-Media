import React, { Component } from 'react';
import { View, TouchableOpacity, Image, TextInput, Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { Container, Icon, Content } from "native-base";
import { Header } from 'react-native-elements';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';

import styles from "./styles";
import Color from '../../../Helper/Color';

class AddEducation extends Component {

  constructor(props) {
    super(props)

    this.state = {
      startDatePickerVisible: false,
      endDatePickerVisible: false,
      startDate: '',
      endDate: '',
      schoolName: '',
      degree: '',
      fieldOfStudy: '',
      grade: '',
      activities: ''
    }
  }

  handleStartDatePicked = date => {
    const start = moment(date).format('MMM YYYY');
    this.setState({ startDatePickerVisible: false, startDate: start });
  };

  handleEndDatePicked = date => {
    const end = moment(date).format('MMM YYYY');
    this.setState({ endDatePickerVisible: false, endDate: end });
  };

  render() {
    const navigation = this.props.navigation;
    const {
      startDate,
      endDate,
      startDatePickerVisible,
      endDatePickerVisible,
      schoolName,
      degree,
      fieldOfStudy,
      grade,
      activities
    } = this.state;
    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }
    const minEndDate = startDate.length > 0 ? new Date(startDate) : new Date('January 1960')

    let pageTitle = 'Add Education'
    return (
      <Container style={{ backgroundColor: Color.WHITE }}>
        <Header
          containerStyle={[{
            backgroundColor: '#fff',
            paddingTop: 0,
            elevation: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 2,
            shadowOpacity: 0.1,
            shadowColor: '#000',
            marginBottom: 5
          }, headerStyle]}
          leftComponent={(
            <TouchableOpacity
              testID="sideMenuButton"
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              onPress={() => navigation.goBack()}
            >
              <Icon type='Ionicons' name="ios-arrow-back" style={{ color: "#000" }} />
            </TouchableOpacity>)}
          centerComponent={{ text: pageTitle, style: { color: '#000', fontSize: 17, fontWeight: 'bold' } }}
        />
        <Content>
          <View style={{ marginTop: 15, marginHorizontal: 15 }}>
            <TextInput
              placeholder='School'
              placeholderTextColor='#666'
              style={styles.textInput}
              value={schoolName}
              onChangeText={(text) => this.setState({ schoolName: text })}
            />
            <TextInput
              placeholder='Degree'
              placeholderTextColor='#666'
              style={[styles.textInput, { marginTop: 15 }]}
              value={degree}
              onChangeText={(text) => this.setState({ degree: text })}
            />
            <TextInput
              placeholder='Field of stydy'
              placeholderTextColor='#666'
              style={[styles.textInput, { marginTop: 15 }]}
              value={fieldOfStudy}
              onChangeText={(text) => this.setState({ fieldOfStudy: text })}
            />

            <View style={{ flexDirection: 'row', marginHorizontal: 0, marginTop: 15, alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => this.setState({ startDatePickerVisible: true })}>
                  <TextInput
                    placeholder='Start Date'
                    placeholderTextColor='#666'
                    style={[styles.textInput]}
                    pointerEvents='none'
                    editable={false}
                    value={startDate}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, marginLeft: 30 }}>
                <TouchableOpacity onPress={() => this.setState({ endDatePickerVisible: true })}>
                  <TextInput
                    placeholder='End Date'
                    placeholderTextColor='#666'
                    style={[styles.textInput]}
                    pointerEvents='none'
                    editable={false}
                    value={endDate}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TextInput
              placeholder='Grade'
              placeholderTextColor='#666'
              style={[styles.textInput, { marginTop: 15 }]}
              value={grade}
              onChangeText={(text) => this.setState({ grade: text })}
            />

            <TextInput
              placeholder='Activities and societies'
              placeholderTextColor='#666'
              style={[styles.textInput, { marginTop: 15, height: 60 }]}
              multiline
              value={activities}
              onChangeText={(text) => this.setState({ activities: text })}
            />

            <TouchableOpacity style={styles.saveContainer}
              onPress={() => navigation.goBack()}>
              <Text style={styles.saveText}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </Content>
        <DateTimePicker
          isVisible={startDatePickerVisible}
          onConfirm={this.handleStartDatePicked}
          onCancel={() => this.setState({ startDatePickerVisible: false })}
          maximumDate={new Date()}
        />
        <DateTimePicker
          isVisible={endDatePickerVisible}
          onConfirm={this.handleEndDatePicked}
          onCancel={() => this.setState({ endDatePickerVisible: false })}
          maximumDate={new Date()}
          minimumDate={minEndDate}
        />
      </Container>
    );
  }
}

export default AddEducation;