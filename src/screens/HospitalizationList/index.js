import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  SafeAreaView,
  FlatList
} from 'react-native'
import { Header } from 'react-native-elements'
import { Icon } from 'native-base'
import SimplePicker from 'react-native-simple-picker'
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

const healthConditions = [
  { hospitalName: 'St. Johns', providerName: 'Dr. G P Patel', reason: 'Nothing' },
  { hospitalName: 'Appolo', providerName: 'Dr. A H Shah', reason: 'Nothing' }
]

const options = [`${localizedStrings.hospitalizationList.all}`, `${localizedStrings.hospitalizationList.ongoing}`, `${localizedStrings.hospitalizationList.past}`]

class HospitalizationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "All"
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Color.WHITE }}>
        {this.renderHeader()}
        {this.renderHospitalizationList()}
        <SimplePicker
          ref={'picker'}
          options={options}
          onSubmit={(option) => {
            this.setState({ selectedOption: option })
          }}
        />
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
      <Text style={styles.headerText}>{localizedStrings.hospitalizationList.hospitalization}</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }} onPress={() => this.props.navigation.navigate("AddHospitalization")}>
        <Image source={imgPlus} style={styles.btnMenu} />
      </TouchableOpacity>
    )
  }

  renderHospitalizationList() {
    return (
      <FlatList
        data={healthConditions}
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
          <Text style={{ fontSize: 18, color: Color.BLUE, fontWeight: '600' }}>{item.hospitalName}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, color: Color.GREY, fontWeight: '300' }}>{localizedStrings.hospitalizationList.treatedBy}</Text>
            <Text style={{ fontSize: 16, color: Color.GREY, fontWeight: '600', marginLeft: 8 }}>{item.providerName}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, color: Color.GREY, fontWeight: '300' }}>{localizedStrings.hospitalizationList.for}</Text>
            <Text style={{ fontSize: 16, color: Color.GREY, fontWeight: '600', marginLeft: 8 }}>{item.reason}</Text>
          </View>
        </View>
        <Icon name="chevron-thin-right" type='Entypo' style={{ fontSize: 18, color: Color.LIGHT_GREY }} />
      </View>
    )
  }
}

export default HospitalizationList;
