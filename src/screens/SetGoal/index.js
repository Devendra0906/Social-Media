// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  TextInput, ScrollView, KeyboardAvoidingView, Platform
} from 'react-native'
import { Header } from 'react-native-elements'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import moment from 'moment'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgCalendar from '../../../assets/images/calendar.png'
import Color from '../../Helper/Color'

export class SetGoal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      readingTakenOn: new Date(),
      showDatePicker: false,
      goal: '',
      details: '',
      type: 'start',
    }
  }

  render() {
    return this.renderMainView()
  }

  hideDatePicker = () => {
    this.setState({ showDatePicker: false })
  }

  handleConfirm = date => {
    if (this.state.type == 'start') {
      this.setState({ startDate: moment(date).format('MMM DD, YYYY') })
    } else if (this.state.type == 'readingTakenOn') {
      this.setState({ readingTakenOn: moment(date).format('MMM DD, YYYY') })
    } else {
      this.setState({ endDate: moment(date).format('MMM DD, YYYY') })
    }
    this.hideDatePicker()
  }

  _onPressDatePicker = (type) => {
    this.setState({ showDatePicker: true, type: type })
  }

  renderMainView = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            {this.renderAddBloodSugarScreen()}
            <DateTimePickerModal
              isVisible={this.state.showDatePicker}
              mode="date"
              onConfirm={this.handleConfirm}
              onCancel={this.hideDatePicker}
              date={this.state.readingTakenOn}
            // maximumDate={new Date(moment().subtract(16, 'years'))}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View >
    )
  }

  renderMainScreen = () => {
    return (
      <View style={{ flex: 1 }}>
        {this.renderPatientDetails()}
        {this.renderFilerView()}
        {this.renderBody()}
      </View>
    )
  }

  renderAddBloodSugarScreen = () => {
    return (
      <View style={styles.container}>
        {this.renderGoal()}
        {this.renderReadingTakenOn()}
        {this.renderDetails()}
      </View>
    )
  }

  renderHeader = () => {
    return (
      <Header
        containerStyle={{ backgroundColor: Color.WHITE, marginTop: headerMarginTop, borderBottomWidth: 0 }}
        leftComponent={this.renderLeftHeader()}
        centerComponent={this.renderCenterHeader()}
        rightComponent={this.renderRightHeader()}
      />
    )
  }

  renderLeftHeader = () => {
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
        <Image source={imgBack} style={styles.btnMenu} />
      </TouchableOpacity>
    )
  }

  renderCenterHeader = () => {
    return (
      <Text style={styles.headerText}>Set Goal</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }} onPress={() => this.props.navigation.goBack()}>
        <Text style={styles.headerText}>Save</Text>
      </TouchableOpacity>
    )
  }

  renderReadingTakenOn = () => {
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>Achieve by</Text>
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this._onPressDatePicker('readingTakenOn')}>
          <TextInput
            placeholder=''
            value={this.state.readingTakenOn}
            style={[styles.textInput, { flex: 1, paddingRight: 22 }]}
            editable={false}
            pointerEvents='none'
          />
          <Image source={imgCalendar} style={{ tintColor: 'red', height: 20, width: 20, marginLeft: -15, alignSelf: 'center', marginTop: 0 }} />
        </TouchableOpacity>
      </View>
    )
  }

  renderGoal = () => {
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>Goal</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', flex: 0.6, }}>
            <TextInput
              placeholder=''
              value={this.state.goal}
              onChangeText={(text) => this.setState({ goal: text })}
              style={[styles.textInput, { paddingRight: 22, flex: 1 }]}
            />
          </TouchableOpacity>
          {/* <Text style={{ marginLeft: 10, fontSize: 16, color: 'rgb(255,49,70)' }}>min</Text> */}
        </View>
      </View>
    )
  }

  renderDetails = () => {
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>Details</Text>
        <TextInput
          placeholder={''}
          style={styles.textInput}
          multiline
          value={this.state.details}
          onChangeText={(text) => this.setState({ details: text })}
        />
      </View>
    )
  }
}

export default SetGoal
