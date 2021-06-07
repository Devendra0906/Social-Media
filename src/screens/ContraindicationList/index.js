import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  SafeAreaView,
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
import imgDownArrow from '../../../assets/images/downArrow.png'
import Color from '../../Helper/Color'

const contraindications = [
  { date: '14 Jul 2020', instruction: "No Buttermilk" },
  { date: '10 Jul 2020', instruction: "No Lemon" },
  { date: '01 Jul 2020', instruction: "Drink 5 liter water everyday" },
]

class ContraindicationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Color.WHITE }}>
        {this.renderHeader()}
        {this.renderContraindicationList()}
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
      <Text style={styles.headerText}>{localizedStrings.contraindicationList.contraindications}</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }}
        onPress={() => this.props.navigation.navigate("AddContraindication")}>
        <Image source={imgPlus} style={styles.btnMenu} />
      </TouchableOpacity>
    )
  }

  renderContraindicationList() {
    return (
      <FlatList
        data={contraindications}
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
          <Text style={{ fontSize: 18, color: Color.BLUE, fontWeight: '600' }}>{item.date}</Text>
          <Text style={{ fontSize: 16, color: Color.GREY, fontWeight: '300', marginTop: 8 }}>{item.instruction}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="delete-outline" type='MaterialCommunityIcons' style={{ fontSize: 28, color: Color.LIGHT_GREY, marginRight: 10 }} />
          <Icon name="edit-2" type='Feather' style={{ fontSize: 22, color: Color.LIGHT_GREY }} />
        </View>
      </View>
    )
  }
}

export default ContraindicationList;
