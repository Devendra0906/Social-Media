import React, {Component} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {CardItem, Left, Thumbnail, Body} from 'native-base';
import {NavigationContext} from '@react-navigation/native';
import moment from 'moment';

import styles from './styles';
import Color from '../../Helper/Color';

import {bindActionCreators} from 'redux';
import * as Actions from '../../actions/newsfeedaction';
import {connect} from 'react-redux';

class PostList extends Component {
  static contextType = NavigationContext;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllPostsListAction(123, 0, 20);
  }

  // postLikeUnlikeHandle = (item) => {
  //   console.log("item",item)
  //   this.props.savePostLikeUnlike(123,item.id,item.isLiked);
  //   item.isLiked = !item.isLiked
  //   this.setState({})
  // }

  postLikeUnlikeHandle = item => {
    console.log('itemm', item);
    const user = {
      id: '1',
      profileImg: 'xyz',
      name: {
        fname: 'Virat',
        lname: 'Kohli',
      },
    };
    this.props.savePostLikeUnlike(user, item.id, item.isliked);
  };

  renderListRow = ({item, index}) => {
    const navigation = this.context;
    return (
      <View style={styles.listItemContainer} key={index}>
        <CardItem>
          <Left>
            <Thumbnail
              testID="profileimg"
              source={{uri: item.user.userProfile}}
              size={40}
            />
            <Body>
              <Text testID="username" style={styles.userNameText}>
                {item.user.userName}
              </Text>
              <View note style={{flexDirection: 'row'}}>
                <Text testID="date" style={styles.timeText}>
                  {moment(item.createdAt).format('DD.MM.YYYY | HH:mm')}
                </Text>
              </View>
            </Body>
          </Left>
        </CardItem>
        <CardItem content style={{paddingTop: 0}}>
          {this.renderRowBody(item)}
        </CardItem>
        <CardItem style={styles.likeItemContainer}>
          <View style={styles.likeContainer}>
            <TouchableOpacity
              testID="likeorunlike"
              onPress={() => {
                this.postLikeUnlikeHandle(item);
              }}>
              {item.isliked ? (
                <Image
                  source={require('./../../../assets/images/like_filled.png')}
                  style={[styles.cardFooterIcons, {tintColor: Color.BLUE}]}
                />
              ) : (
                <Image
                  source={require('./../../../assets/images/like.png')}
                  style={styles.cardFooterIcons}
                />
              )}
            </TouchableOpacity>
            <Text testID="likecounts" style={styles.cardFooterText}>
              Like {item.totallikes} Users
            </Text>
          </View>

          <TouchableOpacity
            testID="gotopostcomment"
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() =>
              navigation.navigate('PostComment', {
                postData: item,
              })
            }>
            <Image
              testID="commentimg"
              source={require('./../../../assets/images/comment.png')}
              style={styles.cardFooterIcons}
            />
            <Text testID="commentcount" style={styles.cardFooterText}>
              {' '}
              {item.totalComments}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              testID="shareimg"
              source={require('./../../../assets/images/share.png')}
              style={[styles.cardFooterIcons, {marginLeft: 15}]}
            />
          </TouchableOpacity>
        </CardItem>
        <View style={styles.commentItemContainer}>
          <View style={styles.inputContainer}>
            <Image
              testID="thumbnailimg"
              source={require('./../../../assets/images/contacts/batman.jpg')}
              style={styles.thumbImage}
            />
            <TextInput
              testID="commentinitialtext"
              style={styles.commentInput}
              placeholder="comment on this post"
              placeholderTextColor="#bbb"
            />
          </View>
        </View>
      </View>
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
    console.log('data', this.props.postsList);
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.props.postsList}
          renderItem={this.renderListRow}
          style={{margin: 0}}
          contentContainerStyle={{paddingBottom: 20}}
          keyExtractor={(item, index) => `${index}`}
          {...this.props}
        />
      </View>
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
)(PostList);
