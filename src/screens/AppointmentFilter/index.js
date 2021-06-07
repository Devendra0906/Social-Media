// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  TextInput, ScrollView, SafeAreaView
} from 'react-native'
import SimplePicker from 'react-native-simple-picker'
import { Header } from 'react-native-elements'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'
import localizedStrings from '../../Helper/LocalisedString'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgDownArrow from '../../../assets/images/downArrow.png'
import imgSearch from '../../../assets/images/search.png'
import Color from '../../Helper/Color'

const appointmentTypeOptions = [`${localizedStrings.appointmentFilter.all}`, `${localizedStrings.appointmentFilter.video}`, `${localizedStrings.appointmentFilter.clinic}`]
const practiceOptions = [`${localizedStrings.appointmentFilter.allPracticeLocation}`, 'Patel Darshit']
const departmentOptions = [`${localizedStrings.appointmentFilter.allDepartment}`]
const serviceTypeOptions = [`${localizedStrings.appointmentFilter.allServices}`, `${localizedStrings.appointmentFilter.VideoCons}`]

const STATUS = [
  { name: `${localizedStrings.appointmentFilter.all}`, color: 'rgb(162,163,164)', isSelected: true },
  { name: `${localizedStrings.appointmentFilter.confirmed}`, color: 'rgb(103,246,137)', isSelected: false },
  { name: `${localizedStrings.appointmentFilter.newOrReschedule}`, color: 'rgb(255,166,0)', isSelected: false },
  { name: `${localizedStrings.appointmentFilter.cancelled}`, color: 'rgb(255,40,0)', isSelected: false },
  { name: `${localizedStrings.appointmentFilter.concluded}`, color: 'rgb(171,194,225)', isSelected: false },
]

