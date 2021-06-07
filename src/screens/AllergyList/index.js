import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text, FlatList
} from 'react-native'
import { Header } from 'react-native-elements'
import { Icon } from 'native-base'
import moment from 'moment'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'
import localizedStrings from '../../Helper/LocalisedString'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgPlus from '../../../assets/images/plus.png'
import imgDownArrow from '../../../assets/images/downArrow.png'
import Color from '../../Helper/Color'

const allergies = [
  { name: `${localizedStrings.allergiesList.latexAllergy}`, date: 'Diagnosed on 01 Jan 2020', status: 'Dust' },
  { name: `${localizedStrings.allergiesList.cough}`, date: 'Diagnosed on 01 Mar 2020', status: 'Cold' }
]

class AllergyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Color.WHITE }}>
        {this.renderHeader()}
        {this.renderAllergyList()}
      </View>
    );
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
      <Text style={styles.headerText}>{localizedStrings.allergiesList.allergies}</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }}>
        <Image source={imgPlus} style={styles.btnMenu} />
      </TouchableOpacity>
    )
  }

  renderAllergyList() {
    return (
      <FlatList
        data={allergies}
        renderItem={this.renderListItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => {
          return (<View style={{ marginHorizontal: 0, height: 0.5, backgroundColor: Color.LIGHT_GREY }} />)
        }}
      />
    )
  }

  renderListItem = ({ item, index }) => {
    return (
      <View style={{ marginHorizontal: 20, flexDirection: 'row', paddingVertical: 10, alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, color: Color.BLUE, fontWeight: '600' }}>{item.name}</Text>
          <Text style={{ fontSize: 16, color: Color.GREY, fontWeight: '300', marginVertical: 8 }}>{item.date}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, color: Color.GREY, fontWeight: '300' }}>Triggered By:</Text>
            <Text style={{ fontSize: 16, color: Color.GREY, fontWeight: '600', marginLeft: 8 }}>{item.status}</Text>
          </View>
        </View>
        <Icon name="chevron-thin-right" type='Entypo' style={{ fontSize: 18, color: Color.LIGHT_GREY }} />
      </View>
    )
  }
}

export default AllergyList;
