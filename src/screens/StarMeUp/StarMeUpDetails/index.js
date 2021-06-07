import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  Alert,
} from 'react-native';
import {Icon, Content, CardItem} from 'native-base';
import {connect} from 'react-redux';
import DeviceInfo from 'react-native-device-info';

import CommentList from './../../../components/CommentList';
import styles from './styles';
import Color from '../../../Helper/Color';
import localizedStrings from '../../../Helper/LocalisedString';
import {
  fetchStarMeCmts,
  addComment,
} from '../../../__Redux/__actions/StarMeUpActions';
class StarMeUpDetails extends Component {
  constructor(props) {
    super(props);

    this.data = null;
    this.state = {
      cmt: '',
    };
  }

  componentWillMount() {
    this.data = this.props.route.params.data;
    // console.log('star cmts', this.data);
  }
  componentDidMount() {
    this.props.getStarMeCmts(this.data.id, this.data.id, 1);
    console.log(this.props.state.starmeReducer);
  }
  updateToDBComment = () => {
    const data = {
      parentId: this.data.id,
      user: {
        id: '123',
        profileImg: '123string',
        name: {
          fname: '123string',
          lname: '123string',
        },
      },
      comment_text: this.state.cmt,
    };
    this.props.postComment(data, this.data.id);
    this.setState({
      cmt: '',
    });
  };

  renderListRow = ({item, index}) => {
    return (
      <View
        style={[
          styles.bottomViewContainer,
          {padding: 0, paddingBottom: 10, paddingHorizontal: 15},
        ]}>
        <Image
          source={{uri: this.data.postedBy.profile}}
          style={styles.senderUserImage}
        />
        <Text testID="thisIsTextComment" style={styles.senderUserName}>
          {' '}
          {localizedStrings.starMeUpDashboard.thisIsTextComment}{' '}
        </Text>
      </View>
    );
  };

  render() {
    const navigation = this.props.navigation;
    let image = null;
    let type = '';

    if (this.data.type === 'kudos') {
      type = `${localizedStrings.starMeUpDashboard.kudos}`;
      image = require('../../../../assets/images/gem.png');
    } else if (this.data.type === 'act_ethically') {
      type = `${localizedStrings.starMeUpDashboard.actEthecally}`;
      image = require('../../../../assets/images/hands.png');
    } else if (this.data.type === 'team_player') {
      type = `${localizedStrings.starMeUpDashboard.teamPlayer}`;
      image = require('../../../../assets/images/people.png');
    } else if (this.data.type === 'constantly_innovate') {
      type = `${localizedStrings.starMeUpDashboard.constantlyInnovate}`;
      image = require('../../../../assets/images/bulb.png');
    } else if (this.data.type === 'excellence_in_your_work') {
      type = `${localizedStrings.starMeUpDashboard.excellence_in_your_work}`;
      image = require('../../../../assets/images/clock.png');
    } else if (this.data.type === 'think_big') {
      type = `${localizedStrings.starMeUpDashboard.think_big}`;
      image = require('../../../../assets/images/rocket.png');
    } else if (this.data.type === 'have_fun') {
      type = `${localizedStrings.starMeUpDashboard.have_fun}`;
      image = require('../../../../assets/images/magic.png');
    }
    const {cmt} = this.state;
    const data1 = this.props.state.starmeReducer.comment;
    return (
      <View
        testID="starMeDetails"
        style={{flex: 1, backgroundColor: Color.WHITE}}
        testID="feed">
        <Content>
          <View style={styles.listItem} activeOpacity={0.6}>
            <View style={styles.starViewContainer}>
              <Image
                source={{uri: this.data.sentTo.profile}}
                style={styles.postUserImage}
              />
              <View style={styles.nameContiner}>
                <Text style={styles.postUserName}>
                  {this.data.sentTo.name.fname}
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
              {/* {this.props.state.starmeReducer.cmts[0].comments.comment} */}
            </Text>
          </View>
          <View style={styles.saperator} />
          <View testID="bottomContainer" style={styles.bottomViewContainer}>
            <Image
              source={{uri: this.data.postedBy.profileImg}}
              style={styles.senderUserImage}
            />
            <Text testID="sendBy" style={styles.senderUserName}>
              {' '}
              {localizedStrings.starMeUpDashboard.sendBy}
              <Text testID="postedByName" style={{fontWeight: 'bold'}}>
                {' '}
                {this.data.postedBy.name.fname}
              </Text>
            </Text>
          </View>
          <View style={styles.saperator} />
          {/* <View style={styles.bottomViewContainer}>
            <View style={styles.likeContainer}>
              <Icon type='FontAwesome' name='heart-o' style={styles.likeIcon} />
              <Text style={styles.likeCount}>30</Text>
            </View>
            <View style={styles.likeContainer}>
              <Icon type='FontAwesome' name='comment-o' style={styles.likeIcon} />
              <Text style={styles.likeCount}>30</Text>
            </View>
          </View> */}
          <CardItem style={styles.likeItemContainer}>
            <View style={styles.likeContainer}>
              <TouchableOpacity onPress={() => {}}>
                {/* <Icon
                  testID="heartIcon"
                  name={this.data.isLiked ? 'heart' : 'heart-o'}
                  type="FontAwesome"
                  style={[
                    styles.cardFooterIcons,
                    {color: this.data.isLiked ? '#f00' : '#666'},
                  ]}
                /> */}
              </TouchableOpacity>
              <Text testID="likeCount" style={styles.cardFooterText}>
                Liked by {this.data.totalLikes} Users
              </Text>
            </View>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => {}}>
              <Icon
                name="comment-o"
                type="FontAwesome"
                style={[styles.cardFooterIcons, {marginLeft: 5}]}
              />
              <Text style={styles.cardFooterText}>
                {' '}
                {data1 ? this.data.totalComments : 0}
              </Text>
            </TouchableOpacity>
          </CardItem>
          <View style={styles.saperator} />
          {data1 ? (
            <CommentList
              style={styles.flatList}
              comments={this.props.state.starmeReducer.comment}
              ListFooterComponent={() => {
                return <View style={{height: 10}} />;
              }}
              ListHeaderComponent={() => {
                return <View style={{height: 10}} />;
              }}
            />
          ) : (
            <Text>No Comment Found</Text>
          )}
        </Content>
        <KeyboardAvoidingView
          keyboardVerticalOffset={80}
          style={{marginBottom: DeviceInfo.hasNotch() ? 25 : 5}}
          behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <View style={styles.saperator} />
          <View style={styles.bottomViewContainer}>
            <TextInput
              value={cmt}
              onChangeText={text => this.setState({cmt: text})}
              placeholder="Your Comments"
              placeholderTextColor="#bbb"
              style={{flex: 1}}
            />
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 10,
                paddingVertical: 6,
                backgroundColor: '#000',
                marginLeft: 10,
              }}
              onPress={() =>
                this.updateToDBComment(() => {
                  console.log('pressed');
                })
              }>
              <Text testID="addText" style={{color: '#fff', fontSize: 15}}>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
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
    getStarMeCmts: (id, parentId, userId) => {
      dispatch(fetchStarMeCmts(id, parentId, userId));
    },
    postComment: (cmt, id) => {
      dispatch(addComment(cmt, id));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StarMeUpDetails);
