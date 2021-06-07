//Globle Imports
import React, {Component} from 'react';
import {
  TouchableOpacity,
  Image,
  Dimensions,
  Text,
  View,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import AsyncStorage from '@react-native-community/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { IS_LOGIN } from './src/Helper/Constants';

import EditUserDetails from './screens/EditUserDetails';
import ExperienceListScreen from './screens/UserProfile/ExperienceListScreen';
import AddExperience from './screens/UserProfile/AddExperience';
import AddProfileSection from './screens/UserProfile/AddProfileSection';

import UpdatePost from './screens/UpdatePost';
import ChatScreen from './screens/Chat/ChatScreen';
import NearbyFriends from './screens/NearbyFriends';
import BlankPage from './screens/BlankPage';
import CreateGroup from './screens/AddGroup/CreateGroup';
import GroupCoverPhoto from './screens/GroupCoverPhoto';
import GroupSettings from './screens/GroupSettings';
import GroupVisibilitySettings from './screens/GroupVisibilitySettings';
import GroupDetails from './screens/GroupDetails';
import AddMembers from './screens/AddMembers';
import AboutGroup from './screens/AboutGroup';
import PostToGroup from './screens/PostToGroup';
import Friends from './screens/Friends';
import ContactInfo from './screens/UserProfile/ContactInfo';
import AddEducation from './screens/UserProfile/AddEducation';
import AddCertifications from './screens/UserProfile/AddCertifications';
import AddVolunteerExperience from './screens/UserProfile/AddVolunteerExperience';
import AddPublication from './screens/UserProfile/AddPublication';
import AddPatent from './screens/UserProfile/AddPatent';
import AddCource from './screens/UserProfile/AddCource';
import AddProject from './screens/UserProfile/AddProject';
import AddHonorsAndAwards from './screens/UserProfile/AddHonorsAndAwards';
import AddTestScore from './screens/UserProfile/AddTestScore';
import AddLanguage from './screens/UserProfile/AddLanguage';
import AddOrganisation from './screens/UserProfile/AddOrganisation';
import AddSkills from './screens/UserProfile/AddSkills';

import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import Register from './screens/Register';
import TermsAndConditions from './screens/TermsAndConditions';
import FirstScreen from './screens/FirstScreen';
import EnterName from './screens/EnterName';
import GenderSelection from './screens/GenderSelection';
import SelectBirthdate from './screens/SelectBirthdate';
import SmokePreference from './screens/SmokePreference';
import Diagnosed from './screens/Diagnosed';
import Diabetes from './screens/Diabetes';
import StartAssessment from './screens/StartAssessment';
import NewsFeed from './screens/NewsFeed';
import AIBot from './screens/AIBot';
import Assessment from './screens/Assessment';
import Menu from './screens/Menu';
import Color from './Helper/Color';
import Constants from './Helper/Constants';
import AddMedication from './screens/AddMedication';
import StartScreen from './screens/StartScreen';
import PaatientDetails from './screens/PatientDetails';
import FollowupDetails from './screens/FollowupDetails';
import Settings from './screens/Settings';
import TagMembers from './screens/TagMembers';
import BatterMeHistory from './screens/BatterMe/History';
import BatterMeDashboard from './screens/BatterMe/BatterMeDashboard';
import BatterMeFeedbackRequests from './screens/BatterMe/BatterMeFeedbackRequests';
import GiveFeeback from './screens/BatterMe/GiveFeeback';
import SendFeedback from './screens/BatterMe/SendFeedback';
import BatterMeFeedbackComment from './screens/BatterMe/BatterMeFeedbackComment';
import TakePartDashboard from './screens/TakePart/TakePartDashboard';
import TakePartComment from './screens/TakePart/TakePartComment';
import CreateTakePart from './screens/TakePart/CreateTakePart';
import CardType from './screens/TakePart/CardType';
import CreateCardReason from './screens/TakePart/CreateCardReason';
import SelectGroups from './screens/TakePart/SelectGroups';
import StarMeUpDashboard from './screens/StarMeUp/StarMeUpDashboard';
import StarMeUpDetails from './screens/StarMeUp/StarMeUpDetails';
import StarMeUpChooseType from './screens/StarMeUp/StarMeUpChooseType';
import SendStar from './screens/StarMeUp/SendStar';
import PostComment from './screens/PostComment';
import AddGroup from './screens/AddGroup';
import Events from './screens/Events';
import CreateEvent from './screens/CreateEvent';
import EventDetails from './screens/EventDetails';
import HomeTabNavigator from './screens/Home/tabNavigation';
import Following from './screens/UserProfile/Following';
import Connections from './screens/UserProfile/Connections';
import InviteColleague from './screens/InviteColleague';
import PeopleToFollow from './screens/PeopleToFollow';

import AppointmentList from './screens/AppointmentList';
import PatientList from './screens/PatientList';
import Filter from './screens/Filter';
import AddPatient from './screens/AddPatient';
import PatientDetailsScreen from './screens/PatientDetailsScreen';
import HealthProfile from './screens/HealthProfile';
import AddOptionsHealthProfile from './screens/AddOptionsHealthProfile';
import AddHealthCondition from './screens/AddHealthCondition';
import AddAllergy from './screens/AddAllergy';
import AddVaccination from './screens/AddVaccination';
import AddSurguryprocedure from './screens/AddSurguryProcedure';
import AddHospitalization from './screens/AddHospitalization';
import AddContraindication from './screens/AddContraindication';
import AddFamilyMedicalHistory from './screens/AddFamilyMedicalHistory';
import AddSocialHistory from './screens/AddSocialHistory';
import AddMedicationScreen from './screens/AddMedicationScreen';
import Cholesterol from './screens/Cholesterol';
import HealthConditionList from './screens/HealthConditionList';
import MedicationsList from './screens/MedicationsList';
import AllergyList from './screens/AllergyList';
import FamilyMedicalHistoryList from './screens/FamilyMedicalHistoryList';
import AddMedicalReport from './screens/AddMedicalReport';
import ContraindicationList from './screens/ContraindicationList';
import AddBloodPressure from './screens/AddBloodPressure';
import HospitalizationList from './screens/HospitalizationList';
import SurgeryList from './screens/SurgeryList';
import VaccinationList from './screens/VaccinationList';
import BloodSugar from './screens/BloodSugar';
import Exercise from './screens/Exercise';
import Food from './screens/Food';
import Height from './screens/Height';
import OxygenLevel from './screens/OxygenLevel';
import Pulse from './screens/Pulse';
import RespiratoryRates from './screens/RespiratoryRates';
import Sleep from './screens/Sleep';
import Pain from './screens/Pain';
import SetClinicConsultation from './screens/SetClinicConsultation';
import ConsultationNotes from './screens/ConsultationNotes';
import FilterConsultationNotes from './screens/FilterConsultationNotes';
import ConsultationTimings from './screens/ConsultationTimings';
import Temperature from './screens/Temperature';
import WaistMeasurement from './screens/WaistMeasurement';
import JointStiffness from './screens/JointStiffness';
import Weight from './screens/Weight';
import SetGoal from './screens/SetGoal';
import NewPatientBill from './screens/NewPatientBill';
import AddConsultationNote from './screens/AddConsultationNote';
import AppointmentFilter from './screens/AppointmentFilter';
import ConsultationNotesDetails from './screens/ConsultationNotesDetails';
import Monitoring from './screens/Monitoring';
import AppointmentDetails from './screens/AppointmentDetails';
import MonitoringDetails from './screens/MonitoringDetails';
import MonitoringPatientDetails from './screens/MonitoringPatientDetails';
import SideMenu from './screens/SideMenu';
// import AddPublication from './screens/UserProfile/AddPublication';
import localizedStrings from './Helper/LocalisedString';

// redux components

import {connect} from 'react-redux';

// import {Button} from 'native-base';

const userProfile = require('./../assets/images/user_profile.png');
const symptom = require('./../assets/images/myAssistant.png');
const newFeed = require('./../assets/images/news_feed.png');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{width: Dimensions.get('screen').width - 100}}
      drawerContent={props => <SideMenu {...props} />}
      initialRouteName="AppNavigation"
      drawerType="slide">
      {/* <Drawer.Screen name="AppointmentList" component={AppointmentList} /> */}
      {/* <Drawer.Screen name="HomeTabNavigator" component={HomeTabNavigator} /> */}
      {/* <Drawer.Screen name="StartScreen" component={StartScreen} /> */}
      <Drawer.Screen name="AppNavigation" component={AppNavigation} />
    </Drawer.Navigator>
  );
};

