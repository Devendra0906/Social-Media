// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  TextInput, ScrollView, KeyboardAvoidingView, Platform,
} from 'react-native'
import { Header } from 'react-native-elements'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import ImagePicker from 'react-native-image-picker'
import moment from 'moment'
import SimplePicker from 'react-native-simple-picker'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgCalendar from '../../../assets/images/calendar.png'
import imgEdit from '../../../assets/images/edit.png'
import Color from '../../Helper/Color'

const options = ['centimeter(cm)', 'inch(in)', 'foot(ft)', 'meter(m)']

class WaistMeasurement extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showDatePicker: false,
      readingTakenOn: new Date(),
      selectedOption: 'centimeter(cm)',
      waistMeasurement: '',
      notes: '',
    }
  }


  render() {
    return this.renderMainView()
  }

  openImagePicker() {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'mixed'
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // this.setState({ avatarSource: source });
      }
    })
  }

  hideDatePicker = () => {
    this.setState({ showDatePicker: false })
  }

  handleConfirm = date => {
    this.setState({ readingTakenOn: moment(date).format('MMM DD, YYYY') })
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
            {this.renderReadingTakenOn()}
            {this.renderRelationShip()}
            {this.renderNotes()}
          </ScrollView>
        </KeyboardAvoidingView>
        <DateTimePickerModal
          isVisible={this.state.showDatePicker}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
          date={this.state.readingTakenOn}
        // maximumDate={new Date(moment().subtract(16, 'years'))}
        />
        <SimplePicker
          ref={'picker'}
          options={options}
          onSubmit={(option) => {
            this.setState({ selectedOption: option })
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
      <Text style={styles.headerText}>Waist Measurement</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }} onPress={() => this.setState({ isOpenAddScreen: !this.state.isOpenAddScreen })}>
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
        }}>Reading Taken On</Text>
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

  renderRelationShip = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>Waist Measurement</Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder=''
            style={[styles.textInput, { paddingRight: 22, flex: 0.5 }]}
            value={this.state.waistMeasurement}
            onChangeText={(text) => this.setState({ waistMeasurement: text })}
            keyboardType='numeric'
            returnKeyType='done'
          />
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }} onPress={() => this.refs.picker.show()}>
            <Text style={{ fontSize: 18, color: 'red' }}>{this.state.selectedOption}</Text>
            <Image source={imgEdit} style={{ tintColor: 'red', height: 17, width: 17, marginLeft: 5, alignSelf: 'center', marginTop: 0 }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderNotes = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>Notes</Text>
        <TextInput
          placeholder={'Add any additional information regarding your reading'}
          style={styles.textInput}
          multiline
          onChangeText={(text) => this.setState({ notes: text })}
        />
      </View>
    )
  }

}

export default WaistMeasurement
