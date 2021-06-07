import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

import Color from '../../Helper/Color';

export default class CustomText extends Component {
  render() {
    return (
      <Text style={styles.instruction}>
        {this.props.text ? this.props.text : ''}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  instruction: {
    fontFamily: 'Times',
    fontSize: 25,
    marginTop: 20,
    marginHorizontal: 20,
    color: Color.BLACK
  }
})