const HomeTab = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={'AIBot'}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'NewsFeed') {
            return (
              <Image
                source={newFeed}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? Color.BLUE : Color.LIGHT_GREY,
                }}
              />
            );
          } else if (route.name === 'AIBot') {
            return (
              <Image
                source={symptom}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? Color.BLUE : Color.LIGHT_GREY,
                }}
              />
            );
          } else if (route.name === 'Assessment') {
            return (
              <Image
                source={newFeed}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? Color.BLUE : Color.LIGHT_GREY,
                }}
              />
            );
          } else {
            return (
              <Image
                source={userProfile}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? Color.BLUE : Color.LIGHT_GREY,
                }}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: Color.BLUE,
        inactiveTintColor: Color.GREY,
        labelStyle: {
          fontFamily: Constants.AppFont,
          fontSize: 14,
        },
      }}>
      <BottomTab.Screen
        name="NewsFeed"
        component={() => {
          return (
            <Stack.Navigator>
              <Stack.Screen
                name="NewsFeedScreen"
                component={NewsFeed}
                options={({navigation, route}) => ({
                  title: 'News',
                  headerLeft: () => (
                    <TouchableOpacity
                      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
                      onPress={() => navigation.navigate('StartScreen')}
                      style={styles.headerLeftStyle}>
                      <Ionicons
                        name="ios-arrow-back"
                        color={'#000'}
                        size={25}
                      />
                    </TouchableOpacity>
                  ),
                  headerStyle: styles.headerStyle,
                })}
              />
            </Stack.Navigator>
          );
        }}
        options={() => ({
          headerShown: false,
          title: 'News',
        })}
      />
      <BottomTab.Screen
        name="AIBot"
        component={() => {
          return (
            <Stack.Navigator>
              <Stack.Screen
                name="AIBotScreen"
                component={AIBot}
                options={({navigation, route}) => ({
                  title: 'My Assistant',
                  headerLeft: () => (
                    <TouchableOpacity
                      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
                      onPress={() => navigation.navigate('StartScreen')}
                      style={styles.headerLeftStyle}>
                      <Ionicons
                        name="ios-arrow-back"
                        color={'#000'}
                        size={25}
                      />
                    </TouchableOpacity>
                  ),
                  headerStyle: styles.headerStyle,
                })}
              />
            </Stack.Navigator>
          );
        }}
      />
      {/* <BottomTab.Screen
        name="Assessment"
        component={Assessment}
        options={() => ({headerShown: false })} /> */}
      <Stack.Screen
        name="Settings"
        component={() => {
          return (
            <Stack.Navigator>
              <Stack.Screen
                name="SettingsScreen"
                component={Settings}
                options={({navigation, route}) => ({
                  title: localizedStrings.settings.settings,
                  headerLeft: () => (
                    <TouchableOpacity
                      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
                      onPress={() => navigation.navigate('StartScreen')}
                      style={styles.headerLeftStyle}>
                      <Ionicons
                        name="ios-arrow-back"
                        color={'#000'}
                        size={25}
                      />
                    </TouchableOpacity>
                  ),
                  headerStyle: styles.headerStyle,
                })}
              />
            </Stack.Navigator>
          );
        }}
      />
    </BottomTab.Navigator>
  );
};

