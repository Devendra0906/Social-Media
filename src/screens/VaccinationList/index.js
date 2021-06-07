import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  FlatList
} from 'react-native'
import { Header } from 'react-native-elements'
import { Icon } from 'native-base'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'
import localizedStrings from '../../Helper/LocalisedString'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgPlus from '../../../assets/images/plus.png'
import Color from '../../Helper/Color'

const vaccinationList = [
  { hospitanName: 'Hospital A', vaccinatedOn: '7 May 2020', name: 'Help A' },
  { hospitanName: 'Hospital B', vaccinatedOn: '25 Aar 2020', name: 'Help B' }
]

class VaccinationList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Color.WHITE }}>
        {this.renderHeader()}
        {this.renderVaccinationList()}
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
      <Text style={styles.headerText}>{localizedStrings.vaccinationList.vaccinationList}</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }} onPress={() => this.props.navigation.navigate("AddVaccination")}>
        <Image source={imgPlus} style={styles.btnMenu} />
      </TouchableOpacity>
    )
  }

  renderVaccinationList() {
    return (
      <FlatList
        data={vaccinationList}
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
          <Text style={{ fontSize: 18, color: Color.BLUE, fontWeight: '600' }}>{item.hospitanName}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, color: Color.GREY, fontWeight: '300' }}>{localizedStrings.vaccinationList.vaccinatedOn}</Text>
            <Text style={{ fontSize: 16, color: Color.GREY, fontWeight: '600', marginLeft: 8 }}>{item.vaccinatedOn}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, color: Color.GREY, fontWeight: '300' }}>{localizedStrings.vaccinationList.vaccineName}</Text>
            <Text style={{ fontSize: 16, color: Color.GREY, fontWeight: '600', marginLeft: 8 }}>{item.name}</Text>
          </View>
        </View>
        <Icon name="chevron-thin-right" type='Entypo' style={{ fontSize: 18, color: Color.LIGHT_GREY }} />
      </View>
    )
  }
}

export default VaccinationList;
