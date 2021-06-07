// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  TextInput, ScrollView
} from 'react-native'
import { Header } from 'react-native-elements'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import moment from 'moment'
import SimplePicker from 'react-native-simple-picker'
import localizedStrings from '../../Helper/LocalisedString'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgDownArrow from '../../../assets/images/downArrow.png'
import imgCalendar from '../../../assets/images/calendar.png'
import Color from '../../Helper/Color'

const dosageOptions = ['Once daily', 'Twice daily', '3 times daily', '4 times daily', '5 times daily', 'Every other day', 'Every 2 hours', 'Every 3 hours', 'Every 4 hours', 'Every 6 hours', 'Every 8 hours', 'Every 12 hours', 'Every hour', 'Every other hour', 'Once', 'STAT', 'Once a week', 'Twice a week', 'Thrice a week', '4 days in a week', '5 days in a week', 'Once every 2 weeks', 'Once a year', 'Twice a year', 'Thrice a year', 'When needed', 'Once a month', 'Twice a month', 'Thrice a month', 'Every other month']
const whenOptions = [
  `${localizedStrings.addMedicationScreen.beforeMeals}`,
  `${localizedStrings.addMedicationScreen.withMeals}`,
  `${localizedStrings.addMedicationScreen.afterMeals}`,
  `${localizedStrings.addMedicationScreen.atBedtime}`,
  `${localizedStrings.addMedicationScreen.morningAndEveningAfterMeals}`,
  `${localizedStrings.addMedicationScreen.morningAndAfternoonAfterMeals}`,
  `${localizedStrings.addMedicationScreen.afternoonAndEveningAfterMeals}`,
  `${localizedStrings.addMedicationScreen.morningAndEveningBeforeMeals}`,
  `${localizedStrings.addMedicationScreen.morningAndAfternoonBeforeMeals}`,
  `${localizedStrings.addMedicationScreen.afternoonAndEveningBeforeMeals}`,
  `${localizedStrings.addMedicationScreen.morningAfterMeals}`,
  `${localizedStrings.addMedicationScreen.morningBeforeMeals}`,
  `${localizedStrings.addMedicationScreen.afternoonAfterMeals}`,
  `${localizedStrings.addMedicationScreen.afternoonBeforeMeals}`,
  `${localizedStrings.addMedicationScreen.eveningBeforeMeans}`,
  `${localizedStrings.addMedicationScreen.morningWithMeals}`,
  `${localizedStrings.addMedicationScreen.afternoonWithMeals}`,
  `${localizedStrings.addMedicationScreen.eveningWithMeals}`,
  `${localizedStrings.addMedicationScreen.oneHourAfterMeals}`,
  `${localizedStrings.addMedicationScreen.oneHourBeforeMeals}`,
  `${localizedStrings.addMedicationScreen.twoHourAfterMeals}`,
  `${localizedStrings.addMedicationScreen.halfHourBeforeMeals}`
]
class AddMedicationScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstDiagnosedDate: new Date(),
      isSmoking: true,
      isAlcohol: true,
      startDate: '',
      endDate: '',
      type: 'start',
      showDatePicker: false,
      selectFrequencyOfIntake: '',
      whenSelectedOption: ''
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
    } else {
      this.setState({ endDate: moment(date).format('MMM DD, YYYY') })
    }
    this.hideDatePicker();
  };

  _onPressDatePicker = (type) => {
    this.setState({ showDatePicker: true, type: type })
  }

  renderMainView = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={{ flex: 1 }}>
          {this.renderNameOfMedication()}
          {this.renderFormOfMedicine()}
          {this.renderDosage()}
          {this.renderDuration()}
        </ScrollView>
        <DateTimePickerModal
          isVisible={this.state.showDatePicker}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
          date={new Date()}
        // maximumDate={new Date(moment().subtract(16, 'years'))}
        />
        <SimplePicker
          ref={'picker'}
          options={dosageOptions}
          onSubmit={(option) => {
            this.setState({ selectFrequencyOfIntake: option })
          }}
        />
        <SimplePicker
          ref={'WhenPicker'}
          options={whenOptions}
          onSubmit={(option) => {
            this.setState({ whenSelectedOption: option })
          }}
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
      <Text style={styles.headerText}>{localizedStrings.addMedicationScreen.addMedication}</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }}>
        <Text style={styles.headerText}>{localizedStrings.addMedicationScreen.save}</Text>
      </TouchableOpacity>
    )
  }

  renderNameOfMedication = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.addMedicationScreen.medicationName}</Text>
        <TextInput
          placeholder={localizedStrings.addMedicationScreen.medicationPlaceholder}
          style={styles.textInput}
        />
      </View>
    )
  }

  renderFormOfMedicine = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.addMedicationScreen.formOfMedicine}</Text>
        <TextInput
          placeholder={localizedStrings.addMedicationScreen.medicationPlaceholder}
          style={styles.textInput}
        />

        <View style={{ flexDirection: 'row' }}>
          <View style={{ alignItems: 'flex-start', flex: 1 }}>

            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <TextInput
                placeholder='Strength#'
                style={[styles.textInput, { paddingRight: 22, flex: 1 }]}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, marginLeft: 10 }}>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <TextInput
                placeholder='mg'
                style={[styles.textInput, { flex: 1 }]}
              />
              <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: -15, alignSelf: 'center', marginTop: 8 }} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder={localizedStrings.addMedicationScreen.methodOfIntake}
            style={[styles.textInput, { flex: 1, paddingRight: 22 }]}
          />
          <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: -15, alignSelf: 'center', marginTop: 8 }} />
        </TouchableOpacity>
      </View>
    )
  }

  renderDosage = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.addMedicationScreen.dosage}</Text>
        <TextInput
          placeholder={localizedStrings.addMedicationScreen.quality}
          style={[styles.textInput, { flex: 0.5 }]}
        />
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.refs.picker.show()}>
          <TextInput
            placeholder={localizedStrings.addMedicationScreen.frequencyOfIntake}
            value={this.state.selectFrequencyOfIntake}
            style={[styles.textInput, { flex: 1, paddingRight: 22 }]}
            editable={false}
            pointerEvents='none'
          />
          <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: -15, alignSelf: 'center', marginTop: 8 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.refs.WhenPicker.show()}>
          <TextInput
            placeholder={localizedStrings.addMedicationScreen.when}
            value={this.state.whenSelectedOption}
            style={[styles.textInput, { flex: 1, paddingRight: 22 }]}
            editable={false}
            pointerEvents='none'
          />
          <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: -15, alignSelf: 'center', marginTop: 8 }} />
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 10, alignSelf: 'flex-end' }}>
          <Text style={styles.indicationText}>{localizedStrings.addMedicationScreen.addAnotherDosage}</Text>
        </TouchableOpacity>

        <TextInput
          placeholder={localizedStrings.addMedicationScreen.addAnotherDosagePlaceholder}
          multiline
          style={{
            padding: 5,
            borderColor: 'lightgray',
            borderWidth: 0.5,
            fontSize: 16
          }}
        />
      </View>
    )
  }

  renderDuration = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.addMedicationScreen.duration}</Text>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ alignItems: 'flex-start', flex: 1 }}>

            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this._onPressDatePicker('start')}>
              <TextInput
                placeholder={moment(new Date()).format('MMM DD, YYYY')}
                style={[styles.textInput, { paddingRight: 22, flex: 1 }]}
                value={this.state.startDate}
                editable={false}
                pointerEvents='none'
              />
              <Image source={imgCalendar} style={{ tintColor: 'red', height: 20, width: 20, marginLeft: -15, alignSelf: 'center', marginRight: 5 }} />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, marginLeft: 10 }}>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this._onPressDatePicker('end')}>
              <TextInput
                placeholder={moment(new Date()).format('MMM DD, YYYY')}
                style={[styles.textInput, { flex: 1 }]}
                value={this.state.endDate}
                editable={false}
                pointerEvents='none'
              />
              <Image source={imgCalendar} style={{ tintColor: 'red', height: 20, width: 20, marginLeft: -15, alignSelf: 'center', marginRight: 5 }} />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    )
  }
}

export default AddMedicationScreen
