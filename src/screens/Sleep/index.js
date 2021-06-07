// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  TextInput, ScrollView, KeyboardAvoidingView, Platform,
  Switch
} from 'react-native'
import { Header } from 'react-native-elements'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { Dropdown } from 'react-native-material-dropdown'
import ImagePicker from 'react-native-image-picker'
import { Icon } from "native-base"
import moment from 'moment'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgCalendar from '../../../assets/images/calendar.png'
import imgAttachment from '../../../assets/images/attachment.png'
import profileImg from "../../../assets/images/batman.jpg"
import imgHeart from '../../../assets/images/heart.png'
import Color from '../../Helper/Color'

const cources = [
  { value: 'Last 1 Months' },
  { value: 'Last 2 Months' },
  { value: 'Last 3 Months' },
  { value: 'Last 4 Months' },
  { value: 'Last 5 Months' },
]

class RespiratoryRates extends Component {
  constructor(props) {
    super(props)

    this.state = {
      readingTakenOn: new Date(),
      wakeUp: new Date(),
      showDatePicker: false,
      fluidIntake: '',
      associate: 'Last 3 Months',
      selectedOxygenLevel: 'Option 1',
      isOpenAddScreen: true,
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
    if (this.state.type == 'wakeUp') {
      this.setState({ wakeUp: moment(date).format('MMM DD, YYYY') })
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

  renderMainView = () => {
    const { isOpenAddScreen } = this.state
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            {isOpenAddScreen ? this.renderAddBloodSugarScreen() : this.renderMainScreen()}
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
        {this.renderReadingTakenOn()}
        {this.renderWakeUpTime()}
        {this.renderOxygenLevel()}
        {this.renderAttachments()}
        {this.renderNotes()}
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
      <Text style={styles.headerText}>Sleep</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }} onPress={() => this.setState({ isOpenAddScreen: !this.state.isOpenAddScreen })}>
        <Text style={styles.headerText}>Save</Text>
      </TouchableOpacity>
    )
  }

  renderPatientDetails = () => {
    return (
      <View style={{ flexDirection: 'row', marginTop: 0, paddingHorizontal: 15, alignItems: 'center', backgroundColor: 'rgb(59,63,76)' }}>
        <Image source={profileImg} style={{ height: 70, width: 70, borderRadius: 35 }} />
        <View style={{ marginHorizontal: 8, flex: 1, alignSelf: 'flex-start', marginTop: 20 }}>
          <Text style={{ color: Color.WHITE }}>Chetan Patel</Text>
          <Text style={{ color: Color.WHITE }}>32 Years, Male</Text>
        </View>
        <View style={{ paddingTop: 5 }}>
          <View style={{ alignItems: 'flex-end', }}>
            <Switch style={{ marginTop: 8 }} />
            <Text style={{ color: Color.WHITE, marginVertical: 5 }}>Enabled</Text>
          </View>
          <TouchableOpacity style={{ marginBottom: 8 }}>
            <Icon name={'edit-2'} type='Feather' style={[{ fontSize: 20, color: Color.WHITE, alignSelf: 'flex-end' }]} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderFilerView = () => {
    return (
      <View style={{
        alignItems: 'center',
        marginTop: 15,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        marginHorizontal: 15,
        paddingBottom: 15
      }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{
            color: 'gray',
            fontSize: 18,
            marginRight: 15
          }}>Filter By</Text>
          <Dropdown
            rippleOpacity={0}
            data={cources}
            textColor={'#000'}
            baseColor={'#000'}
            value={this.state.associate}
            onChangeText={label => {
              this.setState({ associate: label });
            }}
            renderBase={() => {
              return (
                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: '#666',
                  borderBottomWidth: 0.5, width: 150
                }}>
                  <TextInput
                    placeholderTextColor='#666'
                    style={{
                      flex: 1, marginHorizontal: 0,
                      fontSize: 15
                    }}
                    value={this.state.associate}
                    editable={false}
                    pointerEvents='none'
                  />
                  <Icon name='chevron-thin-down' type='Entypo' style={{ fontSize: 20, color: 'rgb(255,49,70)' }} />
                </View>
              );
            }}
          />
        </View>
      </View>
    )
  }

  renderBody = () => {
    return (
      <View>
        <Image source={imgHeart} style={styles.mainImage} resizeMode='contain' />
        <Text style={{ marginHorizontal: 20, color: 'gray', fontSize: 18, textAlign: 'center' }}>No health tracker data have been added for the selected date range</Text>
      </View>
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

  renderWakeUpTime = () => {
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>Wake up Time</Text>
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this._onPressDatePicker('wakeUp')}>
          <TextInput
            placeholder=''
            value={this.state.wakeUp}
            style={[styles.textInput, { flex: 1, paddingRight: 22 }]}
            editable={false}
            pointerEvents='none'
          />
          <Image source={imgCalendar} style={{ tintColor: 'red', height: 20, width: 20, marginLeft: -15, alignSelf: 'center', marginTop: 0 }} />
        </TouchableOpacity>
      </View>
    )
  }

  renderOxygenLevel = () => {
    return (
      <View style={{ marginTop: 15, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>Respiratory Rates</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', flex: 0.6, }}>
            <TextInput
              placeholder=''
              value={this.state.fluidIntake}
              onChangeText={(text) => this.setState({ fluidIntake: text })}
              style={[styles.textInput, { paddingRight: 22, flex: 1 }]}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10, fontSize: 16 }}>breaths/min</Text>
        </View>
      </View>
    )
  }

  renderAttachments = () => {
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>Add Medical Report</Text>
        <TouchableOpacity onPress={this.openImagePicker}>
          <Image source={imgAttachment} style={{ tintColor: 'rgb(72,166,211)', width: 30, height: 35, marginTop: 15, marginLeft: 15 }} />
          <Text style={[styles.indicationText, { color: 'rgb(72,166,211)', fontSize: 12, marginTop: 5 }]}>{'   Upload\nAttachment'}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderNotes = () => {
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>Notes</Text>
        <TextInput
          placeholder={'Add any additional information regarding your reading'}
          style={styles.textInput}
          multiline
        />
      </View>
    )
  }
}

export default RespiratoryRates
