import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  SafeAreaView,
  FlatList
} from 'react-native'
import { Header } from 'react-native-elements'
import { Icon } from 'native-base'
import SimplePicker from 'react-native-simple-picker'
import localizedStrings from '../../Helper/LocalisedString'
import moment from 'moment'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgPlus from '../../../assets/images/plus.png'
import imgDownArrow from '../../../assets/images/downArrow.png'
import Color from '../../Helper/Color'

const healthConditions = [
  { name: `${localizedStrings.healthConditionList.VitaminB12Deficiency}`, date: 'Diagnosed on 01 Jan 2020', status: `${localizedStrings.healthConditionList.ongoing}` },
  { name: `${localizedStrings.healthConditionList.type1Diabetese}`, date: 'Diagnosed on 01 Mar 2020', status: `${localizedStrings.healthConditionList.completed}` }
]

const options = [`${localizedStrings.healthConditionList.all}`, `${localizedStrings.healthConditionList.ongoing}`, `${localizedStrings.healthConditionList.past}`]

class HealthConditionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: `${localizedStrings.healthConditionList.all}`
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Color.WHITE }}>
        {this.renderHeader()}
        {this.renderSubHeader()}
        {this.renderHealthConditionList()}
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
      <Text style={styles.headerText}>{localizedStrings.healthConditionList.healthCondition}</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }} onPress={() => this.props.navigation.navigate("AddHealthCondition")}>
        <Image source={imgPlus} style={styles.btnMenu} />
      </TouchableOpacity>
    )
  }

  renderSubHeader = () => {
    return (
      <View style={styles.subHeader}>
        <Text style={[styles.headerText, { fontSize: 17, color: 'gray' }]}>{localizedStrings.healthConditionList.showing}</Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}
          onPress={() => this.refs.picker.show()}>
          <Text style={[styles.headerText, { fontSize: 17 }]}>{this.state.selectedOption}</Text>
          <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: 5, alignSelf: 'center' }} />
        </TouchableOpacity>
      </View>
    )
  }

  renderHealthConditionList() {
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
          <Text style={{ fontSize: 16, color: Color.GREY, fontWeight: '300', marginVertical: 8 }}>{item.date}</Text>
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

export default HealthConditionList;
