import React, { Component } from "react";
import { Text, Image, FlatList } from "react-native";
import DeviceInfo from 'react-native-device-info';
import {
  Container,
  Content,
  Thumbnail,
  Header,
  Left,
  Button,
  Icon,
  Title,
  Right,
  Body,
  List,
  ListItem
} from "native-base";
import data from "./data";
import styles from "./styles";
import Color from "../../Helper/Color";

const chatContactsImg = require("../../../assets/images/chatcontacts.png");

class Notifications extends Component {
  render() {
    const navigation = this.props.navigation;

    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }

    return (
      <Container testID="notificationScreen" style={{ backgroundColor: Color.WHITE }}>
        <Content style={styles.content}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({ item, index }) => {
              return (
                <ListItem
                  button
                  thumbnail
                  style={{
                    ...styles.listItem,
                    ...{ backgroundColor: item.bg }
                  }}
                >
                  <Left>
                    <Thumbnail square source={item.thumbnail} />
                  </Left>
                  <Body>
                    <Text style={styles.nameText}>
                      {item.post}
                    </Text>
                    <Text style={styles.timeText}>
                      {item.time}
                    </Text>
                  </Body>
                  <Right />
                </ListItem>
              )
            }}
          />
        </Content>
      </Container>
    );
  }
}

export default Notifications;
