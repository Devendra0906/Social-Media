// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  FlatList
} from 'react-native'
import Switch from 'react-native-switch-pro';
import { Header } from 'react-native-elements'
import { Icon } from 'native-base'
import ActionButton from 'react-native-action-button'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'
import localizedStrings from '../../Helper/LocalisedString'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgCalendar from '../../../assets/images/calendar.png'
import profileImg from "../../../assets/images/batman.jpg"
import Color from '../../Helper/Color'
import EmptyAddReport from '../../components/EmptyAddReports';

class HealtProfile extends Component {
  constructor(props) {
    super(props)

    let selectedScreen = props.route.params.selectedScreen

    const data = [
      { name: `${localizedStrings.healthProfile.healthConditions}`, description: 'None Specified' },
      { name: `${localizedStrings.healthProfile.medications}`, description: 'Carbimazol (5 mg)' },
      { name: `${localizedStrings.healthProfile.allergies}`, description: 'None Specified' },
      { name: `${localizedStrings.healthProfile.socialHistory}`, description: 'None Specified' },
      { name: `${localizedStrings.healthProfile.familyMedicalHistory}`, description: 'None Specified' },
      { name: `${localizedStrings.healthProfile.contraindications}`, description: 'None Specified' },
      { name: `${localizedStrings.healthProfile.hospitalizations}`, description: 'None Specified' },
      { name: `${localizedStrings.healthProfile.surgeryProcedure}`, description: 'None Specified' },
      { name: `${localizedStrings.healthProfile.vaccinations}`, description: 'None Specified' },
    ]

    const trackrData = [
      { name: `${localizedStrings.healthProfile.bloodPressure}`, icon: require('../../../assets/images/blood-pressure.png'), screen: 'AddBloodPressure' },
      { name: `${localizedStrings.healthProfile.bloodSuger}`, icon: require('../../../assets/images/blood-sugar.png'), screen: 'BloodSugar' },
      { name: `${localizedStrings.healthProfile.cholesterol}`, icon: require('../../../assets/images/cholestrole.png'), screen: 'Cholesterol' },
      { name: `${localizedStrings.healthProfile.exercise}`, icon: require('../../../assets/images/excersise.png'), screen: 'Exercise' },
      { name: `${localizedStrings.healthProfile.food}`, icon: require('../../../assets/images/food.png'), screen: 'Food' },
      { name: `${localizedStrings.healthProfile.height}`, icon: require('../../../assets/images/height.png'), screen: 'Height' },
      { name: `${localizedStrings.healthProfile.jointStiffness}`, icon: require('../../../assets/images/joint-stiffness.png'), screen: 'JointStiffness' },
      { name: `${localizedStrings.healthProfile.oxygenLevel}`, icon: require('../../../assets/images/oxygen.png'), screen: 'OxygenLevel' },
      { name: `${localizedStrings.healthProfile.pain}`, icon: require('../../../assets/images/waist-measurement.png'), screen: 'Pain' },
      { name: `${localizedStrings.healthProfile.pulse}`, icon: require('../../../assets/images/pulse.png'), screen: 'Pulse' },
      { name: `${localizedStrings.healthProfile.respiratoryRates}`, icon: require('../../../assets/images/respiratory-rate.png'), screen: 'RespiratoryRates' },
      { name: `${localizedStrings.healthProfile.sleep}`, icon: require('../../../assets/images/sleep.png'), screen: 'Sleep' },
      { name: `${localizedStrings.healthProfile.temperature}`, icon: require('../../../assets/images/temperature.png'), screen: 'Temperature' },
      { name: `${localizedStrings.healthProfile.waistMeasurement}`, icon: require('../../../assets/images/waist-measurement.png'), screen: 'WaistMeasurement' },
      { name: `${localizedStrings.healthProfile.weight}`, icon: require('../../../assets/images/weight.png'), screen: 'Weight' }
    ]

    this.state = {
      selectedTabName: selectedScreen ? selectedScreen : `${localizedStrings.healthProfile.profile}`,
      data: data,
      trackrData: trackrData
    }
  }

  componentDidMount() {

  }

  onPressUpdateTracker = (item) => {
    if (item.screen)
      this.props.navigation.navigate(item.screen)
    // if (index == 0) {
    //   this.props.navigation.navigate('AddBloodPressure')
    // } else if (index == 1) {
    //   this.props.navigation.navigate('BloodSugar')
    // } else if (index == 2) {
    //   this.props.navigation.navigate('Cholesterol')
    // }
  }

  onPressListItem = (item, index) => {
    console.log(item)
    if (index == 0) {
      this.props.navigation.navigate('HealthConditionList', { item: item })
    } else if (index == 1) {
      this.props.navigation.navigate('MedicationsList', { item: item })
    } else if (index == 2) {
      this.props.navigation.navigate('AllergyList', { item: item })
    } else if (index == 4) {
      this.props.navigation.navigate('FamilyMedicalHistoryList', { item: item })
    } else if (index == 5) {
      this.props.navigation.navigate('ContraindicationList', { item: item })
    } else if (index == 6) {
      this.props.navigation.navigate('HospitalizationList', { item: item })
    } else if (index == 7) {
      this.props.navigation.navigate('SurgeryList', { item: item })
    } else if (index == 8) {
      this.props.navigation.navigate('VaccinationList', { item: item })
    } else if (index == 9) {
      this.props.navigation.navigate('VaccinationList', { item: item })
    } else {
      this.props.navigation.navigate('AddOptionsHealthProfile', { item: item })
    }
  }

  render() {
    return this.renderMainVIew()
  }

