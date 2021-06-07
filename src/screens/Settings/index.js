import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image, FlatList } from "react-native";
import DeviceInfo from 'react-native-device-info';
import { connect } from "react-redux";
import {
  Container,
  Content,
  Icon,
  ListItem,
  Thumbnail
} from "native-base";
import { CommonActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import { itemsFetchData } from "../../actions";
import datas from "./data";
import styles from "./styles";
import localizedStrings from '../../Helper/LocalisedString';
import Color from "../../Helper/Color";

const chatContactsImg = require("../../../assets/images/chatcontacts.png");
const profileImg = require("../../../assets/images/contacts/sanket.png");

const menuItems = [
  // {
  //   link: "Home",
  //   icon: require('../../../assets/images/news_feed.png'),
  //   text: "News Feed",
  // },
  {
    link: "AIBot",
    icon: require('../../../assets/images/myAssistant.png'),
    text: "My Assistant"
  },
  {
    link: "Events",
    icon: require('../../../assets/images/event.png'),
    text: localizedStrings.settings.events
  },
  // {
  //   link: "Friends",
  //   icon: require('../../../assets/images/group.png'),
  //   text: "Groups"
  // },
  {
    link: "BatterMeDashboard",
    icon: require('../../../assets/images/personal_growth.png'),
    text: localizedStrings.settings.batterMe
  },
  {
    link: "TakePartDashboard",
    icon: require('../../../assets/images/charity.png'),
    text: localizedStrings.settings.takePart
  },
  {
    link: "StarMeUpDashboard",
    icon: require('../../../assets/images/appreciation.png'),
    text: localizedStrings.settings.starmeUp
  },
  {
    link: "PeopleToFollow",
    icon: require('../../../assets/images/follow.png'),
    text: "Follow Colleague"
  },
  {
    link: "InviteColleague",
    icon: require('../../../assets/images/invite.png'),
    text: "Invite Colleague"
  },
  {
    link: "",
    icon: require('../../../assets/images/logout.png'),
    text: localizedStrings.settings.logout
  }
];

class Settings extends Component {
  componentDidMount() {
    this.props.fetchData(menuItems);
  }

  onPressListItem = (index) => {
    if (index === 1) {
      this.props.navigation.navigate("Events")
    } else if (index === 2) {
      this.props.navigation.navigate("Friends")
    }
  }

  _renderItem = ({ item, index }) => {

    return (
      <View style={styles.settingsContainerView}>
        <ListItem
          button
          iconLeft
          noBorder
          style={{ paddingTop: 8, paddingBottom: 4 }}
          onPress={() => {
            if (item.link.length > 0) {
              this.props.navigation.navigate(item.link)
            } else {
              this.props.navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    { name: 'Login' },
                  ]
                })
              );
              AsyncStorage.setItem('IS_LOGIN', "fasle")
                .then(() => {
                  this.props.navigation.dispatch(resetAction);
                })
            }
          }}
        >
          <Image source={item.icon} style={{ height: 30, width: 30 }} resizeMode='contain' />
          <Text style={{
            paddingLeft: 15,
            color: '#666',
            fontSize: 15
          }}>
            {item.text}
          </Text>
        </ListItem>
      </View>
    );
  };
  render() {
    const navigation = this.props.navigation;

    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }

    return (
      <Container testID="SettingScreen" style={{ backgroundColor: Color.WHITE }}>
        <Content style={styles.content}>
          <TouchableOpacity style={styles.nameContainerBtn}
            onPress={() => navigation.navigate("DoctorProfile")}>
            <Thumbnail circle source={profileImg} />
            <View style={styles.nameContainerView}>
              <Text style={styles.userNameText}>Sanket Sahu</Text>
              <Text style={styles.viewProfileText}>{localizedStrings.settings.viewProfile}</Text>
            </View>
            <Icon name="arrow-forward" style={styles.arrowForwardIcon} />
          </TouchableOpacity>
          <FlatList
            data={this.props.items}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => `${index}`}
            ItemSeparatorComponent={() => {
              return ((<View style={{ marginHorizontal: 15, height: 0.5, backgroundColor: '#bbb' }} />))
            }}
          />
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  };
}

const mapStateToProps = state => {
  return {
    items: state.persistedReducer.settingsReducer.items,
    hasErrored: state.persistedReducer.settingsReducer.hasErrored,
    isLoading: state.persistedReducer.settingsReducer.isLoading
  }
};
export default connect(mapStateToProps, bindAction)(Settings);
