import React, {Component} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Keyboard,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Container, Text, Thumbnail, CardItem, Left, Body} from 'native-base';
import moment from 'moment';

import CommentList from '../../components/CommentListNews';
import styles from './styles';
import Color from '../../Helper/Color';

import * as Actions from '../../actions/newsfeedaction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      like: false,
      comment: '',
      flag: false,
      commentid: '',
    };
  }

  componentWillMount() {
    this.postData = this.props.route.params.postData;
  }

  componentDidMount() {
    this.props.getPostCommentAction(this.postData.id, 1);
  }

  commentPostHandle = (postId, comment, isReply, commentId, replyId) => {
    const user = {
      id: '1',
      profileImg: 'xyz',
      name: {
        fname: 'Virat',
        lname: 'Kohli',
      },
    };
    this.props.postCommentAction(
      postId,
      comment,
      user,
      isReply,
      commentId,
      replyId,
    );
  };

  renderRowBody(dataRow) {
    if (dataRow.images && dataRow.images.length > 0) {
      return (
        <View style={{flex: 1}}>
          {dataRow.description !== '' ? (
            <Text style={styles.postContentText}>{dataRow.description}</Text>
          ) : null}
          <Image
            style={{width: '100%', height: 250, marginTop: 10}}
            source={{uri: dataRow.images[0].path}}
          />
        </View>
      );
    } else {
      return <Text style={styles.postContentText}>{dataRow.description}</Text>;
    }
  }

  render() {
    const navigation = this.props.navigation;
    let headerStyle = {height: 64, paddingTop: 20};
    if (DeviceInfo.hasNotch()) {
      headerStyle = {height: 85, paddingTop: 35};
    }

    const {comment} = this.state;
    // console.log("getpostlist2",this.props.postsList[0].comment)

    return (
      <Container testID="feed" style={{backgroundColor: Color.WHITE}}>
        <ScrollView style={styles.content}>
          <View style={styles.listViewBlock}>
            <View style={styles.listItemContainer}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={{uri: this.postData.user.userProfile}}
                    size={40}
                  />
                  <Body>
                    <Text testID="username" style={styles.userNameText}>
                      {this.postData.user.userName}
                    </Text>
                    <View note style={{flexDirection: 'row'}}>
                      <Text testID="date" style={styles.timeText}>
                        {moment(this.postData.createdAt).format(
                          'DD.MM.YYYY | HH:mm',
                        )}
                      </Text>
                    </View>
                  </Body>
                </Left>
              </CardItem>
              <CardItem content style={{paddingTop: 0}}>
                {this.renderRowBody(this.postData)}
              </CardItem>
              <CardItem style={styles.likeItemContainer}>
                <View style={styles.likeContainer}>
                  <TouchableOpacity
                    testID="likeUnlike"
                    onPress={() => {
                      this.setState({like: !this.state.like});
                    }}>
                    {this.state.like ? (
                      <Image
                        source={require('./../../../assets/images/like_filled.png')}
                        style={{width: 25, height: 25, tintColor: Color.BLUE}}
                      />
                    ) : (
                      <Image
                        source={require('./../../../assets/images/like.png')}
                        style={{width: 25, height: 25}}
                      />
                    )}
                  </TouchableOpacity>
                  <Text testID="countoflikes" style={styles.cardFooterText}>
                    Like 5 Users
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    console.log(this.postData);
                  }}>
                  <Image
                    testID="commentimg"
                    source={require('./../../../assets/images/comment.png')}
                    style={{width: 25, height: 25}}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    testID="shareimg"
                    source={require('./../../../assets/images/share.png')}
                    style={{height: 25, width: 25, marginLeft: 15}}
                  />
                </TouchableOpacity>
              </CardItem>
            </View>
          </View>

          <CommentList
            comments={this.postData.id}
            onPressComment={item => {
              this.commentInput.focus();
              this.setState({flag: true});
              this.setState({commentid: item.id});
            }}
            onPressLike={item => {
              item.isLiked = !item.isLiked;
              this.setState({});
            }}
          />
        </ScrollView>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          keyboardVerticalOffset={80}>
          <View style={styles.inputContainer}>
            <TextInput
              ref={ref => (this.commentInput = ref)}
              style={styles.commentInput}
              placeholder="comment on this post"
              value={comment}
              placeholderTextColor="#bbb"
              onChangeText={text => this.setState({comment: text})}
            />
            <TouchableOpacity
              style={{
                paddingHorizontal: 10,
                justifyContent: 'center',
                top: 0,
                backgroundColor: '#000',
              }}
              onPress={() => {
                // navigation.goBack()

                if (!this.state.flag) {
                  this.commentPostHandle(
                    this.postData.id,
                    this.state.comment,
                    false,
                  );
                } else {
                  this.commentPostHandle(
                    this.postData.id,
                    this.state.comment,
                    true,
                    this.state.commentid,
                  );
                }

                this.setState({comment: ''});

                Keyboard.dismiss();
              }}>
              <Text testID="sendbuttton" style={{color: '#fff'}}>
                Send
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    ...state.newsfeed,
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
)(Home);
