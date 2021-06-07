import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Color from '../../Helper/Color';

class ChatItem extends Component {

  render() {
    const {
      messageContainer,
      textContainer,
      textMessageLeft,
      textMessageRight,
      textContainerLeft,
      textContainerRight,
      leftContainer,
      rightContainer
    } = styles;
    const message = this.props.message;
    const isSender = message.sender != undefined;
    const textContainerExtra = isSender ? textContainerRight : textContainerLeft;
    const containerStyle = isSender ? [messageContainer, rightContainer] : [messageContainer, leftContainer];
    const textStyle = isSender ? textMessageRight : textMessageLeft;
    // if (message.shouldSpeak == true) {
    //   Tts.speak(message.text);
    //   message.shouldSpeak = false
    // }

    return (
      <View style={containerStyle}>
        <View style={[textContainer, textContainerExtra]}>
          <Text style={textStyle}>{this.props.message.text}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  textContainer: {
    flexDirection: 'column',
    // marginLeft: 10,
    flex: -1,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  textContainerLeft: {
    alignItems: 'flex-start',
    backgroundColor: Color.WHITE,
    maxWidth: '80%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 8,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY
  },
  textContainerRight: {
    alignItems: 'flex-end',
    backgroundColor: Color.LIGHT_GREY,
    maxWidth: '80%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 0,
  },
  textMessageLeft: {
    fontSize: 16,
    color: Color.BLACK
  },
  textMessageRight: {
    fontSize: 16,
    color: Color.GREY
  },
  sender: {
    fontWeight: 'bold',
    paddingRight: 10,
  },
  leftContainer: {
    alignSelf: 'flex-start'
  },
  rightContainer: {
    alignSelf: 'flex-end'
  }
})

export default ChatItem;