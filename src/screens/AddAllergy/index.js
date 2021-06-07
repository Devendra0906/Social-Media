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

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgPlus from '../../../assets/images/plus.png'
import imgDownArrow from '../../../assets/images/downArrow.png'
import Color from '../../Helper/Color'

class AddAllergy extends Component {
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
        <ScrollView style={{ flex: 1 }}>
          {this.renderNameOfAllergy()}
          {this.renderDetailView()}
          {this.renderMedicationTaken()}
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
          date={this.state.firstDiagnosedDate}
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
      <Text style={styles.headerText}>Add Allergy</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }}>
        <Text style={styles.headerText}>Save</Text>
      </TouchableOpacity>
    )
  }

  renderNameOfAllergy = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>Name of Allergy</Text>
        <TextInput
          placeholder={'e.g. Hay Fever'}
          style={styles.textInput}
        />
      </View>
    )
  }

  renderDetailView = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>First Diagnosed On</Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }} onPress={this._onPressDatePicker}>
          <TextInput
            placeholder='Start Date'
            style={[styles.textInput, { paddingRight: 22, }]}
            value={this.state.firstDiagnosedDate}
            editable={false}
            pointerEvents='none'
          />
          <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: -15, alignSelf: 'center', marginTop: 0 }} />
        </TouchableOpacity>
      </View>
    )
  }

  renderMedicationTaken = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>Medication Taken</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image source={imgPlus} style={{ tintColor: 'red', height: 12, width: 12, marginHorizontal: 5, alignSelf: 'center', marginTop: 0 }} />
          <TextInput
            placeholder={'Add Medication'}
            value={'Add Medication'}
            style={[styles.textInput, { flex: 1, marginLeft: -20, paddingLeft: 20, fontSize: 16 }]}
          />
        </View>
      </View>
    )
  }

  renderTreatedBy = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>Triggerred by</Text>
        <TextInput
          placeholder={'e.g. Not yet indentified polien, sear food, pean...'}
          style={styles.textInput}
        />
      </View>
    )
  }

  renderReaction = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>Reaction</Text>
        <TextInput
          placeholder={'Reaction'}
          style={styles.textInput}
        />
      </View>
    )
  }

  renderHowOftenDoest = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>How Often Does It Occur</Text>
        <TextInput
          placeholder={'Reaction'}
          style={styles.textInput}
        />
      </View>
    )
  }

  renderNotes = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>Notes</Text>
        <TextInput
          placeholder={''}
          style={styles.textInput}
          multiline
        />
      </View>
    )
  }
}

export default AddAllergy
