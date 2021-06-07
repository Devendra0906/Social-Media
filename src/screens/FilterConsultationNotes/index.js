// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text, TextInput, TouchableHighlight, SafeAreaView
} from 'react-native'
import { Header } from 'react-native-elements'
import { Icon } from 'native-base'
import { Dropdown } from 'react-native-material-dropdown'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import moment from 'moment'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'
import localizedStrings from '../../Helper/LocalisedString'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgCalendar from '../../../assets/images/calendar.png'
import Color from '../../Helper/Color'

const providers = [
  { value: "All Doctors" },
  { value: "Dr. Darshit Zalavadiya" },
  { value: "Dr. Chetan Godhani" }
]

const consultations = [
  { value: `${localizedStrings.filterConsultationNotes.allConsultations}` },
  { value: `${localizedStrings.filterConsultationNotes.clinicConsultations}` },
  { value: `${localizedStrings.filterConsultationNotes.videoConsultations}` },
  { value: `${localizedStrings.filterConsultationNotes.patientQueationFollowup}` },
  { value: `${localizedStrings.filterConsultationNotes.remoteMonitoringFollowup}` },
  { value: `${localizedStrings.filterConsultationNotes.medicalReportReview}` },
]

const location = [
  { value: 'All location' },
  { value: 'Patel Darshit' },
  { value: 'Chetan Godhani' }
]