const AppNavigation = () => {
  const backButton = navigation => {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.headerLeftStyle}
        hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}>
        <Ionicons name="ios-arrow-back" color={'#000'} size={25} />
      </TouchableOpacity>
    );
  };

  return (
    <Stack.Navigator initialRouteName={'StartScreen'}>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({navigation, route}) => ({
          title: 'Log In',
          headerLeft: () => backButton(navigation),
          headerStyle: styles.headerStyle,
        })}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={({navigation, route}) => ({
          title: 'Log In',
          headerLeft: () => backButton(navigation),
          headerStyle: styles.headerStyle,
        })}
      />
      <Stack.Screen
        name="TermsAndConditions"
        component={TermsAndConditions}
        options={({navigation, route}) => ({
          title: 'Terms & Conditions',
          headerLeft: () => backButton(navigation),
          headerStyle: styles.headerStyle,
        })}
      />

      <Stack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="EnterName"
        component={EnterName}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="GenderSelection"
        component={GenderSelection}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="SelectBirthdate"
        component={SelectBirthdate}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="SmokePreference"
        component={SmokePreference}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Diagnosed"
        component={Diagnosed}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Diabetes"
        component={Diabetes}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="StartAssessment"
        component={StartAssessment}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AppointmentList"
        component={AppointmentList}
        options={() => ({headerShown: false})}
      />
      {/* <Stack.Screen
            name="HomeTab"
            component={HomeTab}
            options={() => ({ headerShown: false })}
          /> */}
      <Stack.Screen name="AIBot" component={AIBot} />
      <Stack.Screen
        name="AddMedication"
        component={AddMedication}
        options={({navigation, route}) => ({
          title: 'Add new drug',
          headerLeft: () => backButton(navigation),
          headerStyle: styles.headerStyle,
        })}
      />
      <Stack.Screen
        name="StartScreen"
        component={StartScreen}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="EditUserDetails"
        component={EditUserDetails}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="ExperienceListScreen"
        component={ExperienceListScreen}
      />
      <Stack.Screen
        name="AddProfileSection"
        component={AddProfileSection}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddExperience"
        component={AddExperience}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="PaatientDetails"
        component={PaatientDetails}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="FollowupDetails"
        component={FollowupDetails}
        options={({navigation, route}) => ({
          title: 'Followup Details',
        })}
      />
      <Stack.Screen name="TagMembers" component={TagMembers} />
      <Stack.Screen
        name="BatterMeHistory"
        component={BatterMeHistory}
        options={({navigation, route}) => ({
          title: `${localizedStrings.betterMe.history}`,
          headerLeft: () => backButton(navigation),
          headerStyle: styles.headerStyle,
        })}
      />
      <Stack.Screen
        name="BatterMeFeedbackRequests"
        component={BatterMeFeedbackRequests}
        options={({navigation, route}) => ({
          title: `${localizedStrings.betterMe.feedbackRequests}`,
          headerLeft: () => backButton(navigation),
          headerStyle: styles.headerStyle,
        })}
      />
      <Stack.Screen name="GiveFeeback" component={GiveFeeback} />
      <Stack.Screen
        name="SendFeedback"
        component={SendFeedback}
        options={({navigation, route}) => ({
          title: `${localizedStrings.sendFeedback.sendFeedback}`,
          headerLeft: () => backButton(navigation),
          headerStyle: styles.headerStyle,
        })}
      />
      <Stack.Screen
        name="BatterMeFeedbackComment"
        component={BatterMeFeedbackComment}
        options={({navigation, route}) => ({
          title: 'Comment',
          headerLeft: () => backButton(navigation),
          headerStyle: styles.headerStyle,
        })}
      />
      <Stack.Screen
        name="TakePartComment"
        component={TakePartComment}
        options={({navigation, route}) => ({
          title: 'Foo Proposal',
          headerLeft: () => backButton(navigation),
          headerStyle: styles.headerStyle,
        })}
      />
      <Stack.Screen
        name="SideMenu"
        component={SideMenu}
        options={({navigation, route}) => ({
          title: 'Menu',
          headerLeft: () => backButton(navigation),
          headerStyle: styles.headerStyle,
        })}
      />
      <Stack.Screen name="CreateTakePart" component={CreateTakePart} />
      <Stack.Screen
        name="CardType"
        component={CardType}
        options={({navigation, route}) => ({
          title: 'Choose Card Type',
          headerLeft: () => backButton(navigation),
          headerStyle: styles.headerStyle,
        })}
      />
      <Stack.Screen
        name="CreateCardReason"
        component={CreateCardReason}
        options={({navigation, route}) => ({
          title: `${localizedStrings.createCardReason.cardDetails}`,
          headerLeft: () => backButton(navigation),
          headerStyle: styles.headerStyle,
        })}
      />
      <Stack.Screen name="SelectGroups" component={SelectGroups} />
      <Stack.Screen
        name="StarMeUpDetails"
        component={StarMeUpDetails}
        options={({navigation, route}) => ({
          title: 'StarMeUp',
          headerLeft: () => backButton(navigation),
          headerStyle: styles.headerStyle,
        })}
      />
      <Stack.Screen
        name="StarMeUpChooseType"
        component={StarMeUpChooseType}
        options={({navigation, route}) => ({
          title: 'Choose Type',
          headerLeft: () => backButton(navigation),
          headerStyle: styles.headerStyle,
        })}
      />
      <Stack.Screen name="SendStar" component={SendStar} />
      <Stack.Screen
        name="PostComment"
        component={PostComment}
        options={({navigation, route}) => ({
          title: 'Comment',
          headerLeft: () => backButton(navigation),
          headerStyle: styles.headerStyle,
        })}
      />
      <Stack.Screen
        name="BatterMeDashboard"
        component={BatterMeDashboard}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="StarMeUpDashboard"
        component={StarMeUpDashboard}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="TakePartDashboard"
        component={TakePartDashboard}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddGroup"
        component={AddGroup}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Events"
        component={Events}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="CreateEvent"
        component={CreateEvent}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen name="EventDetails" component={EventDetails} />
      <Stack.Screen
        key="adjfi2124"
        name="HomeTabNavigator"
        component={HomeTabNavigator}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="UpdatePost"
        component={UpdatePost}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="NearbyFriends"
        component={NearbyFriends}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="BlankPage"
        component={BlankPage}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="CreateGroup"
        component={CreateGroup}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="GroupCoverPhoto"
        component={GroupCoverPhoto}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="GroupSettings"
        component={GroupSettings}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="GroupVisibilitySettings"
        component={GroupVisibilitySettings}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="GroupDetails"
        component={GroupDetails}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddMembers"
        component={AddMembers}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AboutGroup"
        component={AboutGroup}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="PostToGroup"
        component={PostToGroup}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Friends"
        component={Friends}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="ContactInfo"
        component={ContactInfo}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddEducation"
        component={AddEducation}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddCertifications"
        component={AddCertifications}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddVolunteerExperience"
        component={AddVolunteerExperience}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddPublication"
        component={AddPublication}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddPatent"
        component={AddPatent}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddCource"
        component={AddCource}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddProject"
        component={AddProject}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddHonorsAndAwards"
        component={AddHonorsAndAwards}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddTestScore"
        component={AddTestScore}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddLanguage"
        component={AddLanguage}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddOrganisation"
        component={AddOrganisation}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddSkills"
        component={AddSkills}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Following"
        component={Following}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Connections"
        component={Connections}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="PeopleToFollow"
        component={PeopleToFollow}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="InviteColleague"
        component={InviteColleague}
        options={() => ({headerShown: false})}
      />
      {/* <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={() => ({ headerShown: false })} /> */}
      <Stack.Screen
        name="PatientList"
        component={PatientList}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Filter"
        component={Filter}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddPatient"
        component={AddPatient}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="PatientDetailsScreen"
        component={PatientDetailsScreen}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="HealthProfile"
        component={HealthProfile}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddOptionsHealthProfile"
        component={AddOptionsHealthProfile}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddHealthCondition"
        component={AddHealthCondition}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddAllergy"
        component={AddAllergy}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddVaccination"
        component={AddVaccination}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddSurguryprocedure"
        component={AddSurguryprocedure}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddHospitalization"
        component={AddHospitalization}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddContraindication"
        component={AddContraindication}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddFamilyMedicalHistory"
        component={AddFamilyMedicalHistory}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddSocialHistory"
        component={AddSocialHistory}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddMedicationScreen"
        component={AddMedicationScreen}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Cholesterol"
        component={Cholesterol}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="HealthConditionList"
        component={HealthConditionList}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="MedicationsList"
        component={MedicationsList}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AllergyList"
        component={AllergyList}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="FamilyMedicalHistoryList"
        component={FamilyMedicalHistoryList}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddMedicalReport"
        component={AddMedicalReport}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="ContraindicationList"
        component={ContraindicationList}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddBloodPressure"
        component={AddBloodPressure}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="HospitalizationList"
        component={HospitalizationList}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="SurgeryList"
        component={SurgeryList}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="BloodSugar"
        component={BloodSugar}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Exercise"
        component={Exercise}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Food"
        component={Food}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Height"
        component={Height}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="OxygenLevel"
        component={OxygenLevel}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Pulse"
        component={Pulse}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="RespiratoryRates"
        component={RespiratoryRates}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Sleep"
        component={Sleep}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="VaccinationList"
        component={VaccinationList}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Pain"
        component={Pain}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="SetClinicConsultation"
        component={SetClinicConsultation}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="ConsultationTimings"
        component={ConsultationTimings}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="ConsultationNotes"
        component={ConsultationNotes}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="FilterConsultationNotes"
        component={FilterConsultationNotes}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Temperature"
        component={Temperature}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="WaistMeasurement"
        component={WaistMeasurement}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="JointStiffness"
        component={JointStiffness}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Weight"
        component={Weight}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="SetGoal"
        component={SetGoal}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AddConsultationNote"
        component={AddConsultationNote}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="ConsultationNotesDetails"
        component={ConsultationNotesDetails}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AppointmentFilter"
        component={AppointmentFilter}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Monitoring"
        component={Monitoring}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="MonitoringDetails"
        component={MonitoringDetails}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="MonitoringPatientDetails"
        component={MonitoringPatientDetails}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="NewPatientBill"
        component={NewPatientBill}
        options={() => ({headerShown: false})}
      />
    </Stack.Navigator>
  );
};

