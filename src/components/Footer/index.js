import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Constants from '../../Helper/Constants'
import Colors from '../../Helper/Color';

export default class Footer extends Component {
  render() {
    return (
      <View style={{ paddingVertical: 10 }}>
        <Text style={{ color: Colors.BLACK, fontFamily: Constants.AppFont, fontSize: 20, fontWeight: '900' }}>
          Chain.Care
        </Text>
      </View>
    )
  }
}
