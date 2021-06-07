import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import DeviceInfo from 'react-native-device-info';
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Left,
  Right,
  Body,
  Button,
  Icon,
  Thumbnail,
  Title,
  List,
  ListItem
} from "native-base";

import data from "./data";
import styles from "./styles";
import { didSelectGroupSettngs } from '../../actions'
import Color from "../../Helper/Color";

class GroupSettings extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    const navigation = this.props.navigation;
    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }
    return (
      <Container style={{ backgroundColor: Color.WHITE }}>
        <Header style={headerStyle}>
          <Left>
            <Button
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              transparent
              onPress={() => navigation.goBack()}>
              <Icon type='Ionicons' name="ios-arrow-back" style={{ color: "#000" }} />
            </Button>
          </Left>
          <Body style={{ flex: 2 }}>
            <Title style={{ color: "#000" }}>Group Settings</Title>
          </Body>
          <Right>
            {/* <Button transparent onPress={() => navigation.navigate("AddGroup")}>
              <Icon name="md-add" style={{ color: "#000" }} />
            </Button> */}
          </Right>
        </Header>
        <Content style={styles.content}>
          <View style={{ backgroundColor: '#ddd' }}>
            <Title style={styles.title}>Group Type</Title>
          </View>
          <FlatList
            data={data}
            renderItem={({ item, index }) => {
              let contain = item === this.props.selectedSettings
              return (
                <TouchableOpacity onPress={() => { this.props.settingSelected(item) }}>
                  <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 5, flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50, borderRadius: 25 }} source={item.image} />
                    <View style={{ flex: 1, marginVertical: 5, marginLeft: 10 }}>
                      <Text style={{ fontSize: 15, fontWeight: '500' }}>
                        {item.title}
                      </Text>
                      <Text style={{ fontSize: 13, fontWeight: '400' }}>
                        {item.desctiption}
                      </Text>
                    </View>
                    <Icon style={{ width: 30, height: 30, marginLeft: 10, color: '#00f' }} name={contain ? 'md-checkmark' : ""} />
                  </View>
                </TouchableOpacity>
              )
            }}
            keyExtractor={(item, index) => `${index}`}
            extraData={this.props.selectedSettings}
          />
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    settingSelected: setting => dispatch(didSelectGroupSettngs(setting))
  };
}

const mapStateToProps = state => {
  return {
    selectedSettings: state.groupMembersReducer.selectedSetting
  }
};

export default connect(mapStateToProps, bindAction)(GroupSettings);
