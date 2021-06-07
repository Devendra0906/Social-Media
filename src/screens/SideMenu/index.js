import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import CachedImage from 'react-native-fast-image';

import localizedStrings from '../../Helper/LocalisedString';
import styles from './styles';
import {fetchProfile} from '../../__Redux/__actions/profileActions';
import {connect} from 'react-redux';

class SideMenu extends Component {
  // componentDidMount() {
  //   this.props.getProfile();
  //   console.log('slide', this.props.state.profileReducer.items);
  // }
  constructor(props) {
    super(props);

    this.state = {
      MENU_LIST: [],
    };
  }

  componentDidMount() {
    this.setState({
      MENU_LIST: [
        {
          route: 'AIBot',
          name: localizedStrings.sidemenu.myAssistant,
          icon: require('../../../assets/images/myAssistant.png'),
          testid: '',
        },
        {
          route: 'PatientList',
          name: localizedStrings.sidemenu.patient,
          icon: require('../../../assets/images/group.png'),
          testid: 'patientList',
        },
        {
          route: 'AppointmentList',
          name: localizedStrings.sidemenu.appointments,
          icon: require('../../../assets/images/event.png'),
          testid: 'appointmentList',
        },
        {
          name: localizedStrings.sidemenu.followup,
          icon: require('../../../assets/images/event.png'),
          testid: '',
        },
        {
          route: 'ConsultationNotes',
          name: localizedStrings.sidemenu.consultationNotes,
          icon: require('../../../assets/images/event.png'),
          testid: 'consultationNotes',
        },
        {
          route: 'Home',
          name: localizedStrings.sidemenu.blog,
          icon: require('../../../assets/images/news_feed.png'),
          testid: '',
        },
        {
          name: localizedStrings.sidemenu.followColleagues,
          icon: require('../../../assets/images/follow.png'),
          route: 'PeopleToFollow',
          testid: '',
        },
        {
          name: localizedStrings.sidemenu.inviteColleagues,
          icon: require('../../../assets/images/invite.png'),
          route: 'InviteColleague',
          testid: '',
        },
        {
          name: localizedStrings.sidemenu.chatColleagues,
          icon: require('../../../assets/images/message.png'),
          testid: '',
        },
        {
          name: localizedStrings.sidemenu.events,
          icon: require('../../../assets/images/event.png'),
          route: 'Events',
          testid: '',
        },
        {
          icon: require('../../../assets/images/personal_growth.png'),
          name: localizedStrings.sidemenu.betterMe,
          route: 'BatterMeDashboard',
          testid: '',
        },
        {
          route: 'TakePartDashboard',
          icon: require('../../../assets/images/charity.png'),
          name: localizedStrings.sidemenu.takePart,
          testid: '',
        },
        {
          route: 'StarMeUpDashboard',
          icon: require('../../../assets/images/appreciation.png'),
          name: localizedStrings.sidemenu.starmeUp,
          testid: '',
        },
        {
          icon: require('../../../assets/images/logout.png'),
          name: localizedStrings.sidemenu.logout,
          testid: '',
        },
      ],
    });
  }

  render() {
    return this.renderMainView();
  }

  renderMainView = () => {
    return (
      <SafeAreaView testID="slideMenu" style={styles.container}>
        <View style={styles.container}>
          <FlatList
            style={styles.flatList}
            data={this.state.MENU_LIST}
            numColumns={2}
            extraData={this.state}
            ListHeaderComponent={this.renderMenuHeader}
            renderItem={this.renderScreenData}
            // ItemSeparatorComponent={() => (<View style={{ marginRight: 20, marginLeft: 60, height: 0.5, backgroundColor: Color.GREEN }} />)}
          />
        </View>
      </SafeAreaView>
    );
  };

  renderMenuHeader = () => {
    // console.log('hhi');
    this.props.getProfile();
    return this.props.state.profileReducer.items.user == undefined ? (
      <Text>Loading</Text>
    ) : (
      <View style={styles.headerContainer}>
        <CachedImage
          style={styles.imageContainer}
          source={{uri: this.props.state.profileReducer.items.media.profileImg}}
        />
        <View style={{marginLeft: 10}}>
          <Text style={styles.userName}>
            {' '}
            {this.props.state.profileReducer.items.user.firstName}{' '}
            {this.props.state.profileReducer.items.user.lastName}
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('HomeTabNavigator')}>
            <Text style={styles.viewProfile}>View your profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderScreenData = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.screensList}
        testID={item.testid}
        onPress={() => {
          if (item.route) {
            if (item.route == 'Home') {
              this.props.navigation.navigate('HomeTabNavigator', {
                screen: 'Home',
              });
              return;
            }
            this.props.navigation.navigate(item.route);
          }
        }}>
        <CachedImage style={{height: 25, width: 25}} source={item.icon} />
        <Text style={styles.screenTitle}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
}

// export default SideMenu;
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
)(SideMenu);
