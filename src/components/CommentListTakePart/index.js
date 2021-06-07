import React, {Component} from 'react';
import {Text, FlatList, Image, View, TouchableOpacity} from 'react-native';

import styles from '../CommentList/styles';
import {Thumbnail} from 'native-base';
import * as Actions from '../../__Redux/__actions/takePartActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  addComment,
  getCommentsofCard,
  saveCommentLikeUnlike,
} from '../../__Redux/__actions/takePartActions';
class CommentListTakePart extends Component {
  constructor(props) {
    super(props);
  }
  updateToDBLike = (cardId, commentId) => {
    const likeID = {
      user_id: 123,
      profile_url: 'stri124208ng',
      name: {
        fname: 'strin21123g',
        lname: 'strin1232132g',
      },
    };
    this.props.likeCmt(cardId, commentId, likeID);
  };
  renderCommentItem = ({item, index}) => {
    return (
      <View>
        <View style={styles.commentContainer}>
          <Thumbnail
            style={styles.userImage}
            source={{uri: item.user.profileImg}}
          />
          <View style={styles.userdetailContainer}>
            <View
              style={{backgroundColor: '#efefef', borderRadius: 8, padding: 8}}>
              <Text style={styles.userName}>
                {item.user.name.fname} {item.user.name.lname}
              </Text>
              <Text style={styles.comment}>{item.comment_text}</Text>
            </View>
            <View style={styles.likeContainer}>
              <TouchableOpacity
                onPress={() =>
                  this.props.likeUnlikeCmt(
                    item.parent_id,
                    item.id,
                    false,
                    undefined,
                    item.isliked,
                    item.user,
                  )
                }>
                <Text style={styles.likeText}>
                  {item.isliked ? 'Unlike' : 'Like'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginLeft: 10}}
                onPress={this.props.onPressComment}>
                {/* <Text style={styles.replyText}>Reply</Text> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {item.replies && item.replies.length > 0 && (
          <FlatList
            data={item.replies}
            style={styles.repliesList}
            scrollEnabled={false}
            renderItem={this.renderCommentItem}
          />
        )}
      </View>
    );
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

// export default CommentListTakePart;
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCardCmts: (id, parentId) => {
      dispatch(getCommentsofCard(id, parentId));
    },
    postComment: (comment, id) => {
      dispatch(addComment(comment, id));
    },
    likeCmt: (cardId, commentId, likeID) => {
      dispatch(likeUnlikeComment(cardId, commentId, likeID));
    },
    UnlikeCmt: (card_id, comment_id, user_id) => {
      dispatch(unlikeComment(card_id, comment_id, user_id));
    },
    likeUnlikeCmt: (
      card_id,
      commentId,
      isReply,
      replyCommentId,
      isliked,
      user,
    ) => {
      dispatch(
        saveCommentLikeUnlike(
          card_id,
          commentId,
          isReply,
          replyCommentId,
          isliked,
          user,
        ),
      );
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentListTakePart);