class AppNavigator extends Component {
  constructor(props) {
    super(props);

    localizedStrings.setLanguage('en');
  }

  async componentDidMount() {
    console.disableYellowBox = true;
    const enable = await messaging().hasPermission();
    debugger;
    if (enable == messaging.AuthorizationStatus.AUTHORIZED) {
      this.getToken();
    } else {
      this.requestUserPermission();
    }

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      alert(JSON.stringify(remoteMessage));
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          alert(JSON.stringify(remoteMessage));
        }
      });
  }

  requestUserPermission = async () => {
    const settings = await messaging().requestPermission({
      announcement: true,
    });

    if (settings == messaging.AuthorizationStatus.AUTHORIZED) {
      this.getToken();
    }
  };

  async getToken() {
    let fcmToken = await messaging().getToken();
    if (fcmToken) {
      // user has a device token
      console.log('=====================');
      console.log(fcmToken);
      console.log('=====================');
    }
  }

  render() {
    console.log(this.props);
    return (
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    );
  }
}

const styles = {
  headerLeftStyle: {
    marginLeft: 16,
  },
  headerRightStyle: {
    marginRight: 16,
  },
  headerStyle: {
    shadowColor: Color.SHADOW,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 3,
  },
};

function App(props) {
  console.log('Props', props);
  return (
    <View>
      <Text>Hello {props.name}</Text>
      <Button
        onPress={() => {
          props.changeName('Suresh');
        }}
        title="Change"
      />
    </View>
  );
}

function mapStateToProps(state) {
  console.log('Props', state.name);

  return {
    name: state.name,
  };
}
const mapDispatchToProps = dispatch => {
  return {
    changeName: name => {
      dispatch({type: 'CHANGE_NAME', payload: name});
    },
  };
};
export default AppNavigator;
