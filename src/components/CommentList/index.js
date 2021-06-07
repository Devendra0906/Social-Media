import React, {Component} from 'react';
import {Text, FlatList, Image, View, TouchableOpacity} from 'react-native';

import styles from './styles';
import {Thumbnail} from 'native-base';
import {likeUnlikeComment} from '../../__Redux/__actions/StarMeUpActions';
import {connect} from 'react-redux';

class CommentList extends Component {
  constructor(props) {
    super(props);
  }
  cmtCaller = () => {
    return (
      <View style={this.props.style}>
        <FlatList
          data={this.props.comments}
          style={{flexGrow: 0}}
          scrollEnabled={false}
          renderItem={this.renderCommentItem}
          {...this.props}
        />
      </View>
    );
  };
  updateToDbLikeUnlikeCmt = (parentId, Id) => {
    // console.log('cmts', this.props.comments[0].comments);
    const data = {
      id: 1,
      profileImg: 'string',
      name: {
        fname: 'string',
        lname: 'string',
      },
    };
    // console.log(parentId, Id, data);
    this.props.likeComment(parentId, Id, data);
  };

  renderCommentItem = ({item, index}) => {
    const navigation = this.props.navigation;

    // if (item.isLiked !== undefined) {
    //   item.comments.isLiked = item.isLiked;
    // }

    item.comments === undefined ? (item = item) : (item = item.comments);
    const likeunlike = true;
    try {
      return (
        <View>
          <View style={styles.commentContainer}>
            <Thumbnail
              style={styles.userImage}
              // source={{uri: item.user.profileImg}}
            />
            <View style={styles.userdetailContainer}>
              <View
                style={{
                  backgroundColor: '#efefef',
                  borderRadius: 8,
                  padding: 8,
                }}>
                <Text style={styles.userName}>
                  {item.user.name.fname} {item.user.name.lname}
                </Text>
                <Text style={styles.comment}>{item.comment_text}</Text>
              </View>
              <View style={styles.likeContainer}>
                <TouchableOpacity
                  // onPress={
                  //   () => { this.functionOne(); this.functionTwo(); }
                  //  }
                  onPress={() => {
                    // this.cmtCaller();
                    // console.log('ulike', item);
                    this.updateToDbLikeUnlikeCmt(item.parentId, item.id);
                  }}>
                  <Text style={styles.likeText}>
                    {item.isLiked ? 'Unlike' : 'Like'}
                  </Text>
                  {/* <Text>{item.totalCommentLikes}</Text> */}
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginLeft: 10}}
                  onPress={this.props.onPressComment}>
                  {/* <Text style={styles.replyText}>Reply</Text> */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      );
    } catch (error) {
      return <Text>error has occured ({error})</Text>;
    }
  };

  render() {
    return (
      <View style={this.props.style}>
        <FlatList
          data={this.props.comments}
          style={{flexGrow: 0}}
          scrollEnabled={false}
          renderItem={this.renderCommentItem}
          {...this.props}
        />
      </View>
    );
  }
}

// export default CommentList;
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    likeComment: (gettingLiked, commentId, likedBy) => {
      dispatch(likeUnlikeComment(gettingLiked, commentId, likedBy));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentList);
