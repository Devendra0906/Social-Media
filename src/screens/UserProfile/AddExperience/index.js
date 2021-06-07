import React, {Component} from 'react';
import {View, TouchableOpacity, Image, TextInput, Text} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Container, Icon, Content} from 'native-base';
import {Header} from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import styles from './styles';
import Color from '../../../Helper/Color';
import {AddExperienceData} from '../../../__Redux/__actions/profileActions';
import {connect} from 'react-redux';
import {Alert} from 'react-native';
class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.experienceData =
      props.route.params && props.route.params.experienceData
        ? props.route.params.experienceData
        : undefined;

    const title = !!this.experienceData ? this.experienceData.designation : '';
    const startDate = !!this.experienceData ? this.experienceData.start : '';
    const endDate = !!this.experienceData ? this.experienceData.end : '';
    const location = !!this.experienceData ? this.experienceData.location : '';
    const description = !!this.experienceData
      ? this.experienceData.description
      : '';
    const companyName = !!this.experienceData
      ? this.experienceData.companyName
      : '';
    const currentStatus = endDate === 'Present' ? true : false;
    this.state = {
      currentlyWorking: currentStatus,
      startDatePickerVisible: false,
      endDatePickerVisible: false,
      startDate: startDate,
      endDate: endDate,
      title: title,
      employmentType: '',
      company: companyName,
      location: location,
      desription: description,
    };
  }

  handleStartDatePicked = date => {
    const start = moment(date).format('MMM YYYY');
    this.setState({startDatePickerVisible: false, startDate: start});
  };

  handleEndDatePicked = date => {
    const end = moment(date).format('MMM YYYY');
    this.setState({endDatePickerVisible: false, endDate: end});
  };
  updateToDB() {
    const exp = {
      title: this.state.title,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      isCurrentCompany: this.state.currentlyWorking,
      company: {
        id: 'a1254f',
        name: this.state.company,
        profile: 'https://source.unsplash.com/random',
        location: this.state.location,
      },
    };
    //  console.log(exp);
    this.props.postData(exp);
    Alert.alert('Experience Added Successfully');
  }
  render() {
    let params = {};
    this.props.route.params
      ? (params = this.props.route.params)
      : (params = {
          experienceData: {
            company: {
              id: '',
              industry: [Object],
              name: '',
              profile: '',
            },
            endDate: '',
            id: '',
            isCurrentCompany: false,
            startDate: '',
            title: '',
          },
        });
    console.log(params);
    const navigation = this.props.navigation;
    const {
      currentlyWorking,
      startDate,
      endDate,
      startDatePickerVisible,
      endDatePickerVisible,
      title,
      company,
      employmentType,
      location,
      desription,
    } = this.state;
    let headerStyle = {height: 64, paddingTop: 20};
    if (DeviceInfo.hasNotch()) {
      headerStyle = {height: 85, paddingTop: 35};
    }
    const minEndDate = new Date(startDate);
    // startDate.length > 0 ? new Date(startDate) : new Date('January 1960');

    let pageTitle = !!this.experienceData
      ? 'Edit Experience'
      : 'Add Experience';
    return (
      <Container style={{backgroundColor: Color.WHITE}}>
        <Header
          containerStyle={[
            {
              backgroundColor: Color.WHITE,
              paddingTop: 0,
              elevation: 10,
              shadowOffset: {width: 0, height: 2},
              shadowRadius: 2,
              shadowOpacity: 0.1,
              shadowColor: Color.BLACK,
              marginBottom: 5,
            },
            headerStyle,
          ]}
          leftComponent={
            <TouchableOpacity
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              testID="sideMenuButton"
              onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" style={{color: Color.BLACK}} />
            </TouchableOpacity>
          }
          centerComponent={{
            text: pageTitle,
            style: {color: Color.BLACK, fontSize: 17, fontWeight: 'bold'},
          }}
        />
        <Content>
          <View style={{marginTop: 15, marginHorizontal: 15}}>
            <TextInput
              placeholder="Title"
              placeholderTextColor={Color.GREY}
              style={styles.textInput}
              value={title}
              onChangeText={text => this.setState({title: text})}
            />
            <TextInput
              placeholder="Employment Type"
              placeholderTextColor={Color.GREY}
              style={[styles.textInput, {marginTop: 15}]}
              value={employmentType}
              onChangeText={text => this.setState({employmentType: text})}
            />
            <TextInput
              placeholder="Company"
              placeholderTextColor={Color.GREY}
              style={[styles.textInput, {marginTop: 15}]}
              value={company}
              onChangeText={text => this.setState({company: text})}
            />
            <TextInput
              placeholder="Location"
              placeholderTextColor={Color.GREY}
              style={[styles.textInput, {marginTop: 15}]}
              value={location}
              onChangeText={text => this.setState({location: text})}
            />

            <TouchableOpacity
              style={styles.checkboxContiner}
              onPress={() => {
                this.setState({currentlyWorking: !currentlyWorking});
              }}>
              <Icon
                name={
                  currentlyWorking ? 'check-box' : 'check-box-outline-blank'
                }
                type="MaterialIcons"
                style={styles.checkbox}
              />
              <Text style={styles.checkboxText}>
                I am currently working in this role
              </Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 0,
                marginTop: 15,
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => this.setState({startDatePickerVisible: true})}>
                  <TextInput
                    placeholder="Start Date"
                    placeholderTextColor={Color.GREY}
                    style={[styles.textInput]}
                    pointerEvents="none"
                    editable={false}
                    value={startDate}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, marginLeft: 30}}>
                {currentlyWorking ? (
                  <Text style={{color: Color.BLACK, fontSize: 15}}>
                    Present
                  </Text>
                ) : (
                  <TouchableOpacity
                    onPress={() => this.setState({endDatePickerVisible: true})}>
                    <TextInput
                      placeholder="End Date"
                      placeholderTextColor={Color.GREY}
                      style={[styles.textInput]}
                      pointerEvents="none"
                      editable={false}
                      value={endDate}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <TextInput
              placeholder="Description"
              placeholderTextColor={Color.GREY}
              style={[styles.textInput, {marginTop: 15, height: 60}]}
              multiline
              value={desription}
              onChangeText={text => this.setState({desription: text})}
            />

            <TouchableOpacity
              style={styles.saveContainer}
              onPress={() =>
                this.updateToDB(() => {
                  navigation.navigate('SideMenu');
                })
              }>
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          </View>
        </Content>
        <DateTimePicker
          isVisible={startDatePickerVisible}
          onConfirm={this.handleStartDatePicked}
          onCancel={() => this.setState({startDatePickerVisible: false})}
          maximumDate={new Date()}
        />
        <DateTimePicker
          isVisible={endDatePickerVisible}
          onConfirm={this.handleEndDatePicked}
          onCancel={() => this.setState({endDatePickerVisible: false})}
          maximumDate={new Date()}
          minimumDate={minEndDate}
        />
      </Container>
    );
  }
}

// export default AddExperience;
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    postData: exp => {
      dispatch(AddExperienceData(exp));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddExperience);
