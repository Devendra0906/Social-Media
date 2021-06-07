// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  TextInput, FlatList, Picker
} from 'react-native'
import ActionButton from 'react-native-action-button'
import { Header } from 'react-native-elements'
import { Icon } from 'native-base'
import SimplePicker from 'react-native-simple-picker'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'
import localizedStrings from '../../Helper/LocalisedString'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgPlus from '../../../assets/images/plus.png'
import imgHeart from '../../../assets/images/heart.png'
import imgDownArrow from '../../../assets/images/downArrow.png'
import Color from '../../Helper/Color'

let socialHistory = [
  { name: `${localizedStrings.addOptionsHealthProfile.occupation}`, value: 'Engineer' },
  { name: `${localizedStrings.addOptionsHealthProfile.education}`, value: 'BTech' },
  { name: `${localizedStrings.addOptionsHealthProfile.educationYear}`, value: '2016' },
  { name: `${localizedStrings.addOptionsHealthProfile.birthPlace}`, value: 'Mumbai' },
  { name: `${localizedStrings.addOptionsHealthProfile.maritalStatus}`, value: 'Married' },
  { name: `${localizedStrings.addOptionsHealthProfile.children}`, value: '1 son' },
  { name: `${localizedStrings.addOptionsHealthProfile.religion}`, value: 'Hinduism' },
  { name: `${localizedStrings.addOptionsHealthProfile.generalDiet}`, value: 'Vegetarian' },
  { name: `${localizedStrings.addOptionsHealthProfile.sexualOrientation}`, value: 'Heterosexual' },
  { name: `${localizedStrings.addOptionsHealthProfile.smoking}`, value: 'No None Specified' },
  { name: `${localizedStrings.addOptionsHealthProfile.alcoholConsumption}`, value: 'No None Specified' },
  { name: `${localizedStrings.addOptionsHealthProfile.substanceUse}`, value: 'NA' },
  { name: `${localizedStrings.addOptionsHealthProfile.exercise}`, value: 'Normal' },
  { name: `${localizedStrings.addOptionsHealthProfile.stressFactor}`, value: 'Stressed' },
  { name: `${localizedStrings.addOptionsHealthProfile.languageSpoken}`, value: 'Gujarati' },
  { name: `${localizedStrings.addOptionsHealthProfile.secondaryLanguageSpoken}`, value: 'English' },
]

const options = [`${localizedStrings.medicationsList.allMedications}`, `${localizedStrings.medicationsList.ongoingMedications}`, `${localizedStrings.medicationsList.pastMedications}`]

class AddOptionshealthProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: '',
      headerName: '',
      introText: '',
      data: [],
      selectedOption: `${localizedStrings.medicationsList.allMedications}`,
      socialHistory: []
    }
  }

  componentDidMount() {
    let hName = this.props.route.params.item.name

    this.setState({ socialHistory: socialHistory }, () => {
      if (hName == `${localizedStrings.healthProfile.healthConditions}`) {
        this.setState({ headerName: hName, introText: `${localizedStrings.addOptionsHealthProfile.hcIntro}` })
      } else if (hName == `${localizedStrings.healthProfile.medications}`) {
        this.setState({ headerName: hName, introText: `${localizedStrings.addOptionsHealthProfile.mediIntro}` })
      } else if (hName == `${localizedStrings.healthProfile.allergies}`) {
        this.setState({ headerName: hName, introText: `${localizedStrings.addOptionsHealthProfile.allergyIntro}` })
      } else if (hName == `${localizedStrings.healthProfile.socialHistory}`) {
        this.setState({ headerName: hName, introText: `${localizedStrings.addOptionsHealthProfile.scIntro}`, data: socialHistory })
      } else if (hName == `${localizedStrings.healthProfile.familyMedicalHistory}`) {
        this.setState({ headerName: hName, introText: `${localizedStrings.addOptionsHealthProfile.familyIntro}` })
      } else if (hName == `${localizedStrings.healthProfile.contraindications}`) {
        this.setState({ headerName: hName, introText: `${localizedStrings.addOptionsHealthProfile.conIntro}` })
      } else if (hName == `${localizedStrings.healthProfile.hospitalizations}`) {
        this.setState({ headerName: hName, introText: `${localizedStrings.addOptionsHealthProfile.hospiIntro}` })
      } else if (hName == `${localizedStrings.healthProfile.surgeryProcedure}`) {
        this.setState({ headerName: hName, introText: `${localizedStrings.addOptionsHealthProfile.surIntro}` })
      } else if (hName == `${localizedStrings.healthProfile.vaccinations}`) {
        this.setState({ headerName: hName, introText: `${localizedStrings.addOptionsHealthProfile.vaccineIntro}` })
      }
    })

  }

  _addNewBtnPressed = () => {
    const { headerName } = this.state
    if (headerName == `${localizedStrings.healthProfile.healthConditions}`) {
      this.props.navigation.navigate('AddHealthCondition')
    } else if (headerName == `${localizedStrings.healthProfile.medications}`) {
      this.refs.picker.show()
    } else if (headerName == `${localizedStrings.healthProfile.allergies}`) {
      this.props.navigation.navigate('AddAllergy')
    } else if (headerName == `${localizedStrings.healthProfile.socialHistory}`) {
      this.props.navigation.navigate('AddSocialHistory')
    } else if (headerName == `${localizedStrings.healthProfile.familyMedicalHistory}`) {
      this.props.navigation.navigate('AddFamilyMedicalHistory')
    } else if (headerName == `${localizedStrings.healthProfile.contraindications}`) {
      this.props.navigation.navigate('AddContraindication')
    } else if (headerName == `${localizedStrings.healthProfile.hospitalizations}`) {
      this.props.navigation.navigate('AddHospitalization')
    } else if (headerName == `${localizedStrings.healthProfile.surgeryProcedure}`) {
      this.props.navigation.navigate('AddSurguryprocedure')
    } else if (headerName == `${localizedStrings.healthProfile.vaccinations}`) {
      this.props.navigation.navigate('AddVaccination')
    }
  }


  render() {
    return this.renderMainView()
  }

  renderMainView = () => {
    const { headerName, data } = this.state
    return (
      <View style={{ flex: 1, justifyContent: 'space-between', }}>
        <View style={styles.container}>
          {this.renderHeader()}
          {headerName == 'Health Conditions' && this.renderSubHeader()}
          {headerName == 'Medications' && this.renderSubHeader()}
          {data.length < 1 && this.renderImage()}
          {data.length < 1 && this.renderIntroText()}
          {data.length < 1 && this.renderAddNewButton()}
          {data.length > 0 && this.renderFlatlist()}
          <SimplePicker
            ref={'picker'}
            options={options}
            onSubmit={(option) => {
              this.setState({ selectedOption: option }, () => {
                this.props.navigation.navigate('AddMedicationScreen')
              })
            }}
          />
        </View>
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
      <Text style={styles.headerText}>{this.state.headerName}</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }}>
        <Image source={imgPlus} style={styles.btnMenu} resizeMode='contain' />
      </TouchableOpacity>
    )
  }

  renderSubHeader = () => {
    return (
      <View style={styles.subHeader}>
        <Text style={[styles.headerText, { fontSize: 17, color: 'gray' }]}>{localizedStrings.addOptionsHealthProfile.showing}</Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
          <Text style={[styles.headerText, { fontSize: 17 }]}>All</Text>
          <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: 5, alignSelf: 'center' }} />
        </TouchableOpacity>
      </View>
    )
  }

  renderImage = () => {
    return (
      <Image source={imgHeart} style={styles.mainImage} resizeMode='contain' />
    )
  }

  renderIntroText = () => {
    const { introText } = this.state
    return (
      <Text style={styles.introText}>{introText}</Text>
    )
  }

  renderAddNewButton = () => {
    return (
      <TouchableOpacity style={styles.btnAddNew} onPress={this._addNewBtnPressed}>
        <Text style={{ fontSize: 17, color: '#fff', fontWeight: '600' }}>{localizedStrings.addOptionsHealthProfile.addNew}</Text>
      </TouchableOpacity>
    )
  }

  renderFlatlist = () => {
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
      // <TouchableOpacity style={styles.cellContainer} activeOpacity={0.5} onPress={() => this.props.navigation.navigate('AddOptionsHealthProfile', { item: item })}>
      <View style={styles.cellContainer}>
        <Text style={styles.nameStyle}>{item.name}</Text>
        <TextInput
          style={styles.descStyle}
          placeholder={""}
          value={item.value}
          placeholderTextColor={Color.LIGHT_GREY}
        />
      </View>
      // </TouchableOpacity>
    )
  }

  renderBottomButton = () => {
    return (
      <ActionButton size={50} buttonColor={Color.BLUE} >
        <ActionButton.Item buttonColor='#9b59b6' title={localizedStrings.addOptionsHealthProfile.newTask} onPress={() => console.log("notes tapped!")}>
          <Icon name="md-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#3498db' title={localizedStrings.addOptionsHealthProfile.notifications} onPress={() => { }}>
          <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#1abc9c' title={localizedStrings.addOptionsHealthProfile.allTasks} onPress={() => { }}>
          <Icon name="md-done-all" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    )
  }
}

export default AddOptionshealthProfile
