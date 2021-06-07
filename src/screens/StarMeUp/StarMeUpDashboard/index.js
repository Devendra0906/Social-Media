import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import {Container, Content, Icon, CardItem} from 'native-base';
import {connect} from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import {Header} from 'react-native-elements';

import styles from './styles';
import data from './data';
import Color from '../../../Helper/Color';
import localizedStrings from '../../../Helper/LocalisedString';
import {
  fetchStarMe,
  likeUnlikeStar,
} from '../../../__Redux/__actions/StarMeUpActions';
import {Alert} from 'react-native';

class StarMeUpDashboard extends Component {
  constructor(props) {
    super(props);
  }
  state = {count: 0};
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    this.props.getStarMe();
    console.log('got star', this.props.state.starmeReducer.items);
    // data = [this.props.state.starmeReducer.items];
  }
  updateToDbLikeUnlikeStar = (parentId, isLiked) => {
    const data = {
      id: 1,
      profileImg: 'string',
      name: {
        fname: 'string',
        lname: 'string',
      },
    };
    this.props.likeStar(parentId, data, isLiked);
  };
  componentDidUpdate(prevState) {
    if (prevState.isLiked !== this.props.state.starmeReducer.items.isLiked) {
      return (
        <Content style={{marginBottom: Platform.OS === 'ios' ? 0 : undefined}}>
          <FlatList
            style={styles.flatList}
            data={this.props.state.starmeReducer.items}
            renderItem={this.renderListRow}
            keyExtractor={(item, index) => `${index}`}
          />
        </Content>
      );
    }
  }

  renderListRow = ({item, index}) => {
    let image = null;
    let type = '';

    if (item.type === 'kudos') {
      type = `${localizedStrings.starMeUpDashboard.kudos}`;
      image = require('../../../../assets/images/gem.png');
    } else if (item.type === 'act_ethically') {
      type = `${localizedStrings.starMeUpDashboard.actEthecally}`;
      image = require('../../../../assets/images/hands.png');
    } else if (item.type === 'team_player') {
      type = `${localizedStrings.starMeUpDashboard.teamPlayer}`;
      image = require('../../../../assets/images/people.png');
    } else if (item.type === 'constantly_innovate') {
      type = `${localizedStrings.starMeUpDashboard.constantlyInnovate}`;
      image = require('../../../../assets/images/bulb.png');
    } else if (item.type === 'excellence_in_your_work') {
      type = `${localizedStrings.starMeUpDashboard.excellence_in_your_work}`;
      image = require('../../../../assets/images/clock.png');
    } else if (item.type === 'think_big') {
      type = `${localizedStrings.starMeUpDashboard.think_big}`;
      image = require('../../../../assets/images/rocket.png');
    } else if (item.type === 'have_fun') {
      type = `${localizedStrings.starMeUpDashboard.have_fun}`;
      image = require('../../../../assets/images/magic.png');
    }

    return item.length <= 0 ? (
      <Text>LOADING</Text>
    ) : (
      <View testID="starmeupDashboard" style={styles.listButtonContainer}>
        <TouchableOpacity
          style={styles.listItem}
          activeOpacity={0.6}
          onPress={() => {
            this.props.navigation.navigate('StarMeUpDetails', {
              data: item,
            });
          }}>
          <View testID="starProfileImg" style={styles.starViewContainer}>
            <Image
              source={{uri: item.sentTo.profileImg}}
              style={styles.postUserImage}
            />
            <View testID="starName" style={styles.nameContiner}>
              <Text style={styles.postUserName}>
                {item.sentTo.name.fname} {item.sentTo.name.lname}
              </Text>
              <View style={styles.statTypeContainer}>
                <Image
                  source={image}
                  style={styles.starTypeIcon}
                  resizeMode="contain"
                />
                <Text style={styles.starTypeText}>{type}</Text>
              </View>
            </View>
          </View>
          <Text style={styles.commentText}>
            {item.totalComments} comments on this post
          </Text>
        </TouchableOpacity>
        <View style={styles.saperator} />
        <View testID="postedBy" style={styles.bottomViewContainer}>
          <Image
            testID="postedByImg"
            source={{
              uri: item.postedBy.profileImg,
            }}
            style={styles.senderUserImage}
          />
          <Text style={styles.senderUserName}>
            {' '}
            {localizedStrings.starMeUpDashboard.sendBy}
            <Text testID="postedByName" style={{fontWeight: 'bold'}}>
              {' '}
              {item.postedBy.name.fname} {item.postedBy.name.lname}
            </Text>
          </Text>
        </View>
        <View style={styles.saperator} />
        <CardItem style={styles.likeItemContainer}>
          <View style={styles.likeContainer}>
            <TouchableOpacity
              onPress={() => {
                this.updateToDbLikeUnlikeStar(item.id, item.isLiked);
              }}>
              <Icon
                name={item.isLiked ? 'heart' : 'heart-o'}
                type="FontAwesome"
                style={[
                  styles.cardFooterIcons,
                  {color: item.isLiked ? '#f00' : '#666'},
                ]}
              />
            </TouchableOpacity>
            <Text style={styles.cardFooterText}>
              Liked by {item.totalLikes} User(s)
            </Text>
          </View>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              this.props.navigation.navigate('StarMeUpDetails', {
                data: item,
              });
            }}>
            <Icon
              name="comment-o"
              type="FontAwesome"
              style={[styles.cardFooterIcons, {marginLeft: 5}]}
            />
            <Text style={styles.cardFooterText}> {item.totalComments}</Text>
          </TouchableOpacity>
        </CardItem>
      </View>
    );
  };

  render() {
    const navigation = this.props.navigation;
    let headerStyle = {height: 64, paddingTop: 20};
    if (DeviceInfo.hasNotch()) {
      headerStyle = {height: 85, paddingTop: 35};
    }
    return (
      <Container testID="feed" style={{backgroundColor: Color.WHITE}}>
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
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name="ios-arrow-back" style={{color: '#000'}} />
            </TouchableOpacity>
          }
          centerComponent={{
            text: 'StarMe Up',
            style: {color: '#000', fontSize: 17, fontWeight: 'bold'},
          }}
          rightComponent={
            <TouchableOpacity
              onPress={() => navigation.navigate('StarMeUpChooseType')}
              testID="btnAddGroup">
              <Icon name="md-add" style={{color: '#000'}} />
            </TouchableOpacity>
          }
        />
        <Content style={{marginBottom: Platform.OS === 'ios' ? 0 : undefined}}>
          <FlatList
            style={styles.flatList}
            data={this.props.state.starmeReducer.items}
            renderItem={this.renderListRow}
            keyExtractor={(item, index) => `${index}`}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getStarMe: () => {
      dispatch(fetchStarMe());
    },
    likeStar: (gettingLiked, likedBy, isLiked) => {
      dispatch(likeUnlikeStar(gettingLiked, likedBy, isLiked));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StarMeUpDashboard);
