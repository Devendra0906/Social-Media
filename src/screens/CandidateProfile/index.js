import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput, Text, Dimensions } from "react-native";
import DeviceInfo from 'react-native-device-info';
import { Container, Content, Icon } from "native-base";
import { TabBar } from 'react-native-tab-view';

import About from './About';
// import Dashboard from './Dashboard';
import styles from "./styles";
import Color from "../../Helper/Color";

const profileImg = require("../../../assets/images/batman.jpg");
const { width } = Dimensions.get('window');

const LazyPlaceholder = ({ route }) => (
  <View style={styles.lazyPlaceholder}>
    <Text>Loading {route.title}…</Text>
  </View>
);

class CandidateProfile extends Component {

  constructor(props) {
    super(props)

    this.state = {
      avatarSource: undefined,
      index: 0,
      isFromRecruiter: props.route.params && props.route.params.isFromRecruiter ? props.route.params.isFromRecruiter : false,
      title: props.route.params && props.route.params.title ? props.route.params.title : 'Candidates',
    };

    props.navigation.setOptions({
      headerTitle: () => {
        return (
          <View>
            <Text style={{ fontSize: 17 }}>{props.route.params && props.route.params.title ? props.route.params.title : 'Profile'}</Text>
          </View>
        )
      },
      headerLeft: () => (
        <TouchableOpacity
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          style={{ marginLeft: 16 }}
          onPress={() => props.navigation.goBack()}>
          <Icon name='ios-arrow-back' />
        </TouchableOpacity>
      )
    })
  }

  _handleIndexChange = index => this.setState({ index });

  _renderLazyPlaceholder = ({ route }) => <LazyPlaceholder route={route} />;

  _renderTabbar = (props) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: 'black' }}
        style={styles.tabBarIndicator}
        renderLabel={({ route, focused }) => (
          <Text style={{ color: focused ? "black" : "rgb(150, 150, 150)" }}>
            {route.title}
          </Text>
        )}
      />
    );
  }

  render() {
    const navigation = this.props.navigation;
    const { isFromRecruiter } = this.state
    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }
    return (
      <Container style={{ backgroundColor: Color.WHITE }}>
        <View style={[styles.sectionContainer, { marginTop: 0 }]}>
          <View style={styles.sectionTitleView}>
            <Text style={styles.userNameText}>
              User Details
              </Text>
            {isFromRecruiter === false && <Icon type='FontAwesome' name='pencil' style={styles.editIcon} onPress={() => navigation.navigate('EditUserDetails')} />}

          </View>
          <View style={styles.profileImgInnerView}>
            <Image source={profileImg} style={styles.profileImg} resizeMode='cover' />
            <View style={styles.profileNameContainerView}>
              <Text style={styles.userNameText}>Darshit Zalavadiya</Text>
              <Text style={styles.pendingPostText}>Manager, Corporate Sales (SMB)</Text>
              <Text style={[styles.pendingPostText, { color: '#007bff' }]}>33 Connections</Text>
              <Text style={[styles.pendingPostText, { color: '#007bff' }]}>Contact Info</Text>
              <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 14, color: '#666' }}>Manager</Text>
                <Text style={styles.pendingPostText}>Rechard keane</Text>
              </View>
              <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 14, color: '#666' }}>Phone Number</Text>
                <Text style={styles.pendingPostText}>+1 (432) 1234567</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <About />
        {/* <TabView
          testID='eventsTab'
          lazy
          navigationState={this.state}
          renderScene={SceneMap({
            first: About,
            second: Dashboard,
          })}
          renderLazyPlaceholder={this._renderLazyPlaceholder}
          onIndexChange={this._handleIndexChange}
          initialLayout={{ width: Dimensions.get('window').width }}
          renderTabBar={(props) => this._renderTabbar(props)}
        /> */}
      </Container>
    );
  }
}

export default CandidateProfile;
