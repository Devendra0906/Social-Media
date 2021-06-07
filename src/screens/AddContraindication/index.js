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

class AddContraindication extends Component {
  render() {
    return this.renderMainView()
  }

  renderMainView = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={{ flex: 1 }}>
          {this.renderDescription()}
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
      <Text style={styles.headerText}>{localizedStrings.addContraindication.addContraindication}</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }}>
        <Text style={styles.headerText}>{localizedStrings.addContraindication.save}</Text>
      </TouchableOpacity>
    )
  }

  renderDescription = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.addContraindication.description}</Text>
        <TextInput
          placeholder={localizedStrings.addContraindication.descPlaceholder}
          style={styles.textInput}
          multiline
        />
      </View>
    )
  }
}

export default AddContraindication
