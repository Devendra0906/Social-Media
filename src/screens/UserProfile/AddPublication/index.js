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
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {AddPublicationData} from '../../../__Redux/__actions/profileActions';
import {connect} from 'react-redux';
import {Alert} from 'react-native';
import styles from './styles';
import Color from '../../../Helper/Color';

const userImage = require('./../../../../assets/images/contacts/thanos.jpg');
const userThumb = require('./../../../../assets/images/user_thumb.png');

class AddPublication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDatePickerVisible: false,
      startDate: '',
      title: '',
      publication: '',
      publicationURL: '',
      desription: '',
      authors: [],
    };
  }

  handleStartDatePicked = date => {
    const start = moment(date).format('MMM YYYY');
    this.setState({startDatePickerVisible: false, startDate: start});
  };
  updateToDB() {
    const pub = {
      title: this.state.title,
      publication: this.state.publication,
      date: this.state.startDate,
      authors: this.state.authors,
      url: this.state.publicationURL,
      description: this.state.desription,
    };

    // console.log(exp);
    this.props.postData(pub);
    Alert.alert('Publication Added Successfully');
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
          placeholder="Enter Author Name"
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
      publication,
      publicationURL,
      desription,
      authors,
    } = this.state;
    let headerStyle = {height: 64, paddingTop: 20};
    if (DeviceInfo.hasNotch()) {
      headerStyle = {height: 85, paddingTop: 35};
    }

    let pageTitle = 'Add Publication';
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
            <TextInput
              placeholder="Publication/Publisher"
              placeholderTextColor="#666"
              style={[styles.textInput, {marginTop: 15}]}
              value={publication}
              onChangeText={text => this.setState({publication: text})}
            />
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
                    placeholder="Publication Date"
                    placeholderTextColor="#666"
                    style={[styles.textInput]}
                    pointerEvents="none"
                    editable={false}
                    value={startDate}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{fontSize: 15, color: '#000', marginTop: 15}}>
              Author
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 0,
                alignItems: 'center',
                marginVertical: 10,
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
                  You can add {9 - authors.length} more authors
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
                    Add Author
                  </Text>
                </TouchableOpacity>
              </View>
            )}
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

// export default AddPublication;
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    postData: pub => {
      dispatch(AddPublicationData(pub));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPublication);
