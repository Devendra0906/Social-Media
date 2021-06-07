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
import Slider from '@react-native-community/slider'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgCalendar from '../../../assets/images/calendar.png'
import imgAttachment from '../../../assets/images/attachment.png'
import imgEdit from '../../../assets/images/edit.png'
import Color from '../../Helper/Color'


const options = ['Celsius(C)', 'Fahrenheit(F)']

class JointStiffness extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showDatePicker: false,
      readingTakenOn: new Date(),
      selectedOption: 'Celsius(C)',
      temperature: '',
      notes: '',
      locationOfStiffness: '',
      noPainSlider: 0,
      sValue: 'No joint stiffness'
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

  _onChangeSlider = (val) => {
    let sText = ''
    if (val == 0) {
      sText = 'No joint stiffness'
    } else if (val == 1) {
      sText = 'Slight joint stiffness'
    } else if (val == 2) {
      sText = 'Moderate joint stiffness - pain affeting regular movement'
    } else if (val == 3) {
      sText = 'Significant joint stiffness - able to move but with lot of pain'
    } else if (val == 4) {
      sText = `Severe joint stiffness - almost unable to move.\nSevere Pain`
    }
    this.setState({ noPainSlider: val, sValue: sText })
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
            {this.renderWhatTriggers()}
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
      <Text style={styles.headerText}>Joint Stiffness</Text>
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
      <View style={{ marginVertical: 10, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>Level of pain</Text>
        <Text style={{
          color: 'rgb(0,218,189)',
          fontSize: 18,
          alignSelf: 'center',
          marginTop: 10,
          marginHorizontal: 20,
          textAlign: 'center'
        }}>{this.state.sValue}</Text>
        <Slider
          style={{ width: 300, height: 40, alignSelf: 'center' }}
          minimumValue={0}
          maximumValue={4}
          minimumTrackTintColor="gray"
          maximumTrackTintColor="red"
          step={1}
          onSlidingComplete={(val) => this._onChangeSlider(val)}
        />
      </View>
    )
  }

  renderWhatTriggers = () => {
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>Location of stiffness</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
            <TextInput
              placeholder=''
              value={this.state.locationOfStiffness}
              onChangeText={(text) => this.setState({ locationOfStiffness: text })}
              style={[styles.textInput, { paddingRight: 22, flex: 1 }]}
            />
          </TouchableOpacity>
          {/* <Text style={{ marginLeft: 10, fontSize: 16, color: 'rgb(255,49,70)' }}>min</Text> */}
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

export default JointStiffness
