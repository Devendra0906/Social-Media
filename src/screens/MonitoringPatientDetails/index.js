// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  FlatList, ScrollView, TextInput
} from 'react-native'
import SimplePicker from 'react-native-simple-picker'
import { Dropdown } from 'react-native-material-dropdown'
import { Icon } from "native-base"
import { Header } from 'react-native-elements'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'
import Color from '../../Helper/Color'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgPlus from '../../../assets/images/plus.png'
import imgHeart from '../../../assets/images/heart.png'
import imgDownArrow from '../../../assets/images/downArrow.png'
import imgMobile from '../../../assets/images/mobile.png'
import imgProfilePic from "../../../assets/images/batman.jpg"
import imgDoctorBriefcase from '../../../assets/images/doctorBriefcase.png'
import imgCorrect from '../../../assets/images/correct.png'
import imgStethoscope from '../../../assets/images/stethoscope.png'

const cources = [
  { value: 'Last 1 Months' },
  { value: 'Last 2 Months' },
  { value: 'Last 3 Months' },
  { value: 'Last 4 Months' },
  { value: 'Last 5 Months' },
]

const MONITORING_TRACKERS = [
  { title: 'Blood Pressure', update: 'Once daily @ 8:00 am', img: imgStethoscope },
  { title: 'Blood Sugar', update: 'Twice weekly @ 8:00 am(MON) & 5:00 pm(MON)', img: imgStethoscope },
  { title: 'Cholesterol', update: 'Once Daily @ 8:00 am', img: imgStethoscope },
  { title: 'Exercise', update: 'Thrice daily @ 8:00 am, 3:00 pm & 8:00 pm', img: imgStethoscope },
  { title: 'Food', update: 'Thrice daily @ 8:00 am, 3:00 pm & 8:00 pm', img: imgStethoscope },
  { title: 'Height', update: 'Once Weekly @ 8:00 am(MON)', img: imgStethoscope },
  { title: 'Weight', update: 'Once Weekly @ 8:00 am(MON)', img: imgStethoscope },
]

const trackrData = [
  { name: 'Blood Pressure', icon: require('../../../assets/images/blood-pressure.png'), screen: 'AddBloodPressure' },
]

class MonitoringPatientDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTabName: "Log",
      associate: 'Last 3 Months',
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
        {selectedTabName == 'Log' && this.renderLogContainer()}
        {selectedTabName == 'Graphs' && this.renderGraphsContainer()}
        {selectedTabName == 'Plan' && this.renderPlanContainer()}
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
      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
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
        <Image source={imgStethoscope} style={styles.btnMenu} resizeMode='contain' />
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
              backgroundColor: selectedTabName !== 'Log' ? Color.WHITE : Color.BLUE,
            }]} onPress={() => this._onPressApprovalStatus('Log')}>
            <Text style={{ fontSize: 15, color: selectedTabName !== 'Log' ? Color.BLUE : 'white', }}>Log</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.activateBtn, { backgroundColor: selectedTabName !== 'Graphs' ? Color.WHITE : Color.BLUE, }]} onPress={() => this._onPressApprovalStatus('Graphs')}>
            <Text style={{ fontSize: 15, color: selectedTabName !== 'Graphs' ? Color.BLUE : 'white', }}>Graphs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[
            styles.activateBtn, {
              backgroundColor: selectedTabName !== 'Plan' ? Color.WHITE : Color.BLUE,
            }]} onPress={() => this._onPressApprovalStatus('Plan')}>
            <Text style={{ fontSize: 15, color: selectedTabName !== 'Plan' ? Color.BLUE : 'white', }}>Plan</Text>
          </TouchableOpacity>
        </View >
      </View >
    )
  }

  renderLogContainer = () => {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {this.renderFilerView()}
          {this.renderLogBody()}
        </ScrollView>
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

  renderLogBody = () => {
    return (
      <View>
        <Image source={imgHeart} style={styles.mainImage} resizeMode='contain' />
        <Text style={{ marginHorizontal: 20, color: 'gray', fontSize: 18, textAlign: 'center' }}>No health tracker data have been added for the selected date range</Text>
      </View>
    )
  }

  renderGraphsContainer = () => {
    return (
      <View style={{ flex: 1 }}>
        {this.renderFilerView()}
        {this.renderTrackerList()}
      </View>
    )
  }

  renderTrackerList = () => {
    return (
      <FlatList
        style={styles.flatListStyle}
        data={trackrData}
        contentContainerStyle={{ paddingBottom: 25, paddingTop: 15 }}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderTrackerListCell}
      />
    )
  }

  renderTrackerListCell = ({ item, index }) => {
    return (
      <View>
        <View style={{ padding: 10, marginLeft: 10, marginTop: 10, borderWidth: 1, borderColor: Color.OFF_WHITE, aspectRatio: 1.3 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={item.icon} style={{ height: 30, width: 30 }} />
            <Text style={{ fontSize: 18, marginLeft: 10 }}>
              {item.name}
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ color: Color.RED, fontSize: 20, textAlign: 'center' }}>
              No Data
            </Text>
          </View>
          <TouchableOpacity onPress={() => this.onPressUpdateTracker(item)}>
            <Text style={{ color: Color.BLUE, fontSize: 16, fontWeight: '300', alignSelf: 'flex-end' }}>
              UPDATE TRACKER
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderPlanContainer = () => {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {this.renderCurrentSubscription()}
          {this.renderMonitoredTrack()}
        </ScrollView>
      </View>
    )
  }

  renderCurrentSubscription = () => {
    return (
      <View style={{ paddingHorizontal: 20, borderBottomWidth: 0.5, borderBottomColor: 'gray', paddingBottom: 0 }}>
        <Text style={{ fontSize: 20 }}>Current Subscription</Text>
        <View style={styles.instructionCont}>
          <View style={{ flexDirection: 'row', }}>
            <View style={styles.pricingCont}>
              <Text>INR 10000.0</Text>
              <View style={{ height: 0.6, backgroundColor: 'red', marginVertical: 6 }} />
              <Text>1 month</Text>
            </View>
            <View>
              <Text style={{ color: 'BLUE', marginTop: 10, marginLeft: 10, fontSize: 16 }}>Active</Text>
              <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16 }}>21 Aug 2020 - 21 Sep 2020</Text>
              <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 14 }}>Previous subscriptions: 0</Text>
            </View>
          </View>
          <Text style={{ color: 'gray', fontSize: 16, marginTop: 8 }}>Valid for 30 more days</Text>
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

}
export default MonitoringPatientDetails