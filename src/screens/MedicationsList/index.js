import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  SafeAreaView,
  FlatList
} from 'react-native'
import { Header } from 'react-native-elements'
import { Icon } from 'native-base'
import moment from 'moment'
import localizedStrings from '../../Helper/LocalisedString'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgPlus from '../../../assets/images/plus.png'
import imgDownArrow from '../../../assets/images/downArrow.png'
import Color from '../../Helper/Color'
import SimplePicker from 'react-native-simple-picker'

const healthConditions = [
  { name: 'B12', prescribedFor: [], status: 'Past' },
  { name: 'ABCD', prescribedFor: ["Vitamin B12 deficiency"], status: 'Past' }
]

const options = [`${localizedStrings.medicationsList.allMedications}`, `${localizedStrings.medicationsList.ongoingMedications}`, `${localizedStrings.medicationsList.pastMedications}`]

class MedicationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: `${localizedStrings.medicationsList.allMedications}`
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Color.WHITE }}>
        {this.renderHeader()}
        {this.renderSubHeader()}
        {this.renderMedicationsList()}
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
      <Text style={styles.headerText}>{localizedStrings.medicationsList.medications}</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }} onPress={() => this.props.navigation.navigate("AddMedicationScreen")}>
        <Image source={imgPlus} style={styles.btnMenu} />
      </TouchableOpacity>
    )
  }

  renderSubHeader = () => {
    return (
      <View style={styles.subHeader}>
        <Text style={[styles.headerText, { fontSize: 17, color: 'gray' }]}>{localizedStrings.medicationsList.showing}</Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}
          onPress={() => this.refs.picker.show()}>
          <Text style={[styles.headerText, { fontSize: 17 }]}>{this.state.selectedOption}</Text>
          <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: 5, alignSelf: 'center' }} />
        </TouchableOpacity>
      </View>
    )
  }

  renderMedicationsList() {
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
          <Text style={{ fontSize: 18, color: Color.BLUE, fontWeight: '600' }}>{item.name}</Text>
          <View style={{ flexDirection: 'row', marginVertical: 8 }}>
            <Text style={{ fontSize: 16, color: Color.GREY, fontWeight: '300' }}>Prescribed For:</Text>
            <Text style={{ fontSize: 16, color: Color.GREY, fontWeight: '300', marginLeft: 8 }}>{item.prescribedFor.join(", ")}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, color: Color.GREY, fontWeight: '300' }}>Status:</Text>
            <Text style={{ fontSize: 16, color: Color.GREY, fontWeight: '600', marginLeft: 8 }}>{item.status}</Text>
          </View>
        </View>
        <Icon name="chevron-thin-right" type='Entypo' style={{ fontSize: 18, color: Color.LIGHT_GREY }} />
      </View>
    )
  }
}

export default MedicationsList;
