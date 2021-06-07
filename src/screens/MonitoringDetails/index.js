// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  FlatList, ScrollView
} from 'react-native'
import SimplePicker from 'react-native-simple-picker'
import { Header } from 'react-native-elements'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'
import Color from '../../Helper/Color'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgDownArrow from '../../../assets/images/downArrow.png'
import imgPlus from '../../../assets/images/plus.png'
import imgInvite from '../../../assets/images/invite.png'
import imgMobile from '../../../assets/images/mobile.png'
import imgProfilePic from "../../../assets/images/batman.jpg"
import imgDoctorBriefcase from '../../../assets/images/doctorBriefcase.png'
import imgCorrect from '../../../assets/images/correct.png'
import imgStethoscope from '../../../assets/images/stethoscope.png'

const options = ['All', 'Active', 'Expired']
const MONITORING_TRACKERS = [
  { title: 'Blood Pressure', update: 'Once daily @ 8:00 am', img: imgStethoscope },
  { title: 'Blood Sugar', update: 'Twice weekly @ 8:00 am(MON) & 5:00 pm(MON)', img: imgStethoscope },
  { title: 'Cholesterol', update: 'Once Daily @ 8:00 am', img: imgStethoscope },
  { title: 'Exercise', update: 'Thrice daily @ 8:00 am, 3:00 pm & 8:00 pm', img: imgStethoscope },
  { title: 'Food', update: 'Thrice daily @ 8:00 am, 3:00 pm & 8:00 pm', img: imgStethoscope },
  { title: 'Height', update: 'Once Weekly @ 8:00 am(MON)', img: imgStethoscope },
  { title: 'Weight', update: 'Once Weekly @ 8:00 am(MON)', img: imgStethoscope },
]

class MonitoringDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filterBy: 'All',
      selectedTabName: "Patients",
      patientList: [1],
      monitoringList: MONITORING_TRACKERS
    }
  }

  render() {
    return this.renderMainView()
  }

  _onPressApprovalStatus = (name) => {
    this.setState({ selectedTabName: name })
  }

  renderMainView = () => {
    const { selectedTabName } = this.state
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderApprovalStatusDate()}
        {selectedTabName == 'Patients' && this.renderPatientView()}
        {selectedTabName == 'Plan Details' && this.renderPlanDetailsContainer()}
        {selectedTabName == 'Monitored by' && this.renderMonitoredByContainer()}
        <SimplePicker
          ref={'picker'}
          options={options}
          onSubmit={(option) => {
            this.setState({ filterBy: option })
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
      <TouchableOpacity onPress={() => { }}>
        <Image source={imgBack} style={styles.btnMenu} />
      </TouchableOpacity>
    )
  }

  renderCenterHeader = () => {
    return (
      <Text style={styles.headerText}>Acute Diabetes Control</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity onPress={() => { }}>
        <Image source={imgPlus} style={styles.btnMenu} />
      </TouchableOpacity>
    )
  }

  renderApprovalStatusDate = () => {
    const { selectedTabName } = this.state
    return (
      <View style={styles.subContainer}>
        <View style={styles.headerbtnContainer}>
          <TouchableOpacity style={[
            styles.activateBtn, {
              backgroundColor: selectedTabName !== 'Patients' ? Color.WHITE : Color.BLUE,
            }]} onPress={() => this._onPressApprovalStatus('Patients')}>
            <Text style={{ fontSize: 15, color: selectedTabName !== 'Patients' ? Color.BLUE : 'white', }}>Patients</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.activateBtn, { backgroundColor: selectedTabName !== 'Plan Details' ? Color.WHITE : Color.BLUE, }]} onPress={() => this._onPressApprovalStatus('Plan Details')}>
            <Text style={{ fontSize: 15, color: selectedTabName !== 'Plan Details' ? Color.BLUE : 'white', }}>Plan Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[
            styles.activateBtn, {
              backgroundColor: selectedTabName !== 'Monitored by' ? Color.WHITE : Color.BLUE,
            }]} onPress={() => this._onPressApprovalStatus('Monitored by')}>
            <Text style={{ fontSize: 15, color: selectedTabName !== 'Monitored by' ? Color.BLUE : 'white', }}>Monitored by</Text>
          </TouchableOpacity>
        </View>
      </View >
    )
  }

  renderPatientView = () => {
    return (
      <View style={{ flex: 1 }}>
        {this.renderSubHeader()}
        {this.renderPatientFlatlist()}
      </View>
    )
  }

  renderSubHeader = () => {
    return (
      <View style={styles.subHeader}>
        <Text style={[styles.headerText, { fontSize: 17, color: 'gray' }]}>Showing:</Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }} onPress={() => this.refs.picker.show()}>
          <Text style={[styles.headerText, { fontSize: 17 }]}>{this.state.filterBy}</Text>
          <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: 5, alignSelf: 'center' }} />
        </TouchableOpacity>
      </View>
    )
  }

  renderPatientFlatlist = () => {
    return (
      <FlatList
        data={this.state.patientList}
        contentContainerStyle={{ paddingTop: 10, paddingBottom: 25 }}
        renderItem={this.renderPatientListItem}
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }

  renderPatientListItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.cellContainer} activeOpacity={0.5} onPress={() => this.props.navigation.navigate('MonitoringPatientDetails')}>
        <View style={{ flexDirection: 'row', }}>
          <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', width: 80 }}>
            <Image source={imgProfilePic} style={{ height: 60, width: 60, borderRadius: 30 }} />
          </View>
          <View style={{ marginHorizontal: 10, flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
              <Text style={{ fontSize: 18, fontWeight: '400' }}>Chetan Patel</Text>
              <Text style={{ color: 'BLUE' }}>Active</Text>
            </View>
            <Text style={{ color: 'gray', fontSize: 16, fontWeight: '300', marginVertical: 4 }}>Male, 34 Years</Text>
            <Text style={{ color: 'gray', fontSize: 16, fontWeight: '300' }}>Next Renewal On: 17 Sept 2020</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderMonitoredByContainer = () => {
    return (
      <View style={{ flex: 1 }}>
        {this.renderHeaderMonitoredBy()}
        {this.renderYogaExploreFlatlist()}
      </View>
    )
  }

  renderHeaderMonitoredBy = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
        <Text style={{ fontSize: 18 }}>YogaExplore</Text>
        <Image source={imgInvite} style={{ tintColor: 'gray', height: 20, width: 20 }} />
      </View>
    )
  }

  renderYogaExploreFlatlist = () => {
    return (
      <FlatList
        data={this.state.patientList}
        contentContainerStyle={{ paddingTop: 10, paddingBottom: 25 }}
        renderItem={this.renderYogaExploreListItem}
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }

  renderYogaExploreListItem = ({ item, index }) => {
    return (
      <View style={styles.cellContainer}>
        <View style={{ flexDirection: 'row', }}>
          <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', width: 80 }}>
            <Image source={imgProfilePic} style={{ height: 60, width: 60, borderRadius: 30 }} />
          </View>
          <View style={{ marginHorizontal: 10, flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: '400' }}>Dr. Darshit Patel</Text>
            <Text style={{ color: 'gray', fontSize: 16, fontWeight: '300', marginVertical: 4 }}>Team Lead</Text>
            <View style={{ flexDirection: 'row' }}>
              <Image source={imgMobile} style={{ height: 20, width: 15, marginRight: 5 }} />
              <Text style={{ color: 'gray', fontSize: 16, fontWeight: '300' }}>9426956717</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  renderPlanDetailsContainer = () => {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingVertical: 25 }}>
          {this.renderPlanDetails()}
          {this.renderMonitoredTrack()}
          {this.renderInstructions()}
          {this.renderPricing()}
        </ScrollView>
      </View>
    )
  }

  renderPlanDetails = () => {
    return (
      <View style={styles.patientDetailCont}>
        <View style={{ height: 50, backgroundColor: Color.BLUE_LIGHT, alignItems: 'center', justifyContent: 'center', width: 60 }}>
          <Image source={imgDoctorBriefcase} style={{ height: 30, width: 40, }} />
        </View>
        <View style={{ marginHorizontal: 10, flex: 1 }}>
          <Text style={{ color: Color.BLUE_LIGHT, fontSize: 16 }}>Acute Diabetes Control</Text>
          <Text style={{ color: 'gray', fontSize: 16 }} numberOfLines={2}>This service is meant for acute diabetic patients who require constant monitoring of their blood sugar</Text>
          <TouchableOpacity style={{ marginTop: 4 }}>
            <Text style={{ color: Color.BLUE_LIGHT }}>READ MORE</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Text>Status: </Text>
            <Image source={imgCorrect} style={{ height: 12, width: 12, marginRight: 4 }} />
            <Text style={{ color: 'BLUE' }}>LIVE</Text>
          </View>
        </View>
      </View>
    )
  }

  renderMonitoredTrack = () => {
    const { monitoringList } = this.state
    return (
      <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 10 }}>
        <Text style={{ color: Color.BLUE_LIGHT, fontSize: 20 }}>Monitorored Tracker</Text>
        {monitoringList.map((item) => {
          return (
            <View style={styles.monitoringPlanCont}>
              <Image source={item.img} style={{ height: 50, width: 50 }} />
              <View style={{ marginHorizontal: 10 }}>
                <Text style={{ fontSize: 18, }}>{item.title}</Text>
                <Text style={{ fontSize: 15, marginRight: 20, color: 'gray', marginTop: 4 }}>Update: {item.update}</Text>
              </View>
            </View>
          )
        })}
      </View>
    )
  }

  renderInstructions = () => {
    return (
      <View style={styles.instructionCont}>
        <Text style={{ color: Color.BLUE_LIGHT, fontSize: 20 }}>Instructions</Text>
      </View>
    )
  }

  renderPricing = () => {
    return (
      <View style={styles.instructionCont}>
        <Text style={{ color: Color.BLUE_LIGHT, fontSize: 20 }}>Pricing</Text>
        <View style={styles.pricingCont}>
          <Text>INR 10000.0</Text>
          <View style={{ height: 0.6, backgroundColor: 'red', marginVertical: 6 }} />
          <Text>1 month</Text>
        </View>
        <Text style={{ color: 'gray', fontSize: 16, marginTop: 8 }}>Setup Cost: INR 500.0</Text>
        <Text style={{ color: 'gray', fontSize: 16 }}>Tax: 6%</Text>
      </View>
    )
  }

}

export default MonitoringDetails