class FilterConsultationNotes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      provider: "All Doctors",
      consultation: "All Consultations",
      location: "All location",
      selectedIndex: 0,
      showDatePicker: false,
      type: "",
      fromDate: null,
      toDate: null
    }
  }

  hideDatePicker = () => {
    this.setState({ showDatePicker: false })
  }

  handleConfirm = date => {
    if (this.state.type == 'from') {
      this.setState({ fromDate: date })
    } else if (this.state.type == 'to') {
      this.setState({ toDate: date })
    }
    this.hideDatePicker()
  }

  _onPressDatePicker = (type) => {
    this.setState({ showDatePicker: true, type: type })
  }

  render() {
    return this.renderMainVIew()
  }

  renderMainVIew = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderApplyButton()}
        <DateTimePickerModal
          isVisible={this.state.showDatePicker}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
          date={this.setDate()}
        />
      </View>
    )
  }

  setDate = () => {
    if (this.state.type == "from") {
      return this.state.fromDate ? this.state.fromDate : new Date()
    } else if (this.state.type == "to") {
      return this.state.toDate ? this.state.toDate : new Date()
    } else {
      return new Date()
    }
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
      <Text style={styles.headerText}>{localizedStrings.filterConsultationNotes.consultationNotes}</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }}>
        <Text>{localizedStrings.filterConsultationNotes.reset}</Text>
      </TouchableOpacity>
    )
  }

  renderContent() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderProvideDropdown()}
        {this.renderConsultationTypeDropdown()}
        {this.renderLocationDropdown()}
        {this.renderDurationOptions()}
        {this.state.selectedIndex == 3 && this.renderDateFilter()}
      </View>
    )
  }

  renderProvideDropdown() {
    return (
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownTitle}>{localizedStrings.filterConsultationNotes.filterByProvider}</Text>
        <Dropdown
          rippleOpacity={0}
          data={providers}
          textColor={Color.BLACK}
          baseColor={Color.BLACK}
          value={this.state.provider}
          onChangeText={label => { this.setState({ provider: label }) }}
          renderBase={() => {
            return (
              <View style={styles.baseContainer}>
                <TextInput
                  placeholderTextColor='#666'
                  style={styles.input}
                  value={this.state.provider}
                  editable={false}
                  pointerEvents='none'
                />
                <Icon name='chevron-thin-down' type='Entypo' style={{ fontSize: 20, color: Color.BLUE }} />
              </View>
            );
          }}
        />
      </View>
    )
  }

  renderConsultationTypeDropdown() {
    return (
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownTitle}>{localizedStrings.filterConsultationNotes.filterByConsultationType}</Text>
        <Dropdown
          rippleOpacity={0}
          data={consultations}
          textColor={Color.BLACK}
          baseColor={Color.BLACK}
          value={this.state.consultation}
          onChangeText={label => { this.setState({ consultation: label }) }}
          renderBase={() => {
            return (
              <View style={styles.baseContainer}>
                <TextInput
                  placeholderTextColor='#666'
                  style={styles.input}
                  value={this.state.consultation}
                  editable={false}
                  pointerEvents='none'
                />
                <Icon name='chevron-thin-down' type='Entypo' style={{ fontSize: 20, color: Color.BLUE }} />
              </View>
            );
          }}
        />
      </View>
    )
  }

  renderLocationDropdown() {
    return (
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownTitle}>{localizedStrings.filterConsultationNotes.filterByConsultationLocation}</Text>
        <Dropdown
          rippleOpacity={0}
          data={location}
          textColor={Color.BLACK}
          baseColor={Color.BLACK}
          value={this.state.location}
          onChangeText={label => { this.setState({ location: label }) }}
          renderBase={() => {
            return (
              <View style={styles.baseContainer}>
                <TextInput
                  placeholderTextColor='#666'
                  style={styles.input}
                  value={this.state.location}
                  editable={false}
                  pointerEvents='none'
                />
                <Icon name='chevron-thin-down' type='Entypo' style={{ fontSize: 20, color: Color.BLUE }} />
              </View>
            );
          }}
        />
      </View>
    )
  }

  renderDurationOptions() {
    const { selectedIndex } = this.state
    return (
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownTitle}>{localizedStrings.filterConsultationNotes.showConsultation}</Text>
        <View style={{ flexDirection: 'row', marginTop: 13 }}>
          <TouchableHighlight
            style={[styles.sectionContainer, { backgroundColor: selectedIndex == 0 ? Color.BLUE : Color.WHITE }]}
            underlayColor={Color.BLUE_ALPHA}
            onPress={() => { this.setState({ selectedIndex: 0 }) }}
          >
            <Text style={{ color: selectedIndex == 0 ? Color.WHITE : Color.BLUE }}>{localizedStrings.filterConsultationNotes.all}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.sectionContainer, { backgroundColor: selectedIndex == 1 ? Color.BLUE : Color.WHITE }]}
            underlayColor={Color.BLUE_ALPHA}
            onPress={() => { this.setState({ selectedIndex: 1 }) }}
          >
            <Text style={{ color: selectedIndex == 1 ? Color.WHITE : Color.BLUE }}>{localizedStrings.filterConsultationNotes.for7Days}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.sectionContainer, { backgroundColor: selectedIndex == 2 ? Color.BLUE : Color.WHITE }]}
            underlayColor={Color.BLUE_ALPHA}
            onPress={() => { this.setState({ selectedIndex: 2 }) }}
          >
            <Text style={{ color: selectedIndex == 2 ? Color.WHITE : Color.BLUE }}>{localizedStrings.filterConsultationNotes.for30Days}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.sectionContainer, { backgroundColor: selectedIndex == 3 ? Color.BLUE : Color.WHITE, borderWidth: 1, borderColor: Color.BLUE }]}
            underlayColor={Color.BLUE_ALPHA}
            onPress={() => { this.setState({ selectedIndex: 3 }) }}
          >
            <Text style={{ color: selectedIndex == 3 ? Color.WHITE : Color.BLUE }}>{localizedStrings.filterConsultationNotes.byDate}</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  renderDateFilter = () => {
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>{localizedStrings.filterConsultationNotes.from}</Text>
        <TouchableOpacity
          style={{ flexDirection: 'row', flex: 1, borderBottomColor: Color.BLACK, borderBottomWidth: 0.5, paddingVertical: 7, marginLeft: 8 }}
          onPress={() => this._onPressDatePicker('from')}>
          <TextInput
            placeholder=''
            value={this.state.fromDate ? moment(this.state.fromDate).format('MMM DD, YYYY') : ""}
            style={[styles.textInput, { flex: 1, paddingRight: 22 }]}
            editable={false}
            pointerEvents='none'
          />
          <Image source={imgCalendar} style={{ tintColor: Color.BLUE, height: 20, width: 20, marginLeft: -15, alignSelf: 'center', marginTop: 0 }} />
        </TouchableOpacity>

        <Text style={{
          color: 'gray',
          fontSize: 18,
          marginLeft: 10
        }}>{localizedStrings.filterConsultationNotes.to}</Text>
        <TouchableOpacity
          style={{ flexDirection: 'row', flex: 1, borderBottomColor: Color.BLACK, borderBottomWidth: 0.5, paddingVertical: 7, marginLeft: 8 }}
          onPress={() => this._onPressDatePicker('to')}>
          <TextInput
            placeholder=''
            value={this.state.toDate ? moment(this.state.toDate).format('MMM DD, YYYY') : ""}
            style={[styles.textInput, { flex: 1, paddingRight: 22 }]}
            editable={false}
            pointerEvents='none'
          />
          <Image source={imgCalendar} style={{ tintColor: Color.BLUE, height: 20, width: 20, marginLeft: -15, alignSelf: 'center', marginTop: 0 }} />
        </TouchableOpacity>
      </View>
    )
  }

  renderApplyButton() {
    return (
      <SafeAreaView style={{ marginHorizontal: 0, backgroundColor: Color.BLUE }}>
        <TouchableOpacity style={{ marginHorizontal: 0, height: 40, backgroundColor: Color.BLUE, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 16, color: Color.WHITE }}>{localizedStrings.filterConsultationNotes.apply}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

export default FilterConsultationNotes
