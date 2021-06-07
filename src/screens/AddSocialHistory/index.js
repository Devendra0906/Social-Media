// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  TextInput, ScrollView
} from 'react-native'
import { Header } from 'react-native-elements'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'
import localizedStrings from '../../Helper/LocalisedString'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgDownArrow from '../../../assets/images/downArrow.png'
import Color from '../../Helper/Color'

class AddSocialHistory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstDiagnosedDate: new Date(),
      showDatePicker: false,
      isSmoking: true,
      isAlcohol: true,
    }
  }

  render() {
    return this.renderMainView()
  }

  _onPressSmoking = (type) => {
    this.setState({ isSmoking: type == 'Yes' ? true : false })
  }

  _onPressAlcohol = (type) => {
    this.setState({ isAlcohol: type == 'Yes' ? true : false })
  }

  renderMainView = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={{ flex: 1 }}>
          {this.renderNameOfOccupation()}
          {this.renderDetailView()}
          {this.renderBirthplace()}
          {this.renderPersonalInfo()}
          {this.renderReligion()}
          {this.renderGeneralDiet()}
          {this.renderSmoking()}
          {this.renderAlcoholConsumption()}
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
      <Text style={styles.headerText}>Add Social History</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }}>
        <Text style={styles.headerText}>Save</Text>
      </TouchableOpacity>
    )
  }

  renderNameOfOccupation = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>Name of Occupation</Text>
        <TextInput
          placeholder={'e.g. Scientist, Professor'}
          style={styles.textInput}
        />
      </View>
    )
  }

  renderDetailView = () => {
    return (
      <View style={{ flexDirection: 'row', marginTop: 15, paddingHorizontal: 20 }}>
        <View style={{ alignItems: 'flex-start', flex: 1 }}>
          <Text style={styles.indicationText}>Education</Text>
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <TextInput
              placeholder='BTech'
              style={[styles.textInput, { paddingRight: 20 }]}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.indicationText}>Year</Text>
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <TextInput
              placeholder='2010'
              style={[styles.textInput, { paddingRight: 20 }]}
            />
            <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: -15, alignSelf: 'center', marginTop: 0 }} />
          </TouchableOpacity>
        </View>
      </View >
    )
  }

  renderBirthplace = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>Birthplace</Text>
        <TextInput
          placeholder={'e.g. Boston, New Delhi'}
          style={styles.textInput}
        />
      </View>
    )
  }

  renderPersonalInfo = () => {
    return (
      <View style={{ flexDirection: 'row', marginTop: 15, paddingHorizontal: 20 }}>
        <View style={{ alignItems: 'flex-start', flex: 1 }}>
          <Text style={styles.indicationText}>Merital Status</Text>
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <TextInput
              placeholder='Engaged'
              style={[styles.textInput, { paddingRight: 20 }]}
            />
            <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: -15, alignSelf: 'center', marginTop: 0 }} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.indicationText}>Children</Text>
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <TextInput
              placeholder='2010'
              style={[styles.textInput, { paddingRight: 20 }]}
              keyboardType='numeric'
            />
            {/* <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: -15, alignSelf: 'center', marginTop: 0 }} /> */}
          </TouchableOpacity>
        </View>
      </View >
    )
  }

  renderReligion = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>Religion</Text>
        <TextInput
          placeholder={'Religion'}
          style={styles.textInput}
        />
      </View>
    )
  }

  renderGeneralDiet = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>General Diet</Text>
        <TextInput
          placeholder={'Enter your preferred cuisiness and styles of...'}
          style={styles.textInput}
        />
      </View>
    )
  }

  renderSmoking = () => {
    const { isSmoking } = this.state
    return (
      <View style={{ flexDirection: 'row', marginTop: 15, paddingHorizontal: 20 }}>
        <View style={{ alignItems: 'flex-start', flex: 1 }}>
          <Text style={styles.indicationText}>Smoking</Text>
          <View style={styles.subContainer}>
            <View style={styles.headerbtnContainer}>
              <TouchableOpacity style={[
                styles.activateBtn,
                {
                  backgroundColor: isSmoking ? Color.WHITE : 'rgb(238,238,238)',
                }]} onPress={() => this._onPressSmoking('Yes')}>
                <Text style={{ fontSize: 14, color: Color.BLACK }}>Yes</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[
                styles.activateBtn,
                {
                  backgroundColor: !isSmoking ? Color.WHITE : 'rgb(238,238,238)',
                }]} onPress={() => this._onPressSmoking('No')}>
                <Text style={{ fontSize: 14, color: Color.BLACK }}>No</Text>
              </TouchableOpacity>
            </View>
          </View >
        </View>
        <View style={{ flex: 1, marginLeft: 10, alignSelf: 'center' }}>
          <Text style={styles.indicationText}></Text>
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <TextInput
              placeholder='Occasionally'
              style={[styles.textInput, { paddingRight: 20 }]}
            />
          </TouchableOpacity>
        </View>
      </View >
    )
  }

  renderAlcoholConsumption = () => {
    const { isAlcohol } = this.state
    return (
      <View style={{ flexDirection: 'row', marginTop: 15, paddingHorizontal: 20 }}>
        <View style={{ alignItems: 'flex-start', flex: 1 }}>
          <Text style={styles.indicationText}>Smoking</Text>
          <View style={styles.subContainer}>
            <View style={styles.headerbtnContainer}>
              <TouchableOpacity style={[
                styles.activateBtn,
                {
                  backgroundColor: isAlcohol ? Color.WHITE : 'rgb(238,238,238)',
                }]} onPress={() => this._onPressAlcohol('Yes')}>
                <Text style={{ fontSize: 14, color: Color.BLACK }}>Yes</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[
                styles.activateBtn,
                {
                  backgroundColor: !isAlcohol ? Color.WHITE : 'rgb(238,238,238)',
                }]} onPress={() => this._onPressAlcohol('No')}>
                <Text style={{ fontSize: 14, color: Color.BLACK }}>No</Text>
              </TouchableOpacity>
            </View>
          </View >
        </View>
        <View style={{ flex: 1, marginLeft: 10, alignSelf: 'center' }}>
          <Text style={styles.indicationText}></Text>
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <TextInput
              placeholder='Occasionally'
              style={[styles.textInput, { paddingRight: 20 }]}
            />
          </TouchableOpacity>
        </View>
      </View >
    )
  }
}

export default AddSocialHistory
