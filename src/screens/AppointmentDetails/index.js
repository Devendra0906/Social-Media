// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  SafeAreaView, ScrollView,
} from 'react-native'
import { Header } from 'react-native-elements'
import { DrawerActions } from '@react-navigation/native'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgProfilePic from "../../../assets/images/batman.jpg"
import imgCalendar from '../../../assets/images/calendar.png'
import imgHospital from '../../../assets/images/healthBuilding.png'
import imgDoctorBriefcase from '../../../assets/images/doctorBriefcase.png'
import imgStethoscope from '../../../assets/images/stethoscope.png'
import imgMale from '../../../assets/images/user_male.png'
import Color from '../../Helper/Color'

class AppointmentDetails extends Component {

  render() {
    return this.renderMainView()
  }

  renderMainView = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <View style={{ flex: 1, justifyContent: 'space-between', }}>
          <ScrollView style={{ flex: 1 }}>
            {this.renderDoctorInfo()}
            {this.renderAppointmentDetails()}
            {this.renderDoctorDetails()}
          </ScrollView>
          {this.renderBottomView()}
        </View>
      </View>
    )
  }

  renderHeader = () => {
    return (
      <Header
        containerStyle={{ backgroundColor: Color.WHITE, marginTop: headerMarginTop, borderBottomWidth: 0 }}
        leftComponent={this.renderLeftHeader()}
        centerComponent={this.renderCenterHeader()}
      />
    )
  }

  renderLeftHeader = () => {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('SideMenu')}>
        <Image source={imgBack} style={styles.btnMenu} />
      </TouchableOpacity>
    )
  }

  renderCenterHeader = () => {
    return (
      <Text style={styles.headerText}>Appointment Details</Text>
    )
  }

  renderDoctorInfo = () => {
    return (
      <View style={styles.docContainer}>
        <Image source={imgProfilePic} style={styles.proPic} />
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>Chetan Patel</Text>
          <Text style={{ color: 'white' }}>Male, 34 Years</Text>
        </View>
      </View>
    )
  }

  renderAppointmentDetails = () => {
    return (
      <View style={styles.appointmentContainer}>
        <Image source={imgCalendar} style={{ height: 50, width: 50, tintColor: 'rgb(201,160,109)', marginRight: 10 }} />
        <View>
          <Text style={{ fontSize: 18 }}>09:30 AM IST (UTC+05:30)</Text>
          <Text style={{ fontSize: 16, marginVertical: 4 }}>17 August 2020, Monday</Text>
          <Text style={{ fontSize: 16, color: 'rgb(201,160,109)' }}>Awaiting Response<Text style={{ color: Color.BLUE_LIGHT }}>(Free)</Text></Text>
        </View>
      </View>
    )
  }

  renderDoctorDetails = () => {
    return (
      <View style={{ paddingHorizontal: 20 }}>
        <View style={styles.detailsContainer}>
          <Image source={imgStethoscope} style={styles.detailsImg} />
          <Text style={styles.detailText}>Clinic Consultation(15 min)</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Image source={imgMale} style={styles.detailsImg} />
          <Text style={styles.detailText}>Dr. Patel Darshit</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Image source={imgHospital} style={styles.detailsImg} />
          <Text style={styles.detailText}>Patel Darshit</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Image source={imgDoctorBriefcase} style={styles.detailsImg} />
          <Text style={styles.detailText}>15 min</Text>
        </View>
      </View>
    )
  }

  renderBottomView = () => {
    return (
      <SafeAreaView>
        <View style={styles.bottomCont}>
          <TouchableOpacity style={styles.bottombtnCont} onPress={() => { }}>
            <Image source={imgDoctorBriefcase} style={styles.bottomImg} />
            <Text>CANCEL</Text>
          </TouchableOpacity>
          <View style={{ width: 0.5, marginVertical: 2, backgroundColor: 'gray', }} />
          <TouchableOpacity style={styles.bottombtnCont} onPress={() => { }}>
            <Image source={imgDoctorBriefcase} style={styles.bottomImg} />
            <Text>RESCHEDULE</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}
export default AppointmentDetails