import React from "react";
import { SafeAreaView, Linking, Alert, Image, TouchableOpacity } from "react-native";
import { Button, Icon, Footer, FooterTab, Badge, Text, View } from "native-base";
import Friends from "../Friends";
import Home from "./index";
import Notifications from "../Notifications";
import Chat from "../Chat";
import Settings from "../Settings";
import AppointmentList from '../AppointmentList'
import PatientList from '../PatientList'
import Sidebar from './../Sidebar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import styles from "./styles";
import Profile from "../UserProfile/Profile";

import localizedStrings from './../../Helper/LocalisedString'
import { setTestId } from "../../Helper/GlobalMethods";
const newsFeed = require('../../../assets/images/news_feed.png');
const group = require('../../../assets/images/group.png');
const chat = require('../../../assets/images/message.png');
const notification = require('../../../assets/images/notification.png');
const calender = require('../../../assets/images/event.png');
const settings = require('../../../assets/images/settings.png');
const menu = require('../../../assets/images/menu.png');

const BottomTab = createBottomTabNavigator()
const Stack = createStackNavigator()

const HomeTab = () => {
  return (
    <BottomTab.Navigator
      initialRouteName='DoctorProfile'
      tabBar={props => {
        return (
          <SafeAreaView>
            <Footer {...setTestId('homeTab')}>
              <FooterTab>
                <Button onPress={() => props.navigation.navigate("Patients")} {...setTestId("home")}>
                  <Image source={group} style={[styles.tabImage, { opacity: props.state.index === 0 ? 1 : 0.5 }]} resizeMode='contain' />
                  {/* <Text style={{ fontSize: 12 }} >Patients</Text> */}
                </Button>
                <Button onPress={() => props.navigation.navigate("Appointments")} {...setTestId("groupsTab")}>
                  <Image source={calender} style={[styles.tabImage, { opacity: props.state.index === 1 ? 1 : 0.5 }]} resizeMode='contain' />
                  {/* <Text style={{ fontSize: 12 }} >Appointments</Text> */}
                </Button>
                <Button onPress={async () => {
                  const urlToOpen = 'com.emirates.im://';
                  const supported = await Linking.canOpenURL(urlToOpen);
                  Linking.canOpenURL(urlToOpen).then((canOpen) => {
                    if (canOpen) {
                      Linking.openURL(urlToOpen);
                    } else {
                      Alert.alert("Please Install Messenger app.")
                    }
                  }).catch((error) => {
                    console.log("ERRORRRR: " + error);
                    Alert.alert(error);
                  })
                }}>
                  <Image source={chat} style={[styles.tabImage, { opacity: props.state.index === 2 ? 1 : 0.5 }]} resizeMode='contain' />
                  {/* <Text style={{ fontSize: 12 }} >AI Bot</Text> */}
                </Button>
                <Button
                  badge
                  vertical
                  onPress={() => props.navigation.navigate("Notifications")}
                  {...setTestId("notificationTab")}
                >
                  <View style={{ padding: 8 }}>
                    <View style={styles.badgeTextContainer}><Text style={styles.badgeText}>4</Text></View>
                    <Image source={notification} style={[styles.tabImage, { opacity: props.state.index === 3 ? 1 : 0.5 }]} resizeMode='contain' />
                    {/* <Text style={{ fontSize: 12 }} >Follow-UP</Text> */}
                  </View>
                </Button>
                <Button onPress={() => props.navigation.navigate("Home")}
                  {...setTestId("settingsTab")}>
                  <Image source={newsFeed} style={[styles.tabImage, { opacity: props.state.index === 4 ? 1 : 0.5 }]} resizeMode='contain' />
                  {/* <Text style={{ fontSize: 12 }} >Blog</Text> */}
                </Button>
              </FooterTab>
            </Footer>
          </SafeAreaView>
        );
      }}
    >
      <BottomTab.Screen
        name="Patients"
        component={PatientList}
      />
      <BottomTab.Screen
        name="Appointments"
        component={AppointmentList} />
      <BottomTab.Screen
        name="Chat"
        component={Chat} />
      <BottomTab.Screen
        name="Notifications"
        component={Notifications} />
      <BottomTab.Screen
        name="Home"
        component={Home} />
      <Stack.Screen
        name="DoctorProfile"
        component={Profile}
      />
    </BottomTab.Navigator>
  )
}

export default HomeTab;
