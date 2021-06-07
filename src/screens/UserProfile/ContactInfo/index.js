import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import DeviceInfo from 'react-native-device-info';
import { Container, Content, Icon } from "native-base";
import { Header } from "react-native-elements";

import styles from "./styles";
import Color from "../../../Helper/Color";

class ContactInfo extends Component {

  constructor(props) {
    super(props)

  }

  renderSeparator = () => {
    return (
      <View style={{ marginHorizontal: 0, height: 0.5, backgroundColor: Color.LIGHT_GREY }} />
    )
  }

  render() {
    const navigation = this.props.navigation;
    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }
    return (
      <Container style={{ backgroundColor: Color.WHITE }}>
        <Header
          containerStyle={[{
            backgroundColor: Color.WHITE,
            paddingTop: 0,
            elevation: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 2,
            shadowOpacity: 0.3,
            shadowColor: Color.SHADOW,
            marginBottom: 5
          }, headerStyle]}
          leftComponent={(
            <TouchableOpacity
              testID="sideMenuButton"
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              onPress={() => navigation.goBack()}
            >
              <Icon name="arrow-back" style={{ color: Color.BLACK }} />
            </TouchableOpacity>)}
          centerComponent={{ text: "Darshit Zalavadiya", style: { color: Color.BLACK, fontSize: 17, fontWeight: 'bold' } }}
        />
        <Content style={{ padding: 15 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: Color.BLACK }}>
            Contact Info
          </Text>
          <View style={{ marginTop: 15, flexDirection: 'row' }}>
            <Icon name='envelope' type='FontAwesome' style={{ fontSize: 20, color: Color.BLACK }} />
            <View style={{ marginLeft: 8 }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: Color.BLACK }}>
                Email
              </Text>
              <Text style={{ fontSize: 13, color: Color.BLACK, marginTop: 2 }}>
                darshit.devstree@gmail.com
              </Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default ContactInfo;
