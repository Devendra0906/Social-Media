import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {connect} from 'react-redux';
import {Header} from 'react-native-elements';
import {Container, Input, Icon, Thumbnail, Title, ListItem} from 'native-base';

import {
  userHasSelected,
  didUpdateGroupName,
  didUpdateGroupdescription,
  resetGroupData,
} from './../actions';
import styles from './styles';
import localizedStrings from '../../../Helper/LocalisedString';

let camImage = require('./../../../../assets/images/camera.png');
class CreateGroup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navigation = this.props.navigation;
    let headerStyle = {height: 64, paddingTop: 20};
    if (DeviceInfo.hasNotch()) {
      headerStyle = {height: 85, paddingTop: 35};
    }
    return (
      <Container testID="createGroupScreen" style={{backgroundColor: '#fff'}}>
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
              testID="btnBack"
              onPress={() => navigation.goBack()}>
              <Icon name="ios-arrow-back" style={{color: '#000'}} />
            </TouchableOpacity>
          }
          centerComponent={{
            text: 'Review',
            style: {color: '#000', fontSize: 17, fontWeight: 'bold'},
          }}
          rightComponent={
            <TouchableOpacity
              testID="btnCreateGroup"
              onPress={() => {
                this.props.resetGroup();
                navigation.popToTop();
              }}>
              <Text style={{fontSize: 15, color: '#000'}}>
                {localizedStrings.createGroup.create}
              </Text>
            </TouchableOpacity>
          }
        />
        <ScrollView style={{flex: 1}}>
          <View style={{backgroundColor: '#ddd'}}>
            <Title style={styles.title}>
              {localizedStrings.createGroup.groupName}
            </Title>
            <View style={styles.groupNameContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('GroupCoverPhoto')}>
                <Image
                  style={styles.groupImage}
                  source={this.props.groupImage}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <Input
                placeholder={
                  localizedStrings.createGroup.financeLeadPlaceholder
                }
                placeholderTextColor={'#bbb'}
                style={styles.searchPlaceholder}
                value={this.props.groupName}
                onChangeText={(text) => {
                  this.props.didUpdateGroupName(text);
                }}
              />
            </View>
          </View>
          <View style={{backgroundColor: '#ddd'}}>
            <Title style={styles.title}>
              {localizedStrings.createGroup.groupType}
            </Title>
            <TouchableHighlight
              onPress={() => navigation.navigate('GroupSettings')}>
              <View style={[styles.groupNameContainer, {marginBottom: 0}]}>
                <View style={{flex: 1}}>
                  <Text style={styles.subHeader}>
                    {this.props.selectedSetting.title}
                  </Text>
                  <Text style={styles.detailText}>
                    {this.props.selectedSetting.desctiption}
                  </Text>
                </View>
                <Icon
                  name="ios-arrow-down"
                  style={{color: '#000', marginLeft: 10}}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => navigation.navigate('GroupVisibilitySettings')}>
              <View style={styles.groupNameContainer}>
                <View style={{flex: 1}}>
                  <Text style={styles.subHeader}>
                    {this.props.visibility.title}
                  </Text>
                  <Text style={styles.detailText}>
                    {this.props.visibility.desctiption}
                  </Text>
                </View>
                <Icon
                  name="ios-arrow-down"
                  style={{color: '#000', marginLeft: 10}}
                />
              </View>
            </TouchableHighlight>
          </View>
          <View style={{backgroundColor: '#ddd'}}>
            <Title style={styles.title}>
              {localizedStrings.createGroup.description}
            </Title>
            <View style={styles.groupNameContainer}>
              <Input
                multiline
                placeholder={
                  localizedStrings.createGroup.descriptionPlaceholder
                }
                placeholderTextColor={'#bbb'}
                style={[
                  styles.searchPlaceholder,
                  {
                    borderBottomColor: '#bbb',
                    borderBottomWidth: 1,
                    marginBottom: 10,
                    height: 60,
                  },
                ]}
                value={this.props.groupDescription}
                onChangeText={(text) => {
                  this.props.didUpdateGroupdescription(text);
                }}
              />
            </View>
          </View>
          <View style={{backgroundColor: '#ddd'}}>
            <Title style={styles.title}>
              {localizedStrings.createGroup.groupMembers}
            </Title>
            <View style={[styles.groupNameContainer, {paddingHorizontal: 0}]}>
              <FlatList
                data={this.props.selectedMembers}
                ListFooterComponent={this.renderHoursFooter}
                style={{flexGrow: 0}}
                scrollEnabled={false}
                renderItem={({item}) => {
                  return (
                    <ListItem>
                      <View style={styles.requestContainerInnerView}>
                        <Thumbnail small source={item.thumbnail} />
                        <Text style={styles.nameText}>{item.name}</Text>
                      </View>
                    </ListItem>
                  );
                }}
                keyExtractor={(item, index) => `${index}`}
              />
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    didUpdateGroupName: (name) => dispatch(didUpdateGroupName(name)),
    didUpdateGroupdescription: (description) =>
      dispatch(didUpdateGroupdescription(description)),
    resetGroup: () => dispatch(resetGroupData()),
  };
}

const mapStateToProps = (state) => {
  return {
    selectedMembers: state.groupMembersReducer.selectedMembers,
    selectedSetting: state.groupMembersReducer.selectedSetting,
    visibility: state.groupMembersReducer.visibility,
    groupImage: state.groupMembersReducer.groupImage,
    groupName: state.groupMembersReducer.groupName,
    groupDescription: state.groupMembersReducer.groupDescription,
  };
};

export default connect(mapStateToProps, bindAction)(CreateGroup);