  keyExtractor = (item, index) => index.toString()

  _onPressApprovalStatus = (name) => {
    this.setState({ selectedTabName: name })
  }

  renderMainVIew = () => {
    const { selectedTabName } = this.state
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderPatientDetails()}
        {this.renderApprovalStatusDate()}
        {selectedTabName == localizedStrings.healthProfile.profile && this.renderProfileList()}
        {selectedTabName == localizedStrings.healthProfile.trackers && this.renderTrackerList()}
        {selectedTabName == localizedStrings.healthProfile.reports && this.renderEmptyAddReport()}
        {this.renderBottomButton()}
      </View>
    )
  }

  renderHeader = () => {
    return (
      <Header
        containerStyle={{ backgroundColor: Color.WHITE, marginTop: headerMarginTop, borderBottomWidth: 0 }}
        leftComponent={this.renderLeftHeader()}
        centerComponent={this.renderCenterHeader()}
      // rightComponent={this.renderRightHeader()}
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
      <Text style={styles.headerText}>{localizedStrings.healthProfile.healthProfile}</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }}>
        <Image source={imgCalendar} style={styles.btnMenu} resizeMode='contain' />
      </TouchableOpacity>
    )
  }

  renderPatientDetails = () => {
    return (
      <View style={{ flexDirection: 'row', marginTop: 15, paddingHorizontal: 15, alignItems: 'center', backgroundColor: 'rgb(59,63,76)' }}>
        <Image source={profileImg} style={{ height: 70, width: 70, borderRadius: 35 }} />
        <View style={{ marginHorizontal: 8, flex: 1 }}>
          <Text style={{ color: Color.WHITE }}>Josefine heinz</Text>
          <Text style={{ color: Color.WHITE }}>32 Years, Female, AB+ve</Text>
          <Text style={{ color: Color.WHITE }}>Ht: 160.00cm, Wt: 65.00kg</Text>
          <Text style={{ color: Color.WHITE }}>BMI: 25.39</Text>
        </View>
        <View style={{ paddingTop: 5 }}>
          <View style={{ alignItems: 'flex-end', }}>
            <Switch style={{ marginTop: 8 }} />
            <Text style={{ color: Color.WHITE, marginVertical: 5 }}>{localizedStrings.healthProfile.enabled}</Text>
          </View>
          <TouchableOpacity style={{ marginBottom: 8 }}>
            <Icon name={'edit-2'} type='Feather' style={[{ fontSize: 20, color: Color.WHITE, alignSelf: 'flex-end' }]} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderApprovalStatusDate = () => {
    const { selectedTabName } = this.state
    return (
      <View style={styles.subContainer}>
        <View style={styles.headerbtnContainer}>
          <TouchableOpacity style={[
            styles.activateBtn,
            {
              backgroundColor: selectedTabName == `${localizedStrings.healthProfile.profile}` ? Color.WHITE : Color.OFF_WHITE,
            }]} onPress={() => this._onPressApprovalStatus(`${localizedStrings.healthProfile.profile}`)}>
            <Text style={{ fontSize: 14, color: Color.BLACK }}>{localizedStrings.healthProfile.profile}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.activateBtn, { backgroundColor: selectedTabName == `${localizedStrings.healthProfile.trackers}` ? Color.WHITE : Color.OFF_WHITE, }]} onPress={() => this._onPressApprovalStatus(`${localizedStrings.healthProfile.trackers}`)}>
            <Text style={{ fontSize: 14, color: Color.BLACK }}>{localizedStrings.healthProfile.trackers}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[
            styles.activateBtn,
            {
              backgroundColor: selectedTabName == `${localizedStrings.healthProfile.reports}` ? Color.WHITE : Color.OFF_WHITE,
            }]} onPress={() => this._onPressApprovalStatus(`${localizedStrings.healthProfile.reports}`)}>
            <Text style={{ fontSize: 14, color: Color.BLACK }}>{localizedStrings.healthProfile.reports}</Text>
          </TouchableOpacity>
        </View>
      </View >
    )
  }

  renderProfileList = () => {
    return (
      <FlatList
        style={styles.flatListStyle}
        data={this.state.data}
        contentContainerStyle={{ paddingBottom: 25, paddingTop: 15 }}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderListCell}
      />
    )
  }

  renderListCell = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.cellContainer} activeOpacity={0.5} onPress={() => this.onPressListItem(item, index)}>
        <View style={{ flex: 1 }}>
          <Text style={styles.nameStyle}>{item.name}</Text>
          <Text style={styles.descStyle}>{item.description}</Text>
        </View>
        <Icon name={'chevron-right'} type='Feather' style={styles.rightArrow} />
      </TouchableOpacity>
    )
  }

  renderTrackerList = () => {
    return (
      <FlatList
        style={styles.flatListStyle}
        data={this.state.trackrData}
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
              {localizedStrings.healthProfile.noData}
            </Text>
          </View>
          <TouchableOpacity onPress={() => this.onPressUpdateTracker(item)}>
            <Text style={{ color: Color.BLUE, fontSize: 16, fontWeight: '300', alignSelf: 'flex-end' }}>
              {localizedStrings.healthProfile.updateTracker}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderEmptyAddReport() {
    return (
      <View style={{ marginTop: 50 }}>
        <EmptyAddReport />
      </View>
    )
  }

  renderBottomButton = () => {
    return (
      <ActionButton size={50} buttonColor={Color.BLUE}>
        <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
          <Icon name="md-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => { }}>
          <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => { }}>
          <Icon name="md-done-all" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    )
  }
}

export default HealtProfile
