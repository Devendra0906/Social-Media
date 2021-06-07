import React, {Component} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Dimensions,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Container, Content, Icon} from 'native-base';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';

import About from './About';
import Dashboard from './Dashboard';
import styles from './styles';
import Color from '../../../Helper/Color';
import {setTestId} from '../../../Helper/GlobalMethods';
import {DrawerActions} from '@react-navigation/native';
import imgMenu from '../../../../assets/images/menu.png';
import localizedStrings from '../../../Helper/LocalisedString';
import {Header} from 'react-native-elements';
const profileImg = require('../../../../assets/images/batman.jpg');
const {width} = Dimensions.get('window');
import {fetchProfile} from '../../../__Redux/__actions/profileActions';
import {connect} from 'react-redux';
const LazyPlaceholder = ({route}) => (
  <View style={styles.lazyPlaceholder}>
    <Text>Loading {route.title}…</Text>
  </View>
);

class Profile extends Component {
  componentDidMount() {
    this.props.getProfile();
  }

  constructor(props) {
    super(props);

    this.state = {
      avatarSource: undefined,
      index: 0,
      routes: [
        {key: 'first', title: localizedStrings.userProfile.about},
        {key: 'second', title: localizedStrings.userProfile.dashboard},
      ],
      isFromRecruiter:
        props.route.params && props.route.params.isFromRecruiter
          ? props.route.params.isFromRecruiter
          : false,
      title:
        props.route.params && props.route.params.title
          ? props.route.params.title
          : 'Candidates',
    };

    // props.navigation.setOptions({
    //   title: localizedStrings.userProfile.profile,
    //   headerLeft: () => (
    //     <TouchableOpacity
    //       hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
    //       onPress={() => this.props.navigation.navigate('SideMenu')}
    //       style={{ marginLeft: 16 }}
    //     >
    //       <Icon type={'SimpleLineIcons'} name={"menu"} style={{ fontSize: 24, color: Color.BLACK }} />
    //     </TouchableOpacity>
    //   ),
    //   headerRight: () => (
    //     <TouchableOpacity style={{ marginRight: 16 }} onPress={() => props.navigation.navigate('HomeTabNavigator')}>
    //       <Icon type={'MaterialIcons'} name={"notifications"} style={{ fontSize: 30, color: Color.BLACK }} />
    //     </TouchableOpacity>
    //   ),
    //   headerShown: true
    // })
  }

  _handleIndexChange = index => this.setState({index});

  _renderLazyPlaceholder = ({route}) => <LazyPlaceholder route={route} />;

  _renderTabbar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{backgroundColor: Color.BLACK}}
        style={styles.tabBarIndicator}
        renderLabel={({route, focused}) => (
          <Text
            style={{color: focused ? Color.BLACK : Color.GREY}}
            {...setTestId(route.title)}>
            {route.title}
          </Text>
        )}
      />
    );
  };
  render() {
    const navigation = this.props.navigation;
    const {isFromRecruiter} = this.state;
    let headerStyle = {height: 64, paddingTop: 20};
    if (DeviceInfo.hasNotch()) {
      headerStyle = {height: 85, paddingTop: 35};
    }
    console.log(this.props.state.profileReducer);

    return this.props.state.profileReducer.items.user === undefined ? (
      <Text>Loading</Text>
    ) : (
      <Container style={{backgroundColor: Color.WHITE}}>
        <Header
          containerStyle={[
            {
              backgroundColor: '#fff',
              paddingTop: 0,
              elevation: 10,
              shadowOffset: {width: 0, height: 2},
              shadowRadius: 2,
              shadowOpacity: 0.1,
              shadowColor: Color.BLACK,
              marginBottom: 5,
            },
            headerStyle,
          ]}
          leftComponent={
            <TouchableOpacity
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              onPress={() => this.props.navigation.navigate('SideMenu')}
              style={{marginLeft: 16}}>
              <Icon
                type={'SimpleLineIcons'}
                name={'menu'}
                style={{fontSize: 24, color: Color.BLACK}}
              />
            </TouchableOpacity>
          }
          centerComponent={{
            text: `${localizedStrings.userProfile.profile}`,
            style: {color: Color.BLACK, fontSize: 17, fontWeight: 'bold'},
          }}
          // rightComponent={(
          //   <TouchableOpacity style={{ marginRight: 16 }} onPress={() => props.navigation.navigate('HomeTabNavigator')}>
          //     <Icon type={'MaterialIcons'} name={"notifications"} style={{ fontSize: 30, color: Color.BLACK }} />
          //   </TouchableOpacity>
          // )}
        />
        <View style={[styles.sectionContainer, {marginTop: 0}]}>
          <View style={styles.sectionTitleView}>
            <Text style={styles.userNameText}>
              {localizedStrings.userProfile.yourDetails}
            </Text>
            {isFromRecruiter === false && (
              <Icon
                type="FontAwesome"
                name="pencil"
                style={styles.editIcon}
                onPress={() => navigation.navigate('EditUserDetails')}
              />
            )}
          </View>
          <View style={styles.profileImgInnerView}>
            <View>
              <Image
                source={{
                  uri: this.props.state.profileReducer.items.media.profileImg,
                }}
                // source={profileImg}
                style={styles.profileImg}
                resizeMode="cover"
              />
            </View>
            <View style={styles.profileNameContainerView}>
              <Text style={styles.userNameText}>
                {this.props.state.profileReducer.items.user.firstName}{' '}
                {this.props.state.profileReducer.items.user.lastName}
              </Text>
              {/* <Text style={styles.pendingPostText}>
                {this.props.state.profileReducer.items.user.headline} {'('}
                {this.props.state.profileReducer.items.user.industry}
                {')'}
              </Text> */}
              <Text
                style={[styles.pendingPostText, {color: '#007bff'}]}
                onPress={() => navigation.navigate('Connections')}>
                {this.props.state.profileReducer.items.connections.length}{' '}
                {localizedStrings.userProfile.Connections}
              </Text>
              <Text style={[styles.pendingPostText, {color: '#007bff'}]}>
                {localizedStrings.userProfile.contactInfo}
              </Text>
              <View style={{marginTop: 5}}>
                <Text style={{fontSize: 14, color: Color.GREY}}>
                  {/* {localizedStrings.userProfile.manager} */}
                  {this.props.state.profileReducer.items.user.headline}
                </Text>
                <Text style={styles.pendingPostText}>
                  {this.props.state.profileReducer.items.user.industry}
                </Text>
              </View>
              <View style={{marginTop: 5}}>
                <Text style={{fontSize: 14, color: Color.GREY}}>
                  {localizedStrings.userProfile.phoneNumber}
                </Text>
                <Text style={styles.pendingPostText}>
                  {this.props.state.profileReducer.items.contact.email}
                  {' | '}
                  {this.props.state.profileReducer.items.contact.mobileNumber}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <TabView
          {...setTestId('profileTabs')}
          lazy
          navigationState={this.state}
          renderScene={SceneMap({
            first: About,
            second: Dashboard,
          })}
          renderLazyPlaceholder={this._renderLazyPlaceholder}
          onIndexChange={this._handleIndexChange}
          initialLayout={{width: Dimensions.get('window').width}}
          renderTabBar={props => this._renderTabbar(props)}
        />
      </Container>
    );
  }
}

// export default Profile;
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => {
      dispatch(fetchProfile());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
