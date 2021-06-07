// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  TextInput, ScrollView
} from 'react-native'
import { Header } from 'react-native-elements'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import moment from 'moment'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'
import localizedStrings from '../../Helper/LocalisedString'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgDownArrow from '../../../assets/images/downArrow.png'
import Color from '../../Helper/Color'

class AddVaccination extends Component {
  constructor(props) {
    super(props)

    this.state = {
      takenOn: new Date(),
      showDatePicker: false,
    }
  }

  render() {
    return this.renderMainView()
  }

  hideDatePicker = () => {
    this.setState({ showDatePicker: false })
  }

  handleConfirm = date => {
    this.setState({ takenOn: moment(date).format('MMM DD, YYYY') })
    this.hideDatePicker()
  }

  _onPressDatePicker = () => {
    this.setState({ showDatePicker: true })
  }

  renderMainView = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={{ flex: 1 }}>
          {this.renderNameOfAllergy()}
          {this.renderDetailView()}
          {this.renderTreatedBy()}
          {this.renderReaction()}
          {this.renderHowOftenDoest()}
          {this.renderNotes()}
        </ScrollView>
        <DateTimePickerModal
          isVisible={this.state.showDatePicker}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
          date={this.state.takenOn}
        // maximumDate={new Date(moment().subtract(16, 'years'))}
        />
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
      <Text style={styles.headerText}>{localizedStrings.addVaccinationList.addVaccination}</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }}>
        <Text style={styles.headerText}>{localizedStrings.addVaccinationList.save}</Text>
      </TouchableOpacity>
    )
  }

  renderNameOfAllergy = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.addVaccinationList.vaccineTakenFor}</Text>
        <TextInput
          placeholder={localizedStrings.addVaccinationList.vaccinePlaceholder}
          style={styles.textInput}
        />
      </View>
    )
  }

  renderDetailView = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.addVaccinationList.takenOn}</Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }} onPress={this._onPressDatePicker}>
          <TextInput
            placeholder='Date'
            style={[styles.textInput, { paddingRight: 22, }]}
            value={this.state.takenOn}
            editable={false}
            pointerEvents='none'
          />
          <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: -15, alignSelf: 'center', marginTop: 0 }} />
        </TouchableOpacity>
      </View>
    )
  }

  renderTreatedBy = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.addVaccinationList.vaccineName}</Text>
        <TextInput
          placeholder={localizedStrings.addVaccinationList.vaccinePlaceholder}
          style={styles.textInput}
        />
      </View>
    )
  }

  renderReaction = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.addVaccinationList.vaccineDetails}</Text>
        <TextInput
          placeholder={localizedStrings.addVaccinationList.veccineDetailPlaceholder}
          style={styles.textInput}
        />
      </View>
    )
  }

  renderHowOftenDoest = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.addVaccinationList.lotNumber}</Text>
        <TextInput
          placeholder={localizedStrings.addVaccinationList.lotNu}
          style={styles.textInput}
        />
      </View>
    )
  }

  renderNotes = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.addVaccinationList.notes}</Text>
        <TextInput
          placeholder={''}
          style={styles.textInput}
          multiline
        />
      </View>
    )
  }
}

export default AddVaccination
