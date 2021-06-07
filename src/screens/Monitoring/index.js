// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  FlatList,
} from 'react-native'
import SimplePicker from 'react-native-simple-picker'
import { Header } from 'react-native-elements'
import { DrawerActions } from '@react-navigation/native'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'

// Image imports
import imgMenu from '../../../assets/images/menu.png'
import imgDownArrow from '../../../assets/images/downArrow.png'
import imgPlus from '../../../assets/images/plus.png'
import imgCorrect from '../../../assets/images/correct.png'
import imgDoctorBriefcase from '../../../assets/images/doctorBriefcase.png'
import Color from '../../Helper/Color'

const options = ['All', 'Draft', 'Live', 'Disabled', 'Disallow']

const LIST = [
  { title: 'Acute Diabetes Control', desc: '1 Monitored Patient', lastUpdate: '17 AUG 2020', status: 'live' }
]

class Monitoring extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showing: "All",
      list: LIST
    }
  }

  render() {
    return this.renderMainView()
  }

  renderMainView = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {/* <ScrollView style={{ flex: 1 }}> */}
        {this.renderSubHeader()}
        {this.renderFlatlist()}
        {/* </ScrollView> */}
        <SimplePicker
          ref={'picker'}
          options={options}
          onSubmit={(option) => {
            this.setState({ showing: option })
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
        rightComponent={this.renderRightHeader()}
      />
    )
  }

  renderLeftHeader = () => {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('SideMenu')}>
        <Image source={imgMenu} style={styles.btnMenu} />
      </TouchableOpacity>
    )
  }

  renderCenterHeader = () => {
    return (
      <Text style={styles.headerText}>Monitoring</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity onPress={() => { }}>
        <Image source={imgPlus} style={styles.btnMenu} />
      </TouchableOpacity>
    )
  }

  renderSubHeader = () => {
    return (
      <View style={styles.subHeader}>
        <Text style={[styles.headerText, { fontSize: 17, color: 'gray' }]}>Showing:</Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }} onPress={() => this.refs.picker.show()}>
          <Text style={[styles.headerText, { fontSize: 17 }]}>{this.state.showing}</Text>
          <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: 5, alignSelf: 'center' }} />
        </TouchableOpacity>
      </View>
    )
  }

  renderFlatlist = () => {
    return (
      <FlatList
        data={this.state.list}
        contentContainerStyle={{ paddingTop: 10, paddingBottom: 25 }}
        renderItem={this.renderListItem}
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }

  renderListItem = ({ item, index }) => {
    return (
      <View style={styles.cellContainer}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ height: 50, backgroundColor: Color.BLUE_LIGHT, alignItems: 'center', justifyContent: 'center', width: 60 }}>
            <Image source={imgDoctorBriefcase} style={{ height: 30, width: 40, }} />
          </View>
          <View style={{ marginHorizontal: 10, flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
              <Text style={{ color: Color.BLUE_LIGHT, fontSize: 16 }}>{item.title}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Image source={imgCorrect} style={{ height: 12, width: 12, marginRight: 4 }} />
                <Text>{item.status}</Text>
              </View>
            </View>
            <Text style={{ color: 'gray', fontSize: 16 }}>{item.desc}</Text>
            <Text style={{ color: 'lightgray', fontSize: 16 }}>Last updated on: {item.lastUpdate}</Text>
          </View>
        </View>
        <TouchableOpacity style={{ padding: 8, alignSelf: 'flex-end' }}>
          <Text style={{ fontSize: 16, color: Color.BLUE_LIGHT }}>EDIT</Text>
        </TouchableOpacity>
      </View>
    )
  }

}
export default Monitoring