import React, { Component } from 'react';
import { View, TouchableOpacity, Image, TextInput, Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { Container, Icon, Content } from "native-base";
import { Header } from 'react-native-elements';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';

import styles from "./styles";
import Color from '../../../Helper/Color';
class AddCertifications extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isExpire: false,
      startDatePickerVisible: false,
      endDatePickerVisible: false,
      startDate: '',
      endDate: '',
      name: '',
      organisation: '',
      credentialId: '',
      credentialURL: ''
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
      isExpire,
      startDatePickerVisible,
      endDatePickerVisible,
      startDate,
      endDate,
      name,
      organisation,
      credentialId,
      credentialURL
    } = this.state;
    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }
    const minEndDate = startDate.length > 0 ? new Date(startDate) : new Date('January 1960')

    let pageTitle = 'Add Certifications'
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
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              testID="sideMenuButton"
              onPress={() => navigation.goBack()}
            >
              <Icon type='Ionicons' name="ios-arrow-back" style={{ color: "#000" }} />
            </TouchableOpacity>)}
          centerComponent={{ text: pageTitle, style: { color: '#000', fontSize: 17, fontWeight: 'bold' } }}
        />
        <Content>
          <View style={{ marginTop: 15, marginHorizontal: 15 }}>
            <TextInput
              placeholder='Name'
              placeholderTextColor='#666'
              style={styles.textInput}
              value={name}
              onChangeText={(text) => this.setState({ name: text })}
            />
            <TextInput
              placeholder='Issuing Organisation'
              placeholderTextColor='#666'
              style={[styles.textInput, { marginTop: 15 }]}
              value={organisation}
              onChangeText={(text) => this.setState({ organisation: text })}
            />
            <TouchableOpacity style={styles.checkboxContiner}
              onPress={() => {
                this.setState({ isExpire: !isExpire })
              }}>
              <Icon name={isExpire ? 'check-box' : 'check-box-outline-blank'}
                type='MaterialIcons' style={styles.checkbox} />
              <Text style={styles.checkboxText}>
                This credential does not expire
              </Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', marginHorizontal: 0, marginTop: 15, alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => this.setState({ startDatePickerVisible: true })}>
                  <TextInput
                    placeholder='Issue date'
                    placeholderTextColor='#666'
                    style={[styles.textInput]}
                    pointerEvents='none'
                    editable={false}
                    value={startDate}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, marginLeft: 30 }}>
                {!isExpire &&
                  <TouchableOpacity onPress={() => this.setState({ endDatePickerVisible: true })}>
                    <TextInput
                      placeholder='Expiration date'
                      placeholderTextColor='#666'
                      style={[styles.textInput]}
                      pointerEvents='none'
                      editable={false}
                      value={endDate}
                    />
                  </TouchableOpacity>
                }
              </View>
            </View>

            <TextInput
              placeholder='Credential Id'
              placeholderTextColor='#666'
              style={[styles.textInput, { marginTop: 15 }]}
              value={credentialId}
              onChangeText={(text) => this.setState({ credentialId: text })}
            />
            <TextInput
              placeholder='Credential URL'
              placeholderTextColor='#666'
              style={[styles.textInput, { marginTop: 15 }]}
              value={credentialURL}
              onChangeText={(text) => this.setState({ credentialURL: text })}
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

export default AddCertifications;