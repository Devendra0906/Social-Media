import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {connect} from 'react-redux';
import {Header} from 'react-native-elements';
import {
  Container,
  Input,
  Content,
  Icon,
  Thumbnail,
  ListItem,
} from 'native-base';

import {userHasSelected} from '../../actions';
import data from './data';
import styles from './styles';
import Color from '../../Helper/Color';
import localizedStrings from '../../Helper/LocalisedString';

class AddGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: data,
      searchText: '',
    };

    this.route = this.props.route.params.route;
  }
  componentDidMount() {
    // this.props.getList();
    // console.log('add grp red', this.props.state.addGroupReducer);
  }
  renderRowItem = dataRow => {
    // let contain = this.props.selectedMembers.indexOf(dataRow) !== -1;
    let contain = 1;
    return (
      <ListItem
        onPress={() => {
          if (this.route && this.route === 'addEvent') {
            this.props.userSelected(dataRow, true);
          } else if (this.route && this.route === 'giveStar') {
            this.props.userSelected(dataRow, false);
          } else {
            this.props.userSelected(dataRow, true);
          }
        }}>
        <View style={styles.requestContainerInnerView}>
          <Thumbnail small source={dataRow.thumbnail} />
          <Text style={styles.nameText}>{dataRow.name}</Text>
          {contain ? (
            <Image
              source={require('../../../assets/images/checked-checkbox.png')}
              style={{height: 20, width: 20, tintColor: '#666'}}
            />
          ) : (
            <Image
              source={require('../../../assets/images/unchecked-checkbox.png')}
              style={{height: 20, width: 20, tintColor: '#666'}}
            />
          )}
        </View>
      </ListItem>
    );
  };

  renderSelectedMembers() {
    // console.log(this.props);
    if (this.props.selectedMembers.length > 0) {
      return (
        <FlatList
          testID="selectedUsersList"
          style={{
            backgroundColor: Color.WHITE,
            paddingHorizontal: 10,
            marginTop: 1,
          }}
          data={this.props.selectedMembers}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            let firstName = item.name.split(' ')[0];
            return (
              <View
                style={{
                  marginTop: 10,
                  marginRight: 10,
                  alignItems: 'center',
                  maxWidth: 100,
                  paddingHorizontal: 5,
                }}>
                <Thumbnail small source={item.thumbnail} />
                <Text style={{fontSize: 12, marginTop: 5, marginBottom: 10}}>
                  {firstName}
                </Text>
              </View>
            );
          }}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    const navigation = this.props.navigation;
    let headerStyle = {height: 64, paddingTop: 20};
    if (DeviceInfo.hasNotch()) {
      headerStyle = {height: 85, paddingTop: 35};
    }
    let title = `${localizedStrings.addGroup.postToGroup}`;
    if (this.route && this.route === 'addEvent') {
      title = `${localizedStrings.addGroup.selectColleague}`;
    } else if (this.route && this.route === 'giveStar') {
      title = `${localizedStrings.addGroup.selectColleague}`;
    }
    return (
      <Container testID="addGroupScreen" style={{backgroundColor: Color.WHITE}}>
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
              testID="sideMenuButton"
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              onPress={() => navigation.goBack()}>
              <Icon name="ios-arrow-back" style={{color: Color.BLACK}} />
            </TouchableOpacity>
          }
          centerComponent={{
            text: title,
            style: {color: Color.BLACK, fontSize: 17, fontWeight: 'bold'},
          }}
          rightComponent={
            <TouchableOpacity
              testID="btnReviewGroup"
              onPress={() => {
                if (this.route && this.route === 'addEvent') {
                  navigation.goBack();
                } else if (this.route && this.route === 'giveStar') {
                  navigation.navigate('SendStar', {
                    selectedType: this.props.route.params.selectedType,
                    selecedGroups: this.props.selectedMembers,
                    route: this.route,
                  });
                } else {
                  navigation.navigate('CreateGroup');
                }
              }}>
              <Text style={{fontSize: 15, color: Color.BLACK}}>
                {localizedStrings.addGroup.next}
              </Text>
            </TouchableOpacity>
          }
        />

        <Content style={styles.content}>
          <View style={styles.requestContainerTwoView}>
            <View style={{backgroundColor: '#efefef'}}>
              <Text style={styles.requestContainerTwoText}>
                {localizedStrings.addGroup.startBy}
              </Text>
            </View>
            <View style={{backgroundColor: '#efefef', paddingBottom: 10}}>
              <Input
                placeholder={localizedStrings.addGroup.emailPlaceholder}
                placeholderTextColor={'#bbb'}
                style={styles.searchPlaceholder}
                value={this.state.searchText}
                onChangeText={text => {
                  let allUsers = data;
                  if (text === '') {
                    this.setState({userList: data, searchText: text});
                  } else {
                    const filteredList = allUsers.filter(value => {
                      return value.name.includes(text);
                    });
                    this.setState({userList: filteredList, searchText: text});
                  }
                }}
              />
              {this.renderSelectedMembers()}
            </View>
            <FlatList
              data={this.state.userList}
              renderItem={({item}) => this.renderRowItem(item)}
              extraData={this.props.selectedMembers}
              keyExtractor={(item, index) => `${index}`}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    userSelected: (user, isMulti) => dispatch(userHasSelected(user, isMulti)),
  };
}

const mapStateToProps = state => {
  return {
    selectedMembers: state.addGroupReducer,
    getList: () => {
      dispatch(fetchList());
    },
  };
};

export default connect(
  mapStateToProps,
  bindAction,
)(AddGroup);
