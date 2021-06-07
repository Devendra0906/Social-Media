import React, { Component } from "react";
import { Image, View, Switch, Text, FlatList } from "react-native";
import DeviceInfo from 'react-native-device-info';
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Content,
  Button,
  Icon,
  Thumbnail,
  Title,
  List,
  Item,
  Input,
  ListItem
} from "native-base";
import PropTypes from "prop-types";
import styles from "./styles";
import dataNearByFriends from "./data1";
import dataFriendsTraveling from "./data2";
import Color from "../../Helper/Color";

const commonColor = require("../../theme/variables/commonColor");

const chatContactsImg = require("../../../assets/images/chatcontacts.png");
const profileImg = require("../../../assets/images/contacts/sanket.png");

class NearByFriends extends Component {
  // state: {
  //   locationSwitch: true
  // };
  static propTypes = {
    openDrawer: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      locationSwitch: true
    };
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
              <Icon active type='Ionicons' name="ios-arrow-back" style={{ color: "#000" }} />
            </Button>
          </Left>
          <Body style={{ flex: 1.5 }}>
            <Title style={{ color: "#000" }}>Nearby Friends</Title>
          </Body>
          <Right>
            <Button
              transparent
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              onPress={() => { navigation.goBack() }}
            >
              <Image source={chatContactsImg} style={styles.sidebarIcon} />
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
          <View style={styles.searchContainerView}>
            <View style={styles.searchView}>
              <Item style={{ borderBottomWidth: 0 }}>
                <Icon name="ios-search" style={styles.searchIcon} />
                <Input
                  placeholder="Search"
                  placeholderTextColor={commonColor.lightTextColor}
                  style={{ color: "#000" }}
                />
              </Item>
            </View>
            <View style={styles.inviteBtnView}>
              <Button transparent>
                <Icon active name="person-add" style={styles.inviteIcon} />
                <Text style={styles.inviteBtnText}>Invite</Text>
              </Button>
            </View>
          </View>

          <View style={styles.userContainerView}>
            <Text style={styles.menuHeaderText}>My Location</Text>
            <ListItem button thumbnail noBorder>
              <Left>
                <Thumbnail circle source={profileImg} />
              </Left>
              <Body style={{ borderBottomWidth: 0 }}>
                <Text style={styles.userNameText}>Sanket Sahu</Text>
                <Text style={styles.locationText}>JP Nagar, Bangalore</Text>
              </Body>
              <Right style={{ borderBottomWidth: 0, paddingRight: 7 }}>
                <Switch
                  onValueChange={value =>
                    this.setState({ locationSwitch: value })}
                  onTintColor={commonColor.brandSuccess}
                  // thumbTintColor={"#bbb"}
                  tintColor={commonColor.brandSuccess}
                  value={this.state.locationSwitch}
                  style={styles.switch}
                />
              </Right>
            </ListItem>
          </View>

          <View style={styles.userContainerView}>
            <Text style={styles.menuHeaderText}>
              Near Bannerghatta, Bangalore
            </Text>
            <FlatList
              data={dataNearByFriends}
              keyExtractor={(item, index) => `${index}`}
              renderItem={({ item, index }) => {
                return (
                  <ListItem button thumbnail noBorder>
                    <Left>
                      <Thumbnail circle source={item.thumbnail} />
                    </Left>
                    <Body style={{ borderBottomWidth: 0 }}>
                      <Text style={styles.userNameText}>
                        {item.name}
                      </Text>
                      <Text style={styles.locationText}>
                        {item.location}
                      </Text>
                      <Text style={styles.distanceText}>
                        {item.distance}
                      </Text>
                    </Body>
                    <Right style={{ borderBottomWidth: 0 }}>
                      <Icon
                        active
                        name="hand"
                        style={{
                          ...{ color: item.iconColor }
                        }}
                      />
                    </Right>
                  </ListItem>
                )
              }}
            />
            <Button full transparent style={styles.seeMoreBtn}>
              <Text style={{ color: commonColor.lightTextColor }}>See More</Text>
            </Button>
          </View>

          <View style={styles.userContainerView}>
            <Text style={styles.menuHeaderText}>Friends Traveling</Text>
            <FlatList
              data={dataFriendsTraveling}
              keyExtractor={(item, index) => `${index}`}
              renderItem={({ item, index }) => {
                return (
                  <ListItem button thumbnail noBorder>
                    <Left>
                      <Thumbnail circle source={item.thumbnail} />
                    </Left>
                    <Body style={{ borderBottomWidth: 0 }}>
                      <Text style={styles.userNameText}>
                        {item.name}
                      </Text>
                      <Text style={styles.locationText}>
                        {item.location}
                      </Text>
                      <Text style={styles.distanceText}>
                        {item.distance}
                      </Text>
                    </Body>
                    <Right style={{ borderBottomWidth: 0 }}>
                      <Icon
                        active
                        name="chatbubbles"
                        style={{
                          ...{ color: item.iconColor }
                        }}
                      />
                    </Right>
                  </ListItem>
                )
              }}
            />
            <Button full transparent style={styles.seeMoreBtn}>
              <Text style={{ color: commonColor.lightTextColor }}>See More</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default NearByFriends;
