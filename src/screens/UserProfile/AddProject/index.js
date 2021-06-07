import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  FlatList,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Container, Icon, Content} from 'native-base';
import {Header} from 'react-native-elements';
import {Dropdown} from 'react-native-material-dropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import styles from './styles';
import Color from '../../../Helper/Color';

const userImage = require('./../../../../assets/images/contacts/thanos.jpg');
const userThumb = require('./../../../../assets/images/user_thumb.png');
import {AddProjectData} from '../../../__Redux/__actions/profileActions';
import {connect} from 'react-redux';
import {Alert} from 'react-native';
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

class AddProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlyWorking: false,
      startDatePickerVisible: false,
      endDatePickerVisible: false,
      startDate: '',
      endDate: '',
      title: '',
      associate: '',
      projectURL: '',
      desription: '',
      authors: [],
    };
  }
  updateToDB() {
    const pub = {
      title: this.state.title,
      isCurrentWorking: this.state.isCurrentWorking,
      creators: this.state.authors,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      url: this.state.projectURL,
      description: this.state.desription,
    };

    // console.log(exp);
    this.props.postData(pub);
    Alert.alert('Poject Added Successfully');
    this.props.navigation.goBack();
  }
  renderAuthorLisItem = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 0,
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Image
          style={{height: 24, width: 24, borderRadius: 12}}
          source={userThumb}
          resizeMode="cover"
        />
        <TextInput
          style={{marginLeft: 10, flex: 1, color: '#000', fontSize: 15}}
          placeholderTextColor="#666"
          placeholder="Enter Creators Name"
          value={item.name}
          onChangeText={text => {
            item.name = text;
            this.setState({authors: this.state.authors});
          }}
        />
        <Icon
          name="close"
          type="MaterialCommunityIcons"
          style={{fontSize: 25, color: '#000'}}
          onPress={() => {
            let authorsList = [...this.state.authors];
            let newList = authorsList.splice(index, 1);
            this.setState({authors: authorsList});
          }}
        />
      </View>
    );
  };

  handleStartDatePicked = date => {
    const start = moment(date).format('MMM YYYY');
    this.setState({startDatePickerVisible: false, startDate: start});
  };

  handleEndDatePicked = date => {
    const end = moment(date).format('MMM YYYY');
    this.setState({endDatePickerVisible: false, endDate: end});
  };

  render() {
    const navigation = this.props.navigation;
    const {
      currentlyWorking,
      startDatePickerVisible,
      endDatePickerVisible,
      startDate,
      endDate,
      title,
      associate,
      projectURL,
      desription,
      authors,
    } = this.state;
    let headerStyle = {height: 64, paddingTop: 20};
    if (DeviceInfo.hasNotch()) {
      headerStyle = {height: 85, paddingTop: 35};
    }
    const minEndDate =
      startDate.length > 0 ? new Date(startDate) : new Date('January 1960');

    let pageTitle = 'Add Projects';
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
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              testID="sideMenuButton"
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
              placeholder="Project Title"
              placeholderTextColor="#666"
              style={styles.textInput}
              value={title}
              onChangeText={text => this.setState({title: text})}
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
                I am currently working in this project
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

            <Text style={{fontSize: 15, color: '#000', marginTop: 15}}>
              Creators
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 0,
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Image
                style={{height: 24, width: 24, borderRadius: 12}}
                source={userImage}
                resizeMode="contain"
              />
              <Text
                style={{
                  marginLeft: 10,
                  flex: 1,
                  color: '#000',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Darshit Zalavadiya
              </Text>
            </View>
            <FlatList
              data={authors}
              renderItem={this.renderAuthorLisItem}
              style={{flexGrow: 0}}
            />
            {authors.length < 9 && (
              <View
                style={{
                  marginHorizontal: 0,
                  flexDirection: 'row',
                  marginTop: 15,
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 15, color: '#666', flex: 1}}>
                  You can add {9 - authors.length} more Creators
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({authors: [...authors, {name: ''}]});
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#007bff',
                      fontWeight: 'bold',
                    }}>
                    Add Creators
                  </Text>
                </TouchableOpacity>
              </View>
            )}

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
            <TextInput
              placeholder="Project URL"
              placeholderTextColor="#666"
              style={[styles.textInput, {marginTop: 15}]}
              value={projectURL}
              onChangeText={text => this.setState({projectURL: text})}
            />
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

// export default AddProject;
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    postData: pub => {
      dispatch(AddProjectData(pub));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProject);
