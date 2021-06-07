import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import FontAwasome from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from '../../Helper/Color';

class FooterButtons extends Component {

  render() {
    return (
      <View style={styles.footerContainer} testID={`${this.props.classType}_footerButtons`}>
        <TouchableOpacity
          testID={`${this.props.classType}_keyboardButton`}
          style={styles.keyboardContainer}
          onPress={this.props.keyboardPressed}>
          <MaterialIcon name='keyboard-outline' size={35} color={Color.LIGHT_GREY} />
        </TouchableOpacity>

        <TouchableOpacity
          testID={`${this.props.classType}_micButton`}
          style={styles.micContainer}
          onPress={this.props.micPressed}>
          <FontAwasome name='microphone' size={35} color={Color.LIGHT_GREY} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    width: '40%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 22,
    height: 55,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY
  },
  keyboardContainer: {
    marginVertical: 10,
    marginRight: 15
  },
  micContainer: {
    marginVertical: 10,
    marginLeft: 15
  }
})

export default FooterButtons;