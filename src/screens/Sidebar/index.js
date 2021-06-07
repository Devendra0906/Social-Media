import React, { Component } from "react";
import { View, NativeModules, Image, FlatList } from "react-native";
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  Content,
  Text,
  Icon,
  Left,
  Right,
  Body,
  ListItem,
  Thumbnail
} from "native-base";
import PropTypes from "prop-types";
import { CommonActions } from "@react-navigation/native";
import data from "./data";
import styles from "./style";
import Color from "../../Helper/Color";

const StorageManager = NativeModules.StorageManager;
const profileImg = require("../../../assets/images/contacts/ironman.jpeg");
const userData = [
  {
    thumbnail: profileImg,
    name: "Sanket Sahu",
    description: "View your profile",
    link: "Profile"
  }
];

const menuItems = [
  {
    link: "Home",
    icon: require('../../../assets/images/news_feed.png'),
    text: "News Feed",
  },
  {
    link: "Events",
    icon: require('../../../assets/images/event.png'),
    text: "Events"
  },
  {
    link: "Friends",
    icon: require('../../../assets/images/group.png'),
    text: "Groups"
  },
  {
    link: "BatterMeDashboard",
    icon: require('../../../assets/images/personal_growth.png'),
    text: "Better Me"
  },
  {
    link: "TakePartDashboard",
    icon: require('../../../assets/images/charity.png'),
    text: "Take Part"
  },
  {
    link: "StarMeUpDashboard",
    icon: require('../../../assets/images/appreciation.png'),
    text: "StarMe Up"
  }
];

class SideBar extends Component {
  render() {
    const navigation = this.props.navigation;
    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }
    return (
      <Container style={{ backgroundColor: Color.WHITE }}>
        <Content style={styles.drawerContent}>
          <FlatList
            style={{ marginTop: 10 }}
            data={userData}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({ item, index }) => {
              return (
                <ListItem
                  button
                  thumbnail
                  noBorder
                  onPress={() => {
                    item.link.length > 0 && navigation.navigate(item.link)
                  }}
                  style={styles.userDataListitem}
                >
                  <Left>
                    <Thumbnail square source={item.thumbnail} />
                  </Left>
                  <Body style={{ borderBottomWidth: 0 }}>
                    <Text style={styles.userDataNameText}>
                      {item.name}
                    </Text>
                    <Text style={styles.userDataDescriptionText}>
                      {item.description}
                    </Text>
                  </Body>
                  <Right style={{ borderBottomWidth: 0, paddingLeft: 5 }}>
                    <Icon
                      name="ios-arrow-forward"
                      style={styles.userDataArrowIcon}
                    />
                  </Right>
                </ListItem>
              )
            }}
          />

          <View style={styles.menuHeadView}>
            <FlatList
              style={{ marginTop: 10 }}
              data={menuItems}
              keyExtractor={(item, index) => `${index}`}
              renderItem={({ item, index }) => {
                return (
                  <ListItem
                    button
                    iconLeft
                    noBorder
                    style={{ paddingTop: 8, paddingBottom: 4 }}
                    onPress={() => {
                      menuItemRow.link.length > 0 && navigation.navigate(menuItemRow.link)
                    }}
                  >
                    <Image source={menuItemRow.icon} style={styles.menuIconContainerView} />
                    <Text style={styles.menuItemText}>
                      {menuItemRow.text}
                    </Text>
                  </ListItem>
                )
              }}
            />

            <ListItem button iconLeft noBorder
              style={{ paddingTop: 5 }}
              onPress={() => {
                // StorageManager.removeObjectForKey("APP_TOKEN")
                //   .then(() => { });
                // StorageManager.removeObjectForKey("USER_DETAILS")
                //   .then(() => { });
                AsyncStorage.setItem('IS_LOGIN', "fasle")
                  .then(() => {
                    this.props.navigation.dispatch(
                      CommonActions.reset({
                        index: 0,
                        routes: [
                          { name: 'Login' },
                        ]
                      })
                    );
                  })
              }}
            >
              <Image source={require('../../../assets/images/logout.png')} style={styles.menuIconContainerView} />
              <Text style={styles.menuItemText}>
                Log Out
              </Text>
            </ListItem>
          </View>
        </Content>
      </Container>
    );
  }
}

export default SideBar;
