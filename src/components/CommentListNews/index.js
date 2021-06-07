import React, { Component } from 'react';
import { Text, FlatList, Image, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Thumbnail } from 'native-base';

import * as Actions from '../../actions/newsfeedaction';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

class CommentList extends Component {

  constructor(props) {
    super(props)

  }

  commentLikeUnlikeHandle = (item) => {
    console.log("yaya",item)
    // console.log("random",this.props.id)
    const user={
      id: "1",
      profileImg: "xyz",
      name:{
        fname: "Virat",
        lname: "Kohli"
      }
    }
    if (item.postid == undefined){
      this.props.saveCommentLikeUnlike(item.parent_id,item.id, false, undefined, item.isliked, user);
    }
    else{
      this.props.saveCommentLikeUnlike(item.postid,item.parent_id, true, item.id, item.isliked, user);
    }
    
  }



  handleLoadReplies = (item) => {
    
    const userId = 1;
    this.props.getCommentReplies(item.parent_id,item.id, userId);
    // console.log("55555",item);
  }



  renderCommentItem = ({ item, index }) => {
    // console.log("iiiiii",item)
    return (
      <View>
        <View style={styles.commentContainer}>
          <Thumbnail style={styles.userImage} source={{ uri: item.userProfile }} />
          <View style={styles.userdetailContainer}>
            <View style={{ backgroundColor: "#efefef", borderRadius: 8, padding: 8 }}>
              <Text style={styles.userName}>
                {item.user.name.fname} {item.user.name.lname}
              </Text>
              <Text style={styles.comment}>
                {item.comment_text}
              </Text>
            </View>
            <View style={styles.likeContainer}>
              <TouchableOpacity onPress={() => this.commentLikeUnlikeHandle(item)}>
                <Text style={styles.likeText}>
                  {item.isliked ? 'Unlike' : 'Like'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => {this.props.onPressComment(item)}} >
                <Text style={styles.replyText}>
                  Reply
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => {this.handleLoadReplies(item)}} >
                <Text style={styles.replyText}>
                  Load Replies
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {(item.replies && item.replies.length > 0) &&
          <FlatList
            data={item.replies}
            style={styles.repliesList}
            scrollEnabled={false}
            renderItem={this.renderCommentItem}
          />
        }
      </View>
    )
  }

  render() {
    console.log("pppop",this.props.postsList);
    const comments = this.props.postsList.filter((item)=> item.id  == this.props.comments)
    console.log("okkk",comments[0].comment);
    return (
      <View style={this.props.style}>
        <FlatList
          data={comments[0].comment}
          style={{ flexGrow: 0 }}
          scrollEnabled={false}
          renderItem={this.renderCommentItem}
          // {...this.props}
        />
      </View>
    )
  }
}



const mapStateToProps = state => {
  return {
    // ...state,
    ...state.newsfeed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ ...Actions}, dispatch)
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(CommentList);