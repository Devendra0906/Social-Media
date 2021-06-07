import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Color from '../../Helper/Color';

const logo = require('../../../assets/images/logo.png');

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logoImage} resizeMode='contain' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {
    height: 70,
    width: 70
  }
})