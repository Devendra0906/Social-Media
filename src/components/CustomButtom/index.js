import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Constants from '../../Helper/Constants';
import Color from '../../Helper/Color';

const CustomButton = (props) => (
  <TouchableOpacity
    {...props}
    style={[styles.button, props.buttonContainer]}
  >
    <Text style={[styles.title, props.buttonTitle]}>
      {props.title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 30,
    borderColor: Color.BLUE,
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: Color.BLUE,
    fontFamily: Constants.AppFont
  }
})

export default CustomButton;
