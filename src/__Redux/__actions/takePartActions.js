import baseapi from '../api';
import axios from 'axios';
// import {myConfig} from './config';
const apiUrl = 'http://10.0.2.2:8005';
export const get_all_cardsaction = (userId, skip, limit) => async dispatch => {
  const response = await baseapi.get(
    `/get_all_cards/${userId}?skip=0&limit=0`,
    {
      params: {
        skip: skip,
        limit: limit,
      },
    },
  );
  setTimeout(() => {
    // console.log('takepart actiosn', response.data.data);
    dispatch({
      type: 'LOAD_TAKE_PART_QUIZ',
      data: response.data.data,
    });
  }, 1000);
};

export const getCommentsofCard = (parent_id, user_id) => async dispatch => {
  const response = await baseapi.get(`/get_comments/${parent_id}/${user_id}`);
  dispatch({
    type: 'GET_COMMENT_OF_CARD',
    data: response.data.data,
  });
};

export const LikeUnlikeTakePartCmt = (
  card_id,
  comment_id,
  userId = 123,
) => async dispatch => {
  const response = await baseapi.post(
    `/add_comment_like/${card_id}/${comment_id}`,
    {
      user_id: userId,
      profile_url: 'string',
      name: {
        fname: 'fname',
        lname: 'lname',
      },
    },
  );
  //   console.log('liked', response.data);
  dispatch({
    type: 'postLike',
    data: {
      user_id: 'string',
      profile_url: 'string',
      name: {
        fname: 'fname',
        lname: 'lname',
      },
    },
  });
};

export const addComment = (Comment, id = 1) => {
  return dispatch => {
    const obj = JSON.stringify(Comment);
    console.log(Comment);
    axios
      .post(`${apiUrl}/api/add_comment/${id}`, obj, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log(response.data);
        dispatch({
          type: 'addCommentNew',
          payload: response.data,
          data: Comment,
        });
      })
      .catch(error => {
        console.log('error in post comment', error);
      });
  };
};
export const saveCommentLikeUnlike = (
  card_id,
  commentId,
  isReply,
  replyCommentId,
  isliked,
  user,
) => async dispatch => {
  if (!isliked) {
    if (replyCommentId !== undefined) {
      axios.post(`${apiUrl}/api/add_comment_like /${card_id}/${commentId}`, {
        user_id: user.id,
        profile_url: user.profileImg,
        name: {
          fname: user.name.fname,
          lname: user.name.lname,
        },
      });
    } else {
      axios.post(`${apiUrl}/api/add_comment_like /${card_id}/${commentId}`, {
        user_id: user.id,
        profile_url: user.profileImg,
        name: {
          fname: user.name.fname,
          lname: user.name.lname,
        },
      });
    }
  } else {
    if (replyCommentId !== undefined) {
      axios.delete(
        `${apiUrl}/api/delete_comment_like/${card_id}/${replyCommentId}/${
          user.id
        }`,
      );
    } else {
      axios.delete(
        `${apiUrl}/api/delete_comment_like/${card_id}/${commentId}/${user.id}`,
      );
    }
  }
  dispatch({
    type: 'SAVE_COMMENT_LIKE_UNLIKE',
    commentId,
    isReply,
    replyCommentId,
  });
};
