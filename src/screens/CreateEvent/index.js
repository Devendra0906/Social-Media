import React, { Component } from 'react';
import { View, ScrollView, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, Image, Text, TextInput } from 'react-native';
import { connect } from "react-redux";
import DeviceInfo from 'react-native-device-info';
import { Header } from 'react-native-elements';
import moment from "moment";
import DateTimePicker from "react-native-modal-datetime-picker";
import ImagePicker from 'react-native-image-picker';
import {
  Container,
  Title,
  Icon
} from "native-base"
import styles from "./styles";
import {
  didUpdateEventDescription, didUpdateEventIcon, didUpdateEventName, didUpdateEventLocation, didUpdateEventStartDate, didUpdateEventEndDate, didUpdateEventStartTime, didUpdateEventEndTime, canInviteCoWorkers, resetGroupData
} from './../../actions'
import { FlatList } from 'react-native-gesture-handler';
import Color from '../../Helper/Color';
import localizedStrings from '../../Helper/LocalisedString'
class CreateEvent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isStartDatePickerVisible: false,
      isStartTimePickerVisible: false,
      isEndDatePickerVisible: false,
      isEndTimePickerVisible: false,
      avatarSource: undefined
    };
  }

  handleStartDatePicked = date => {
    var newDate = "Today"
    if (moment(date).diff(new Date(), 'days') >= 0 && moment(date).diff(new Date(), 'days') < 6) {
      newDate = moment(date).format('dddd');
    } else {
      newDate = moment(date).format('MMM DD, YYYY');
    }
    this.setState({ isStartDatePickerVisible: false, startDate: newDate });
  }

  handleStartTimePicked = date => {
    this.setState({ isStartTimePickerVisible: false, startTime: moment(date).format('LT') });
  }

  handleEndDatePicked = date => {
    var newDate = "Today"
    if (moment(date).diff(new Date(), 'days') >= 0 && moment(date).diff(new Date(), 'days') < 6) {
      newDate = moment(date).format('dddd');
    } else {
      newDate = moment(date).format('MMM DD, YYYY');
    }
    this.setState({ isEndDatePickerVisible: false, endDate: newDate });
  }

  handleEndTimePicked = date => {
    this.setState({ isEndTimePickerVisible: false, endTime: moment(date).format('LT') });
  }

  openImagePicker() {
    const options = {
      title: `${localizedStrings.createEvent.selectAvatar}`,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'mixed'
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({ avatarSource: source });
      }
    });
  }

  renderImageView() {
    if (this.state.avatarSource == undefined) {
      return (
        <TouchableOpacity onPress={() => {
          this.openImagePicker()
        }}>
          <View style={{ flexDirection: 'row', paddingHorizontal: 8, borderColor: '#fff', borderWidth: 1, borderRadius: 5, paddingVertical: 5, alignItems: 'center' }}>
            <Icon name="md-images" style={{ color: "#fff", fontSize: 20 }} />
            <Text style={{ fontSize: 14, color: '#fff', marginLeft: 5 }}>
              {localizedStrings.createEvent.addPhoto}
            </Text>
          </View>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity style={{ flex: 1, width: '100%' }} onPress={() => {
          this.openImagePicker()
        }}>
          <Image source={this.state.avatarSource} style={{ flex: 1 }} resizeMode='cover' />
        </TouchableOpacity>
      )
    }
  }

  render() {
    const navigation = this.props.navigation;
    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }

    return (
      <Container testID='createEventScreen' style={{ backgroundColor: Color.WHITE }}>
        <Header
          containerStyle={[{
            backgroundColor: '#fff',
            paddingTop: 0,
            elevation: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 2,
            shadowOpacity: 0.1,
            shadowColor: '#000',
            marginBottom: 5
          }, headerStyle]}
          leftComponent={(
            <TouchableOpacity
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              testID="sideMenuButton"
              onPress={() => navigation.goBack()}
            >
              <Icon name="ios-arrow-back" style={{ color: "#000" }} />
            </TouchableOpacity>)}
          centerComponent={{ text: `${localizedStrings.createEvent.createEvent}`, style: { color: '#000', fontSize: 17, fontWeight: 'bold' } }}
        />
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
              <View style={styles.imageContainer}>
                {this.renderImageView()}
              </View>
              <View style={{ flex: 1, paddingHorizontal: 15, marginTop: 10 }}>
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 17 }}>{localizedStrings.createEvent.eventName}</Text>
                <TextInput
                  placeholder={localizedStrings.createEvent.generalTeamMeeting}
                  placeholderTextColor="#bbb"
                  style={styles.nameInput}
                />
                <View style={styles.timeContainer}>
                  <Icon name="md-time" type='Ionicons' style={{ color: "#999", fontSize: 20, marginRight: 10 }} />
                  <View style={styles.dateTimeContainer}>
                    <View style={styles.startDateTimeContainer}>
                      <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}
                        onPress={() => {
                          this.setState({ isStartDatePickerVisible: true })
                        }}>
                        <TextInput
                          placeholder={localizedStrings.createEvent.startDate}
                          placeholderTextColor="#999"
                          style={styles.dateInput}
                          editable={false}
                          pointerEvents="none"
                          value={this.state.startDate}
                          textAlignVertical='top'
                        />
                      </TouchableOpacity>
                      <DateTimePicker
                        mode="date"
                        isVisible={this.state.isStartDatePickerVisible}
                        onConfirm={this.handleStartDatePicked}
                        onCancel={() => {
                          this.setState({ isStartDatePickerVisible: false })
                        }}
                      />
                      <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}
                        onPress={() => {
                          this.setState({ isStartTimePickerVisible: true })
                        }}>
                        <TextInput
                          placeholder={localizedStrings.createEvent.startTime}
                          placeholderTextColor="#999"
                          style={styles.dateInput}
                          editable={false}
                          pointerEvents="none"
                          value={this.state.startTime}
                        />
                      </TouchableOpacity>
                      <DateTimePicker
                        mode="time"
                        titleIOS={localizedStrings.createEvent.pickTime}
                        isVisible={this.state.isStartTimePickerVisible}
                        onConfirm={this.handleStartTimePicked}
                        onCancel={() => {
                          this.setState({ isStartTimePickerVisible: false })
                        }}
                      />
                    </View>
                    <View style={styles.endDateTimeContainer}>
                      <TouchableOpacity style={styles.container}
                        onPress={() => {
                          this.setState({ isEndDatePickerVisible: true })
                        }}>
                        <TextInput
                          placeholder={localizedStrings.createEvent.endDate}
                          placeholderTextColor="#999"
                          style={styles.dateInput}
                          editable={false}
                          pointerEvents="none"
                          value={this.state.endDate}
                        />
                      </TouchableOpacity>
                      <DateTimePicker
                        mode="date"
                        isVisible={this.state.isEndDatePickerVisible}
                        onConfirm={this.handleEndDatePicked}
                        onCancel={() => {
                          this.setState({ isEndDatePickerVisible: false })
                        }}
                      />
                      <TouchableOpacity style={styles.container}
                        onPress={() => {
                          this.setState({ isEndTimePickerVisible: true })
                        }}>
                        <TextInput
                          placeholder={localizedStrings.createEvent.endTime}
                          placeholderTextColor="#999"
                          style={styles.dateInput}
                          editable={false}
                          pointerEvents="none"
                          value={this.state.endTime}
                        />
                      </TouchableOpacity>
                      <DateTimePicker
                        mode="time"
                        titleIOS={localizedStrings.createEvent.pickTime}
                        isVisible={this.state.isEndTimePickerVisible}
                        onConfirm={this.handleEndTimePicked}
                        onCancel={() => {
                          this.setState({ isEndTimePickerVisible: false })
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.timeContainer, { marginTop: 20 }]}>
                  <Icon type="SimpleLineIcons" name="location-pin" style={{ color: "#999", fontSize: 20 }} />
                  {/* <TouchableOpacity style={styles.container} */}
                  {/* onPress={() => { }}> */}
                  <TextInput
                    placeholder={localizedStrings.createEvent.location}
                    placeholderTextColor="#999"
                    style={[styles.dateInput, { marginLeft: 10, flex: 1, borderBottomWidth: 1, borderBottomColor: '#bbb' }]}
                  />
                  {/* </TouchableOpacity> */}
                </View>
                <View style={[styles.timeContainer, { marginTop: 20 }]}>
                  <Icon type="SimpleLineIcons" name="pencil" style={{ color: "#999", fontSize: 20 }} />
                  <TextInput
                    placeholder={localizedStrings.createEvent.description}
                    placeholderTextColor="#999"
                    style={[styles.dateInput, { marginLeft: 10, flex: 1, borderBottomWidth: 1, borderBottomColor: '#bbb' }]}
                  />
                </View>
                <View style={[styles.timeContainer, { marginTop: 10, alignItems: 'center' }]}>
                  <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 17 }}>Invite</Text>
                  <FlatList style={{ flex: 1, marginLeft: 10 }}
                    data={[1, ...this.props.selectedMembers]}
                    horizontal
                    scrollEnabled={false}
                    renderItem={({ item, index }) => {
                      if (index === 0) {
                        return (
                          <Icon name="ios-add-circle-outline" type='Ionicons' style={{ fontSize: 30, color: '#666' }}
                            onPress={() => navigation.navigate('AddGroup', {
                              route: 'addEvent'
                            })}
                          />
                        )
                      } else if (index < 4) {
                        return (
                          <Image style={{ height: 30, width: 30, borderRadius: 15, marginLeft: 5 }} source={item.thumbnail} />
                        )
                      } else if (index === 4) {
                        return (
                          <View style={{ overflow: 'hidden', height: 30, width: 30, borderRadius: 15, marginLeft: 5 }}>
                            <Image style={{ height: 30, width: 30, borderRadius: 15 }} source={item.thumbnail} />
                            {this.props.selectedMembers.length > 4 && <View style={{ position: "absolute", top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 999, alignItems: 'center', justifyContent: 'center' }}>
                              <Text style={{ color: '#fff' }}>+{this.props.selectedMembers.length - 4} </Text>
                            </View>}
                          </View>
                        )
                      }
                    }}
                    extraData={this.props.selectedMembers}
                  />
                </View>
                <TouchableOpacity onPress={() => this.props.canInviteCoWorkers(!this.props.canInvite)}>
                  <View style={[styles.timeContainer, { marginTop: 20 }]}>
                    <Icon type="SimpleLineIcons" name="envelope" style={{ color: "#999", fontSize: 20 }} />
                    <Text style={[styles.dateInput, { flex: 1, marginLeft: 10, fontWeight: '400' }]}>
                      {localizedStrings.createEvent.guestCan}
                    </Text>
                    <Icon type="MaterialCommunityIcons" name={this.props.canInvite ? "checkbox-marked" : "checkbox-blank-outline"} style={{ color: "#000", fontSize: 20 }} />
                  </View>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
          <View style={{ flexDirection: 'row', margin: 15 }}>
            <TouchableOpacity style={[styles.createButtonContainer, { marginRight: 15 }]}
              onPress={() => {
                this.props.resetGroup()
                navigation.goBack()
              }}>
              <Title style={styles.createText}>{localizedStrings.createEvent.cancle}</Title>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createButtonContainer}
              onPress={() => {
                this.props.resetGroup()
                navigation.goBack()
              }}>
              <Title style={styles.createText}>{localizedStrings.createEvent.create}</Title>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    updateDescription: location => dispatch(didUpdateEventDescription(location)),
    updateIcon: icon => dispatch(didUpdateEventIcon(icon)),
    updateName: name => dispatch(didUpdateEventName(name)),
    updateLocation: location => dispatch(didUpdateEventLocation(location)),
    updateStartDate: startDate => dispatch(didUpdateEventStartDate(startDate)),
    updateEndDate: endDate => dispatch(didUpdateEventEndDate(endDate)),
    updateStartTime: startTime => dispatch(didUpdateEventStartTime(startTime)),
    updateEndTime: endTime => dispatch(didUpdateEventEndTime(endTime)),
    canInviteCoWorkers: canInvite => dispatch(canInviteCoWorkers(canInvite)),
    resetGroup: () => dispatch(resetGroupData())
  };
}

const mapStateToProps = state => {
  return {
    eventImage: state.eventCreateReducer.eventImage,
    eventName: state.eventCreateReducer.eventName,
    eventDescription: state.eventCreateReducer.eventDescription,
    eventLocation: state.eventCreateReducer.eventLocation,
    startDate: state.eventCreateReducer.startDate,
    startTime: state.eventCreateReducer.startTime,
    endDate: state.eventCreateReducer.endDate,
    endTime: state.eventCreateReducer.endTime,
    canInvite: state.eventCreateReducer.canInvite,
    selectedMembers: state.groupMembersReducer.selectedMembers
  }
};

export default connect(mapStateToProps, bindAction)(CreateEvent);