import React, { Component } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import DeviceInfo from 'react-native-device-info';
import {
  Container, Content, Icon, Thumbnail, Title
} from "native-base";

import { didUpdateTagUsers } from './../../actions/index';
import data from "./../AddGroup/data";
import styles from "./styles";
import Color from "../../Helper/Color";
import localizedStrings from '../../Helper/LocalisedString'

class TagMembers extends Component {

  constructor(props) {
    super(props)

    this.state = { members: data }

    props.navigation.setOptions({
      title: `${localizedStrings.tagMembers.tagMembers}`,
      headerLeft: () => (
        <TouchableOpacity
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          style={{ marginLeft: 16 }}
          onPress={() => props.navigation.goBack()}
        >
          <Icon name='ios-arrow-back' color={'#000'} size={25} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 16 }}
          onPress={() => props.navigation.goBack()}>
          <Title style={{ color: "#000" }}>{localizedStrings.tagMembers.done}</Title>
        </TouchableOpacity>
      )
    })
  }

  handleTextChangeEvent = (text) => {
    if (text === "") {
      this.setState({ members: data })
    } else {
      let filteredData = data.filter(item => {
        return item.name.includes(text)
      });
      this.setState({ members: filteredData })
    }
  }

  render() {
    const navigation = this.props.navigation;
    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }
    return (
      <Container testID="groupList" style={{ backgroundColor: Color.WHITE }}>
        <View style={{ backgroundColor: '#ddd' }}>
          <TextInput style={{ height: 40, fontSize: 16, backgroundColor: '#fff', paddingHorizontal: 10, marginBottom: 1 }}
            placeholder={localizedStrings.tagMembers.searchGroups}
            placeholderTextColor='#ddd'
            onChangeText={(text) => { this.handleTextChangeEvent(text) }}
          />
        </View>
        <Content style={styles.content}>
          <View style={styles.requestContainerTwoView}>
            <FlatList
              style={{ marginTop: 10 }}
              data={this.state.members}
              renderItem={({ item }) => {
                let contain = this.props.users.indexOf(item) !== -1;
                return (
                  <TouchableOpacity style={{ paddingHorizontal: 10, marginBottom: 8 }} onPress={() => {
                    this.props.updateTagUsers(item);
                  }}>
                    <View style={styles.requestContainerInnerView}>
                      <Icon name={contain ? "radio-button-checked" : "radio-button-unchecked"} type='MaterialIcons' style={{ color: '#aaa', alignSelf: 'center', fontSize: 25, marginRight: 10 }} />
                      <Thumbnail square small source={item.thumbnail} />
                      <View style={{ marginLeft: 15, justifyContent: 'center', flex: 1 }}>
                        <Text style={styles.nameText}>
                          {item.name}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
              extraData={this.props.users}
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
    updateTagUsers: user => dispatch(didUpdateTagUsers(user))
  }
}

const mapStateToProps = state => {
  return {
    users: state.postReducer.users,
  }
};

export default connect(mapStateToProps, bindAction)(TagMembers);