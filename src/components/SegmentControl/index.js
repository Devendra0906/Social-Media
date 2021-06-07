import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Color from '../../Helper/Color'
import Constants from '../../Helper/Constants'

export default class SegmentControl extends Component {
  state = {
    selectedItem: 0
  }

  render() {
    const isEnabled = this.props.isReadOnly ? true : false
    return (
      <View style={[styles.mainContainer, this.props.style]}>
        {this.props.data.map((item, index) => {
          let contentContainer = this.props.container && this.props.container[index] ? this.props.container[index] : {}
          if (index == 0) {
            contentContainer = { ...styles.leftBorder, ...contentContainer }
          } else if (index == this.props.data.length - 1) {
            contentContainer = { ...styles.rightBorder, ...contentContainer }
          }
          return (
            <TouchableOpacity
              disabled={isEnabled}
              style={{
                ...styles.segmentContainer,
                backgroundColor: this.state.selectedItem == index ? Color.BLUE : Color.WHITE,
                ...contentContainer,
              }}
              onPress={() => {
                this.setState({ selectedItem: index })
              }}>
              <Text style={{
                color: this.state.selectedItem == index ? Color.WHITE : Color.BLUE,
                fontFamily: Constants.AppFont,
                fontSize: 15
              }}>
                {item}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row', marginTop: 10
  },
  leftBorder: {
    borderTopLeftRadius: 20, borderBottomLeftRadius: 20
  },
  rightBorder: {
    borderTopRightRadius: 20, borderBottomRightRadius: 20, borderRightWidth: 1
  },
  segmentContainer: {
    borderColor: Color.BLUE,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    height: 40,
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center'
  }
})