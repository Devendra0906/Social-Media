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
import countryList from './countriesList';
import Color from '../../../Helper/Color';

const userImage = require('./../../../../assets/images/contacts/thanos.jpg');
const userThumb = require('./../../../../assets/images/user_thumb.png');
import {AddPatentData} from '../../../__Redux/__actions/profileActions';
import {connect} from 'react-redux';
import {Alert} from 'react-native';
class AddPatent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDatePickerVisible: false,
      startDate: '',
      title: '',
      patentOffice: '',
      applicationNumber: '',
      publicationURL: '',
      desription: '',
      authors: [],
      patentStatus: true,
    };
  }
  updateToDB() {
    const pub = {
      title: this.state.title,
      office: this.state.patentOffice,
      applicationNumber: this.state.applicationNumber,
      inventors: this.state.authors,
      isIssued: this.state.patentStatus,
      filingDate: this.state.startDate,
      url: this.state.publicationURL,
      description: this.state.desription,
    };

    console.log(pub);
    this.props.postData(pub);
    Alert.alert('Publication Added Successfully');
    this.props.navigation.goBack();
  }
  handleStartDatePicked = date => {
    const start = moment(date).format('MMM YYYY');
    this.setState({startDatePickerVisible: false, startDate: start});
  };

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
          placeholder="Enter Inventor Name"
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

  render() {
    const navigation = this.props.navigation;
    const {
      startDatePickerVisible,
      startDate,
      title,
      patentOffice,
      applicationNumber,
      publicationURL,
      desription,
      authors,
      patentStatus,
    } = this.state;
    let headerStyle = {height: 64, paddingTop: 20};
    if (DeviceInfo.hasNotch()) {
      headerStyle = {height: 85, paddingTop: 35};
    }

    let pageTitle = 'Add Patent';
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
              placeholder="Title"
              placeholderTextColor="#666"
              style={styles.textInput}
              value={title}
              onChangeText={text => this.setState({title: text})}
            />
            <Dropdown
              rippleOpacity={0}
              data={countryList}
              textColor={'#000'}
              baseColor={'#000'}
              value={patentOffice}
              onChangeText={label => {
                this.setState({patentOffice: label});
              }}
              renderBase={({props, title, value, renderAccessory}) => {
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
                      placeholder="Patent Office"
                      placeholderTextColor="#666"
                      style={{
                        flex: 1,
                        marginHorizontal: 0,
                        paddingVertical: 8,
                        fontSize: 15,
                      }}
                      value={patentOffice}
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
              placeholder="Patent or application number"
              placeholderTextColor="#666"
              style={[styles.textInput, {marginTop: 15}]}
              value={applicationNumber}
              onChangeText={text => this.setState({applicationNumber: text})}
            />

            <Text style={{fontSize: 15, color: '#000', marginTop: 15}}>
              Inventor
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 0,
                alignItems: 'center',
                marginTop: 10,
              }}
            />
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
                  You can add {9 - authors.length} more inventor
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
                    Add Inventor
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            <Text style={{fontSize: 15, color: '#000', marginTop: 15}}>
              Status
            </Text>
            <View style={{marginVertical: 5}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 0,
                  alignItems: 'center',
                  marginVertical: 5,
                }}
                onPress={() => {
                  this.setState({patentStatus: 'issued'});
                }}>
                <Icon
                  name={
                    patentStatus === 'issued'
                      ? 'radiobox-marked'
                      : 'radiobox-blank'
                  }
                  type="MaterialCommunityIcons"
                  style={{fontSize: 20, color: '#000'}}
                />
                <Text
                  style={{
                    marginLeft: 10,
                    flex: 1,
                    color: '#000',
                    fontSize: 15,
                  }}>
                  Patent Issues
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 0,
                  alignItems: 'center',
                  marginVertical: 5,
                }}
                onPress={() => {
                  this.setState({patentStatus: 'panding'});
                }}>
                <Icon
                  name={
                    patentStatus === 'issued'
                      ? 'radiobox-blank'
                      : 'radiobox-marked'
                  }
                  type="MaterialCommunityIcons"
                  style={{fontSize: 20, color: '#000'}}
                />
                <Text
                  style={{
                    marginLeft: 10,
                    flex: 1,
                    color: '#000',
                    fontSize: 15,
                  }}>
                  Patent Pending
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 0,
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => this.setState({startDatePickerVisible: true})}>
                  <TextInput
                    placeholder="Filling Date"
                    placeholderTextColor="#666"
                    style={[styles.textInput]}
                    pointerEvents="none"
                    editable={false}
                    value={startDate}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TextInput
              placeholder="Publication URL"
              placeholderTextColor="#666"
              style={[styles.textInput, {marginTop: 15}]}
              value={publicationURL}
              onChangeText={text => this.setState({publicationURL: text})}
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
      </Container>
    );
  }
}

// export default AddPatent;
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    postData: pub => {
      dispatch(AddPatentData(pub));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPatent);
