// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  TextInput, ScrollView
} from 'react-native'
import { Header } from 'react-native-elements'
import SimplePicker from 'react-native-simple-picker'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'
import localizedStrings from '../../Helper/LocalisedString'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgDownArrow from '../../../assets/images/downArrow.png'
import Color from '../../Helper/Color'

const options = [
  `${localizedStrings.addFamilyMedicalHistory.mother}`,
  `${localizedStrings.addFamilyMedicalHistory.father}`,
  `${localizedStrings.addFamilyMedicalHistory.siblings}`,
  `${localizedStrings.addFamilyMedicalHistory.grandPatents}`,
  `${localizedStrings.addFamilyMedicalHistory.children}`,
  `${localizedStrings.addFamilyMedicalHistory.others}`
]

class AddFamilyMedicalHistory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedOption: ''
    }
  }

  render() {
    return this.renderMainView()
  }

  renderMainView = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={{ flex: 1 }}>
          {this.renderRelationShip()}
          {this.renderDescription()}
          <SimplePicker
            ref={'picker'}
            options={options}
            onSubmit={(option) => {
              this.setState({ selectedOption: option })
            }}
          />
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
      <Text style={styles.headerText}>{localizedStrings.addFamilyMedicalHistory.addFamilyMedicalHistory}</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }}>
        <Text style={styles.headerText}>{localizedStrings.addFamilyMedicalHistory.save}</Text>
      </TouchableOpacity>
    )
  }

  renderRelationShip = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.addFamilyMedicalHistory.relationship}</Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }} onPress={() => this.refs.picker.show()}>
          <TextInput
            placeholder={`${localizedStrings.addFamilyMedicalHistory.selectOne}`}
            style={[styles.textInput, { paddingRight: 22, }]}
            editable={false}
            pointerEvents='none'
            value={this.state.selectedOption}
          />
          <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: -15, alignSelf: 'center', marginTop: 0 }} />
        </TouchableOpacity>
      </View>
    )
  }

  renderDescription = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>Notes</Text>
        <TextInput
          placeholder={localizedStrings.addFamilyMedicalHistory.notePlaceholder}
          style={styles.textInput}
          multiline
        />
      </View>
    )
  }
}

export default AddFamilyMedicalHistory