class AppointmentFilter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      appointmentType: `${localizedStrings.appointmentFilter.all}`,
      practiceLocation: `${localizedStrings.appointmentFilter.allPracticeLocation}`,
      departmentLocation: `${localizedStrings.appointmentFilter.allDepartment}`,
      serviceType: `${localizedStrings.appointmentFilter.allServices}`,
      appointStatus: [],
      appointmentTypeOptions: [],
      practiceOptions: [],
      departmentOptions: [],
      serviceTypeOptions: [],
    }
  }

  componentDidMount() {
    this.setState({
      appointStatus: [
        { name: `${localizedStrings.appointmentFilter.all}`, color: 'rgb(162,163,164)', isSelected: true },
        { name: `${localizedStrings.appointmentFilter.confirmed}`, color: 'rgb(103,246,137)', isSelected: false },
        { name: `${localizedStrings.appointmentFilter.newOrReschedule}`, color: 'rgb(255,166,0)', isSelected: false },
        { name: `${localizedStrings.appointmentFilter.cancelled}`, color: 'rgb(255,40,0)', isSelected: false },
        { name: `${localizedStrings.appointmentFilter.concluded}`, color: 'rgb(171,194,225)', isSelected: false },
      ],
      appointmentTypeOptions: appointmentTypeOptions,
      practiceOptions: practiceOptions,
      departmentOptions: departmentOptions,
      serviceTypeOptions: serviceTypeOptions
    })
  }


  render() {
    return this.renderMainView()
  }

  keyExtractor = (item, index) => index.toString()

  _onPressServiceSelection = (item) => {
    let tempArr = STATUS

    tempArr.forEach((ele) => {
      if (ele.name == item.name) {
        ele.isSelected = true
      } else {
        ele.isSelected = false
      }
    })
    this.setState({ appointStatus: tempArr })
  }

  renderMainView = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}

        <View style={{ flex: 1, justifyContent: 'space-between', }}>
          <ScrollView style={{ flex: 1 }}>
            {this.renderAppointmentType()}
            {this.renderPracticeLocation()}
            {this.renderDepartment()}
            {this.renderHealthcareProvider()}
            {this.renderService()}
            {this.renderAppointmentStatus()}
          </ScrollView>
          {this.renderBottomView()}

        </View>

        <SimplePicker
          ref={'picker'}
          options={this.state.appointmentTypeOptions}
          onSubmit={(option) => {
            this.setState({ appointmentType: option })
          }}
        />
        <SimplePicker
          ref={'practicePicker'}
          options={this.state.practiceOptions}
          onSubmit={(option) => {
            this.setState({ practiceLocation: option })
          }}
        />
        <SimplePicker
          ref={'departmentPicker'}
          options={this.state.departmentOptions}
          onSubmit={(option) => {
            this.setState({ departmentLocation: option })
          }}
        />
        <SimplePicker
          ref={'servicePicker'}
          options={this.state.serviceTypeOptions}
          onSubmit={(option) => {
            this.setState({ serviceType: option })
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
      <Text style={styles.headerText}>{localizedStrings.appointmentFilter.appointmentFilter}</Text>
    )
  }

  renderAppointmentType = () => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.instructionText}>{localizedStrings.appointmentFilter.clinicSummary}</Text>
        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }} onPress={() => this.refs.picker.show()}>
          <TextInput
            value={this.state.appointmentType}
            style={[styles.textInput, { flex: 1, paddingRight: 22 }]}
            editable={false}
            pointerEvents='none'
          />
          <Image source={imgDownArrow} style={styles.downArrow} />
        </TouchableOpacity>
      </View>
    )
  }

  renderPracticeLocation = () => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.instructionText}>{localizedStrings.appointmentFilter.practiceLocation}</Text>
        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }} onPress={() => this.refs.practicePicker.show()}>
          <TextInput
            value={this.state.practiceLocation}
            style={[styles.textInput, { flex: 1, paddingRight: 22 }]}
            editable={false}
            pointerEvents='none'
          />
          <Image source={imgDownArrow} style={styles.downArrow} />
        </TouchableOpacity>
      </View>
    )
  }

  renderDepartment = () => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.instructionText}>{localizedStrings.appointmentFilter.department}</Text>
        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }} onPress={() => this.refs.departmentPicker.show()}>
          <TextInput
            value={this.state.departmentLocation}
            style={[styles.textInput, { flex: 1, paddingRight: 22 }]}
            editable={false}
            pointerEvents='none'
          />
          <Image source={imgDownArrow} style={styles.downArrow} />
        </TouchableOpacity>
      </View>
    )
  }

  renderHealthcareProvider = () => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.instructionText}>{localizedStrings.appointmentFilter.healthcareProvider}</Text>
        <TouchableOpacity style={{ marginTop: 12, flexDirection: 'row' }}>
          <Image source={imgSearch} style={{ height: 20, width: 20, tintColor: 'gray', marginRight: 8 }} />
          <Text style={{ fontSize: 16 }}>Dr. Patel Darshit</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderService = () => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.instructionText}>{localizedStrings.appointmentFilter.service}</Text>
        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }} onPress={() => this.refs.servicePicker.show()}>
          <TextInput
            value={this.state.serviceType}
            style={[styles.textInput, { flex: 1, paddingRight: 22 }]}
            editable={false}
            pointerEvents='none'
          />
          <Image source={imgDownArrow} style={styles.downArrow} />
        </TouchableOpacity>
      </View>
    )
  }

  renderAppointmentStatus = () => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.instructionText}>{localizedStrings.appointmentFilter.appointmentStatus}</Text>
        {this.state.appointStatus.map((item) => {
          return (
            <View style={styles.optionsCell}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: item.color, }} />
                <Text style={{ fontSize: 16, marginLeft: 12 }}>{item.name}</Text>
              </View>
              <TouchableOpacity style={styles.selectionContainer} onPress={() => this._onPressServiceSelection(item)}>
                <View style={{ backgroundColor: item.isSelected ? item.color : 'transparent', flex: 1, borderRadius: 10 }} />
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    )
  }

  renderBottomView = () => {
    return (
      <SafeAreaView>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.cancelBtn}>
            <Text style={{ color: Color.BLACK, fontSize: 16, fontWeight: '500' }}>{localizedStrings.appointmentFilter.clear}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.applyBtn}>
            <Text style={{ color: Color.WHITE, fontSize: 16, fontWeight: '500' }}>{localizedStrings.appointmentFilter.apply}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

export default AppointmentFilter