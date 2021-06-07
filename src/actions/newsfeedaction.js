import baseapi from '../newsapi';

export const getAllPostsListAction = (
  curUserId,
  skip,
  limit,
) => async dispatch => {
  const response = await baseapi.get(`/get_news_posts/${curUserId}`, {
    params: {
      skip: skip,
      size: limit,
    },
  });
  dispatch({
    type: 'GET_ALL_POSTS_LIST',
    data: response.data.data,
  });
};

export const savePostLikeUnlike = (user, postId, isLiked) => async dispatch => {
  if (!isLiked) {
    await baseapi.put(`/like/${postId}`, {
      id: user.id,
      profileImg: 'xyz',
      name: {
        fname: user.name.fname,
        lname: user.name.lname,
      },
    });
  } else {
    await baseapi.delete(`/dislike/${postId}/${user.id}`);
  }
  dispatch({
    type: 'SAVE_POST_LIKE_UNLIKE',
    postId,
    data: {
      id: 1,
      profileImg: 'xyz',
      name: {
        fname: 'Virat',
        lname: 'Kohli',
      },
    },
  });
};

export const getPostCommentAction = (postId, userId) => async dispatch => {
  const response = await baseapi.get(`/get_comments/${postId}/${userId}`);
  dispatch({
    type: 'GET_POST_COMMENT',
    data: response.data.data,
    postId,
  });
};

export const postCommentAction = (
  postId,
  comment,
  user,
  isReply,
  commentId,
  replyId,
) => async dispatch => {
  if (!isReply) {
    //it's comment
    // console.log("comment");
    await baseapi.post(`/add_comment/${postId}`, {
      parent_id: postId,
      user: {
        id: user.id,
        profileImg: user.profileImg,
        name: {
          fname: user.name.fname,
          lname: user.name.lname,
        },
      },
      comment_text: comment,
      comment_likes: [],
    });
    dispatch({
      type: 'SAVE_NEW_COMMENT',
      data: {
        parent_id: postId,
        user: {
          id: user.id,
          profileImg: user.profileImg,
          name: {
            fname: user.name.fname,
            lname: user.name.lname,
          },
        },
        comment_text: comment,
        comment_likes: [],
        replies: [],
      },
      postId,
    });
  } else if (commentId !== undefined && replyId !== undefined) {
    //it's reply's @reply
    // console.log("Reply @reply");
    await baseapi.post(`/add_comment/${postId}`, {
      parent_id: replyId,
      user: {
        id: user.id,
        profileImg: user.profileImg,
        name: {
          fname: user.name.fname,
          lname: user.name.lname,
        },
      },
      comment_text: comment,
      comment_likes: [],
    });
    dispatch({
      type: 'SAVE_REPLIES_REPLY',
      data: {
        parent_id: replyId,
        user: {
          id: user.id,
          profileImg: user.profileImg,
          name: {
            fname: user.name.fname,
            lname: user.name.lname,
          },
        },
        comment_text: comment,
        comment_likes: [],
      },
      postId,
      commentId,
      replyId,
    });
  } else {
    //it's comment @reply
    // console.log("Reply @comment");
    await baseapi.post(`/add_comment/${postId}`, {
      parent_id: commentId,
      user: {
        id: user.id,
        profileImg: user.profileImg,
        name: {
          fname: user.name.fname,
          lname: user.name.lname,
        },
      },
      comment_text: comment,
      comment_likes: [],
    });
    dispatch({
      type: 'SAVE_COMMENT_REPLY',
      data: {
        parent_id: commentId,
        user: {
          id: user.id,
          profileImg: user.profileImg,
          name: {
            fname: user.name.fname,
            lname: user.name.lname,
          },
        },
        comment_text: comment,
        comment_likes: [],
      },
      postId,
      commentId,
    });
  }
};

export const saveCommentLikeUnlike = (
  postId,
  commentId,
  isReply,
  replyCommentId,
  isliked,
  user,
) => async dispatch => {
  if (!isliked) {
    if (replyCommentId !== undefined) {
      await baseapi.post(`/add_comment_like /${postId}/${replyCommentId}`, {
        user_id: user.id,
        profile_url: user.profileImg,
        name: {
          fname: user.name.fname,
          lname: user.name.lname,
        },
      });
    } else {
      const resp = await baseapi.post(
        `/add_comment_like /${postId}/${commentId}`,
        {
          user_id: user.id,
          profile_url: user.profileImg,
          name: {
            fname: user.name.fname,
            lname: user.name.lname,
          },
        },
      );
      // console.log("likeunlikt",resp);
    }
  } else {
    if (replyCommentId !== undefined) {
      await baseapi.delete(
        `/delete_comment_like/${postId}/${replyCommentId}/${user.id}`,
      );
    } else {
      await baseapi.delete(
        `/delete_comment_like/${postId}/${commentId}/${user.id}`,
      );
    }
  }

  dispatch({
    type: 'SAVE_COMMENT_LIKE_UNLIKE',
    postId,
    commentId,
    isReply,
    replyCommentId,
  });
};

export const getCommentReplies = (
  postId,
  commentId,
  userId,
) => async dispatch => {
  const response = await baseapi.get(`/get_comments/${commentId}/${userId}`);
  if (response.data.error !== undefined) {
    console.log(response.data.error);
  } else {
    // console.log("actionreplies",response.data.data)
    dispatch({
      type: 'GET_COMMENT_REPLIES',
      data: response.data.data,
      postId,
      commentId,
    });
  }
};
