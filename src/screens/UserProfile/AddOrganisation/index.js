import React, {Component} from 'react';
import {View, TouchableOpacity, Image, TextInput, Text} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Container, Icon, Content} from 'native-base';
import {Header} from 'react-native-elements';
import {Dropdown} from 'react-native-material-dropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {AddOrganisationData} from '../../../__Redux/__actions/profileActions';
import {connect} from 'react-redux';
import {Alert} from 'react-native';
import styles from './styles';
import Color from '../../../Helper/Color';

const cources = [
  {value: 'React Native'},
  {value: 'PHP'},
  {value: 'React JS'},
  {value: 'Node JS'},
  {value: 'Python'},
  {value: 'Ruby'},
  {value: 'Swift'},
  {value: 'Java'},
  {value: 'Go'},
  {value: 'Kotlin'},
  {value: 'Machine Learnig'},
  {value: 'Objective C'},
];

class AddExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlyWorking: true,
      startDatePickerVisible: false,
      endDatePickerVisible: false,
      startDate: '',
      endDate: '',
      name: '',
      position: '',
      associate: '',
      desription: '',
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
    const pub = {
      name: this.state.name,
      position: this.state.position,
      associatedWith: this.state.associate,
      isMembershipLive: this.state.currentlyWorking,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      description: this.state.desription,
    };

    // console.log(exp);
    this.props.postData(pub);
    Alert.alert('Organisation Added Successfully');
    this.props.navigation.goBack();
  }
  render() {
    const navigation = this.props.navigation;
    const {
      currentlyWorking,
      startDate,
      endDate,
      startDatePickerVisible,
      endDatePickerVisible,
      name,
      position,
      associate,
      desription,
    } = this.state;
    let headerStyle = {height: 64, paddingTop: 20};
    if (DeviceInfo.hasNotch()) {
      headerStyle = {height: 85, paddingTop: 35};
    }
    const minEndDate =
      startDate.length > 0 ? new Date(startDate) : new Date('January 1960');

    let pageTitle = 'Add Organization';
    return (
      <Container style={{backgroundColor: Color.WHITE}}>
        <Header
          containerStyle={[
            {
              backgroundColor: '#fff',
              paddingTop: 0,
              elevation: 10,
              shadowOffset: {width: 0, height: 2},
              shadowRadius: 2,
              shadowOpacity: 0.1,
              shadowColor: '#000',
              marginBottom: 5,
            },
            headerStyle,
          ]}
          leftComponent={
            <TouchableOpacity
              testID="sideMenuButton"
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              onPress={() => navigation.goBack()}>
              <Icon
                type="Ionicons"
                name="ios-arrow-back"
                style={{color: '#000'}}
              />
            </TouchableOpacity>
          }
          centerComponent={{
            text: pageTitle,
            style: {color: '#000', fontSize: 17, fontWeight: 'bold'},
          }}
        />
        <Content>
          <View style={{marginTop: 15, marginHorizontal: 15}}>
            <TextInput
              placeholder="Name"
              placeholderTextColor="#666"
              style={styles.textInput}
              value={name}
              onChangeText={text => this.setState({name: text})}
            />
            <TextInput
              placeholder="Position held"
              placeholderTextColor="#666"
              style={[styles.textInput, {marginTop: 15}]}
              value={position}
              onChangeText={text => this.setState({position: text})}
            />
            <Dropdown
              rippleOpacity={0}
              data={cources}
              textColor={'#000'}
              baseColor={'#000'}
              value={associate}
              onChangeText={label => {
                this.setState({associate: label});
              }}
              renderBase={() => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderBottomColor: '#666',
                      borderBottomWidth: 0.5,
                      marginTop: 15,
                    }}>
                    <TextInput
                      placeholder="Asspciate With"
                      placeholderTextColor="#666"
                      style={{
                        flex: 1,
                        marginHorizontal: 0,
                        paddingVertical: 8,
                        fontSize: 15,
                      }}
                      value={associate}
                      editable={false}
                      pointerEvents="none"
                    />
                    <Icon
                      name="chevron-thin-down"
                      type="Entypo"
                      style={{fontSize: 20, color: '#000'}}
                    />
                  </View>
                );
              }}
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
              <Text style={styles.checkboxText}>Membership ongoing</Text>
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
                    placeholderTextColor="#666"
                    style={[styles.textInput]}
                    pointerEvents="none"
                    editable={false}
                    value={startDate}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, marginLeft: 30}}>
                {currentlyWorking ? (
                  <Text style={{color: '#000', fontSize: 15}}>Present</Text>
                ) : (
                  <TouchableOpacity
                    onPress={() => this.setState({endDatePickerVisible: true})}>
                    <TextInput
                      placeholder="End Date"
                      placeholderTextColor="#666"
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
              placeholderTextColor="#666"
              style={[styles.textInput, {marginTop: 15, height: 60}]}
              multiline
              value={desription}
              onChangeText={text => this.setState({desription: text})}
            />
            <TouchableOpacity
              style={styles.saveContainer}
              onPress={() => this.updateToDB()}>
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
    postData: pub => {
      dispatch(AddOrganisationData(pub));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddExperience);
