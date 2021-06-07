import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { TypingAnimation } from 'react-native-typing-animation';
import CachedImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Color from '../../Helper/Color';
import { Icon } from 'native-base';
import ChatItem from '../../components/AIBotComponents/ChatItem';
import TaskLists from '../../components/AIBotComponents/TaskLists';
import ViewCalendar from '../../components/AIBotComponents/ViewCalendar';

class AIBot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      messages: [
        {
          text: 'Hello Darshit, I am Chain.Care your health companion',
          isSender: "darshit"
        },
        { "attachment": "{\"type\": \"showcrewonflighttasks\", \"overview\": {\"title\": \"Tasks for your Flight\", \"flightnumber\": \"EK 145\"}, \"tasks\": [{\"id\": 1, \"description\": \"Deliver Article nr. 10 to Seat 04F\"}, {\"id\": 2, \"description\": \"Organize a small Birthday-Surprise to Seat 02F :)\"}, {\"id\": 3, \"description\": \"Diabetecs, special meal for Seat 02D\"}, {\"id\": 4, \"description\": \"Passenger Seat 04A special vegan meal without salt\"}]}", "recipient_id": "crew" },
        { "attachment": "{\"type\": \"showcrewrosteroverview\", \"overview\": {\"weekday\": \"Sunday\", \"completed_flights_count\": 3, \"overdue_flights_count\": 4}, \"completed_flights\": [{\"id\": 5, \"departure_time\": \"23:45\", \"arrival_time\": \"07:20\", \"departure_airport\": \"Vienna (VIE)\", \"arrival_airport\": \"Dubai (DXB)\", \"flightdate\": \"20/04/2019\"}, {\"id\": 6, \"departure_time\": \"23:45\", \"arrival_time\": \"07:20\", \"departure_airport\": \"Vienna (VIE)\", \"arrival_airport\": \"Dubai (DXB)\", \"flightdate\": \"20/04/2019\"}, {\"id\": 7, \"departure_time\": \"23:45\", \"arrival_time\": \"07:20\", \"departure_airport\": \"Vienna (VIE)\", \"arrival_airport\": \"Dubai (DXB)\", \"flightdate\": \"20/04/2019\"}], \"overdue_flights\": [{\"id\": 1, \"departure_time\": \"15:45\", \"arrival_time\": \"20:15\", \"departure_airport\": \"Dubai (DXB)\", \"arrival_airport\": \"London (LHR)\", \"flightdate\": \"22/04/2019\"}, {\"id\": 2, \"departure_time\": \"09:55\", \"arrival_time\": \"12:55\", \"departure_airport\": \"London (LHR)\", \"arrival_airport\": \"Dubai (DXB)\", \"flightdate\": \"22/04/2019\"}, {\"id\": 3, \"departure_time\": \"17:10\", \"arrival_time\": \"21:15\", \"departure_airport\": \"Dubai (DXB)\", \"arrival_airport\": \"Vienna (VIE)\", \"flightdate\": \"22/04/2019\"}, {\"id\": 4, \"departure_time\": \"23:45\", \"arrival_time\": \"07:20\", \"departure_airport\": \"Vienna (VIE)\", \"arrival_airport\": \"Dubai (DXB)\", \"flightdate\": \"22/04/2019\"}]}", "recipient_id": "crew" }
      ]
    };
    props.navigation.setOptions({
      title: 'My Assistant',
      headerLeft: () => (
        <TouchableOpacity
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          onPress={() => props.navigation.goBack()}
          style={{ marginLeft: 16 }}
        >
          <Icon name='ios-arrow-back' color={'#000'} size={25} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={styles.headerImage} onPress={() => props.navigation.navigate('HomeTabNavigator')}>
          <CachedImage style={styles.headerImage} source={require('../../../assets/images/contacts/ironman.jpeg')} />
        </TouchableOpacity>
      )
    })
  }

  renderTextItem = ({ item, index }) => {
    let bubbleStyle = {}
    if (item.isSender) {
      bubbleStyle = { marginRight: 20, alignSelf: 'flex-end', }
    } else {
      bubbleStyle = { marginLeft: 20 }
    }
    return (
      <View style={[styles.messageContainer, bubbleStyle]}>
        <Text>
          {item.text}
        </Text>
      </View>
    )
  }

  _onChangeMessageText = (text) => {
    this.setState({ message: text })
  }

  _onPressSend = () => {
    this.setState({ messages: [...this.state.messages, { text: this.state.message, isSender: true }], message: '' })
  }

  renderChatItem = ({ item, index }) => {
    var shouldSpeak = false
    if (item.attachment != undefined || item.attachment != null) {
      let attachment = JSON.parse(item.attachment);
      if (attachment && attachment.type === 'showcrewrosteroverview') {
        return <ViewCalendar
          navigation={this.props.navigation}
          data={attachment}
          sender={this.props.sender} />
      } else if (attachment && attachment.type === 'showcrewonflighttasks') {
        return <TaskLists data={attachment} />
      }
      // else if (attachment && attachment.type === 'showtaskdetails') {
      //   return <HorizontalFlatList
      //     type='taskList'
      //     navigation={this.props.navigation}
      //     onPressTaskUpdate={this.props.onPressTaskUpdate}
      //     data={attachment}
      //   />
      // } 
    }

    // else if (item.type == 13) {
    //   return <SeatPlan onPressSeatNumber={this.props.onPressSeatNumber} />
    // }

    return <ChatItem
      message={item}
      shouldSpeak={shouldSpeak}
      language={this.props.language}
      msgType="text" />
  }

  keyExtractor = (item, index) => `${index}`;

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          ref={ref => this.flatList = ref}
          data={this.state.messages}
          renderItem={this.renderChatItem}
          keyExtractor={this.keyExtractor}
          onContentSizeChange={() => this.flatList.scrollToEnd({ animated: true })}
          onLayout={() => this.flatList.scrollToEnd({ animated: true })}
        // ListFooterComponent={() => (
        //   <View>
        //     <TypingAnimation
        //       style={{ marginLeft: 20, marginTop: 10 }}
        //       dotColor="black"
        //       dotMargin={8}
        //       dotAmplitude={3}
        //       dotSpeed={0.15}
        //       dotRadius={4}
        //     />
        //   </View>
        // )}
        />
        <KeyboardAvoidingView behavior='padding'
          style={{ marginHorizontal: 20, paddingVertical: 10 }}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={'Type a message'}
              placeholderTextColor={Color.GREY}
              value={this.state.message}
              onChangeText={this._onChangeMessageText}
            />
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={this._onPressSend}>
              <MaterialIcons name='send' size={30} color={Color.GREY} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default AIBot;
