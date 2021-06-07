// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  TextInput
} from 'react-native'
import { Header } from 'react-native-elements'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import moment from 'moment'
import localizedStrings from '../../Helper/LocalisedString'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgPlus from '../../../assets/images/plus.png'
import imgDownArrow from '../../../assets/images/downArrow.png'
import Color from '../../Helper/Color'


class AddHealthCondition extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstDiagnosedDate: new Date(),
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
    this.setState({ firstDiagnosedDate: moment(date).format('MMM DD, YYYY') })
    this.hideDatePicker();
  };

  _onPressDatePicker = () => {
    this.setState({ showDatePicker: true })
  }

  renderMainView = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderNameOfCondition()}
        {this.renderDetailView()}
        {this.renderMedicationTaken()}
        {this.renderTreatedBy()}
        {this.renderNotes()}
        <DateTimePickerModal
          isVisible={this.state.showDatePicker}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
          date={this.state.firstDiagnosedDate}
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
      <Text style={styles.headerText}>{localizedStrings.addHealthCondition.addHealthCondition}</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }}>
        <Text style={styles.headerText}>{localizedStrings.addHealthCondition.save}</Text>
      </TouchableOpacity>
    )
  }

  renderNameOfCondition = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.addHealthCondition.nameOfCondition}</Text>
        <TextInput
          placeholder={localizedStrings.addHealthCondition.nameOfConditionPlaceholder}
          style={styles.textInput}
        />
      </View>
    )
  }

  renderDetailView = () => {
    return (
      <View style={{ flexDirection: 'row', marginTop: 15, paddingHorizontal: 20 }}>
        <View style={{ alignItems: 'flex-start', flex: 1 }}>
          <Text style={styles.indicationText}>{localizedStrings.addHealthCondition.firstDiagnosedOn}</Text>
          <TouchableOpacity style={{ flexDirection: 'row' }} onPress={this._onPressDatePicker}>
            <TextInput
              placeholder='Jul 04 1993'
              style={[styles.textInput, { paddingRight: 22 }]}
              value={this.state.firstDiagnosedDate}
              editable={false}
              pointerEvents='none'
            />
            <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: -15, alignSelf: 'center', marginTop: 0 }} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.indicationText}>{localizedStrings.addHealthCondition.status}</Text>
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <TextInput
              placeholder={localizedStrings.addHealthCondition.ongoing}
              style={styles.textInput}
            />
            <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: 5, alignSelf: 'center', marginTop: 8 }} />
          </TouchableOpacity>
        </View>
      </View >
    )
  }

  renderMedicationTaken = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.addHealthCondition.medicationTaken}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image source={imgPlus} style={{ tintColor: 'red', height: 12, width: 12, marginHorizontal: 5, alignSelf: 'center', marginTop: 0 }} />
          <TextInput
            placeholder={localizedStrings.addHealthCondition.addMedication}
            value={localizedStrings.addHealthCondition.addMedication}
            style={[styles.textInput, { flex: 1, marginLeft: -20, paddingLeft: 20, fontSize: 16 }]}
          />
        </View>
      </View>
    )
  }

  renderTreatedBy = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.addHealthCondition.treatedBy}</Text>
        <TextInput
          placeholder={localizedStrings.addHealthCondition.drName}
          style={styles.textInput}
        />
      </View>
    )
  }

  renderNotes = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.addHealthCondition.notes}</Text>
        <TextInput
          placeholder={''}
          style={styles.textInput}
          multiline
        />
      </View>
    )
  }
}

export default AddHealthCondition
