// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  ScrollView
} from 'react-native'
import { Header } from 'react-native-elements'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'
import Color from '../../Helper/Color'
import localizedStrings from '../../Helper/LocalisedString'

// Image imports
import imgBack from '../../../assets/images/back.png'
import profileImg from "../../../assets/images/batman.jpg"

const data = [
  { day: `${localizedStrings.consultationTimings.monday}`, time: '09:00 AM - 05:00 PM' },
  { day: `${localizedStrings.consultationTimings.tuesday}`, time: '09:00 AM - 05:00 PM' },
  { day: `${localizedStrings.consultationTimings.wednesday}`, time: '09:00 AM - 05:00 PM' },
  { day: `${localizedStrings.consultationTimings.thursday}`, time: '09:00 AM - 05:00 PM' },
  { day: `${localizedStrings.consultationTimings.friday}`, time: '09:00 AM - 05:00 PM' },
  { day: `${localizedStrings.consultationTimings.saturday}`, time: 'Not Available' },
  { day: `${localizedStrings.consultationTimings.sunday}`, time: 'Not Available' },
]

class ConsultationTimings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({ data: data })
  }


  render() {
    return this.renderMainView()
  }

  renderMainView = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={{ flex: 1 }}>
          {this.renderPatientDetails()}
          {this.renderAppointmentList()}
          <Text style={{ marginLeft: 18, marginTop: 15, fontSize: 17 }}>{localizedStrings.consultationTimings.timing}</Text>
        </ScrollView>
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
      <Text style={styles.headerText}>{localizedStrings.consultationTimings.consultationTimings}</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }} onPress={() => { }}>
        <Text style={styles.headerText}>{localizedStrings.consultationTimings.done}</Text>
      </TouchableOpacity>
    )
  }

  renderPatientDetails = () => {
    return (
      <View style={{ margin: 15, borderColor: 'gray', borderWidth: 0.3, borderRadius: 5 }}>
        <View style={styles.patientMainContainer}>
          <Image source={profileImg} style={{ height: 70, width: 70, borderRadius: 35 }} />
          <View style={{ marginHorizontal: 8, flex: 1, alignSelf: 'flex-start', marginTop: 10 }}>
            <Text style={{ fontSize: 16, color: 'rgb(0,164,249)' }}>dr Patel Darshit</Text>
            <Text style={{ fontSize: 15 }}>.</Text>
          </View>
        </View>
        {this.renderServiceView()}
        {this.renderPracticeLocation()}
      </View>
    )
  }

  renderServiceView = () => {
    return (
      <View style={styles.dropdownMainContainer}>
        <Text style={styles.indicationLabel}>{localizedStrings.consultationTimings.service}</Text>
        <Text style={styles.valueLabel}>Service</Text>
      </View>
    )
  }

  renderPracticeLocation = () => {
    return (
      <View style={styles.dropdownMainContainer}>
        <Text style={styles.indicationLabel}>{localizedStrings.consultationTimings.practiceLocation}</Text>
        <Text style={styles.valueLabel}>Patel Darshit</Text>
      </View>
    )
  }

  renderAppointmentList = () => {
    return (
      this.state.data.map((item) => {
        return (
          <View style={styles.dayContainer}>
            <Text style={{ width: '30%', fontSize: 17, color: 'rgb(0,164,249)' }}>{item.day}</Text>
            <Text style={{ width: '70%', fontSize: 17 }}>{item.time}</Text>
          </View>
        )
      })
    )
  }
}

export default ConsultationTimings
