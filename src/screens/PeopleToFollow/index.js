import React, {Component} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  FlatList,
  Button,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Header} from 'react-native-elements';
import {Container, Content, Icon} from 'native-base';
import styles from './styles';
import localizedStrings from '../../Helper/LocalisedString';
import axios from 'axios';
// import {loadCoworkersAction} from '../../actions/peopletofollowactions';
import {connect} from 'react-redux';
import * as Actions from '../../actions/peopletofollowactions';
import {bindActionCreators} from 'redux';

class PeopleToFollow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.props.loadCoworkersAction();
    // console.log('people', this.props.coworkers);
  }

  /*people: [
        {
          name: 'Chetan Godhani',
          isFollow: false,
          image: require('../../../assets/images/contacts/batman.jpg')
        },
        {
          name: 'Fouad Omri',
          isFollow: false,
          image: require('../../../assets/images/contacts/batman.jpg')
        },
        {
          name: 'Safa Omri',
          isFollow: false,
          image: require('../../../assets/images/contacts/batman.jpg')
        },
        {
          name: 'Anas Laffet',
          isFollow: false,
          image: require('../../../assets/images/contacts/batman.jpg')
        }
      ]
    }
  }
  */ handleFollowButton = value => {
    // console.log(value);
    !value.follow
      ? this.props.followAction(value._id)
      : this.props.unfollowAction(value._id);
  };

  renderConnectionListItem = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 15,
          paddingVertical: 8,
          alignItems: 'center',
        }}>
        <Image
          source={{uri: item.media.profileImg}}
          style={{height: 40, width: 40, borderRadius: 20}}
        />
        <View style={{flex: 1, marginHorizontal: 10}}>
          <Text
            style={{fontSize: 16, fontWeight: '600', color: '#000'}}
            numberOfLines={2}>
            {item.user.firstName + ' ' + item.user.lastName}
          </Text>
          {/* <Text style={{ fontSize: 12, color: '#666', marginTop: 4 }}
            numberOfLines={2}>
            Mobile Application Developer
          </Text>
          <Text style={{ fontSize: 12, color: '#666', marginTop: 10 }}>
            Connected 4 days ago
          </Text> */}
        </View>
        <TouchableOpacity
          hitSlop={{top: 8, bottom: 8, right: 8, left: 8}}
          onPress={() => {
            item.follow = !item.follow;
            this.setState({});
          }}>
          {item.follow ? (
            //<Image source={require('../../../assets/images/removeUser.png')} style={{ height: 25, width: 25 }} />
            //:
            //<Image source={require('../../../assets/images/invite.png')} style={{ height: 25, width: 25 }} />}
            <TouchableOpacity onPress={() => this.handleFollowButton(item)}>
              <Text>Unfollow</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => this.handleFollowButton(item)}>
              <Text>Follow</Text>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const navigation = this.props.navigation;
    const {profileImage} = this.state;
    let headerStyle = {height: 64, paddingTop: 20};
    if (DeviceInfo.hasNotch()) {
      headerStyle = {height: 85, paddingTop: 35};
    }

    return (
      <Container style={{backgroundColor: '#fff'}}>
        <Header
          containerStyle={[
            {
              backgroundColor: '#fff',
              paddingTop: 0,
              elevation: 10,
              shadowOffset: {width: 0, height: 2},
              shadowRadius: 2,
              shadowOpacity: 0.1,
              shadowColor: '#000',
              marginBottom: 5,
            },
            headerStyle,
          ]}
          leftComponent={
            <TouchableOpacity
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              testID="sideMenuButton"
              onPress={() => navigation.goBack()}>
              <Icon
                type="Ionicons"
                name="ios-arrow-back"
                style={{color: '#000'}}
              />
            </TouchableOpacity>
          }
          centerComponent={{
            text: `${localizedStrings.peopleToFollow.peopleToFollow}`,
            style: {color: '#000', fontSize: 17, fontWeight: 'bold'},
          }}
        />

        <FlatList
          data={this.props.coworkers}
          contentContainerStyle={{paddingTop: 10, paddingBottom: 20}}
          renderItem={this.renderConnectionListItem}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={() => (
            <View
              style={{height: 1, marginHorizontal: 0, backgroundColor: '#ddd'}}
            />
          )}
        />
      </Container>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     ...state.common,
//     ...state.peopletofollow,
//   };
// };
// // const mapDispatchToProps = dispatch => {
// //   return {
// //     ...bin({ ...Actions }, dispatch)
// //   };
// // };

// export default connect(
//   mapStateToProps,
//   {loadCoworkersAction},
// )(PeopleToFollow);

const mapStateToProps = state => {
  return {
    ...state.common,
    ...state.peopletofollow,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({...Actions}, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PeopleToFollow);
