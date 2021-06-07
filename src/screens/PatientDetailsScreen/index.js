// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  FlatList
} from 'react-native'
import Switch from 'react-native-switch-pro';
import { Header } from 'react-native-elements'
import { Icon } from 'native-base'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'
import localizedStrings from '../../Helper/LocalisedString'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgCalendar from '../../../assets/images/calendar.png'
import profileImg from "../../../assets/images/batman.jpg"
import Color from '../../Helper/Color'

class PatientDetailsScreen extends Component {

  constructor(props) {
    super(props)

    const profileTileData = [
      {
        color: 'rgb(0,165,239)',
        title: `${localizedStrings.patientDetailsScreen.health}`,
        type: `${localizedStrings.patientDetailsScreen.profile}`,
        image: require('../../../assets/images/profileCard.png')
      },
      {
        color: 'rgb(255,99,105)',
        title: `${localizedStrings.patientDetailsScreen.health}`,
        type: `${localizedStrings.patientDetailsScreen.trackers}`,
        image: require('../../../assets/images/healthTracker.png')
      },
      {
        color: 'rgb(185,100,236)',
        title: `${localizedStrings.patientDetailsScreen.medical}`,
        type: `${localizedStrings.patientDetailsScreen.reports}`,
        image: require('../../../assets/images/reports.png')
      },
      {
        color: 'rgb(0,208,179)',
        title: `${localizedStrings.patientDetailsScreen.health}`,
        type: `${localizedStrings.patientDetailsScreen.journals}`,
        image: require('../../../assets/images/journal.png')
      },
      {
        color: 'rgb(253,151,0)',
        title: `${localizedStrings.patientDetailsScreen.consultation}`,
        type: `${localizedStrings.patientDetailsScreen.notes}`,
        image: require('../../../assets/images/stethoscope.png')
      },
      {
        color: 'rgb(189,205,21)',
        title: `${localizedStrings.patientDetailsScreen.patient}`,
        type: `${localizedStrings.patientDetailsScreen.payments}`,
        image: require('../../../assets/images/payment.png')
      },
    ]

    this.state = {
      profileTileData: profileTileData
    }
  }

  componentDidMount() {

  }


  render() {
    return this.renderMainVIew()
  }

  keyExtractor = (item, index) => index.toString()

  renderMainVIew = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderPatientDetails()}
        {this.renderFlatList()}
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
      <Text style={styles.headerText}>{localizedStrings.patientDetailsScreen.patientDetails}</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }}>
        <Image source={imgCalendar} style={styles.btnMenu} resizeMode='contain' />
      </TouchableOpacity>
    )
  }

  onPressListItem = (index) => {
    if (index == 0) {
      this.props.navigation.navigate("HealthProfile", { selectedScreen: localizedStrings.healthProfile.profile })
    } else if (index == 1) {
      this.props.navigation.navigate("HealthProfile", { selectedScreen: localizedStrings.healthProfile.trackers })
    } else if (index == 2) {
      this.props.navigation.navigate("HealthProfile", { selectedScreen: localizedStrings.healthProfile.reports })
    } else if (index == 4) {
      this.props.navigation.navigate("ConsultationNotes")
    }
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
            <Text style={{ color: Color.WHITE, marginVertical: 5 }}>{localizedStrings.patientDetailsScreen.enabled}</Text>
          </View>
          <TouchableOpacity style={{ marginBottom: 8 }}>
            <Icon name={'edit-2'} type='Feather' style={[{ fontSize: 20, color: Color.WHITE, alignSelf: 'flex-end' }]} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderFlatList = () => {
    return (
      <FlatList
        style={styles.flatListStyle}
        data={this.state.profileTileData}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 25, paddingTop: 15 }}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderListCell}
      />
    )
  }

  renderListCell = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.cellContainer}
        onPress={() => this.onPressListItem(index)}>
        <View style={{ padding: 15, backgroundColor: `${item.color}`, borderRadius: 80 }}>
          <Image source={item.image} style={{ height: 35, width: 35, tintColor: Color.WHITE }} />
        </View>
        <View style={{ marginHorizontal: 8, justifyContent: 'center', }}>
          <Text style={{ fontSize: 14, color: 'gray' }}>{item.title}</Text>
          <Text style={{ fontSize: 17, color: `${item.color}`, marginTop: 5 }}>{item.type}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default PatientDetailsScreen
