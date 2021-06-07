import axios from 'axios';
// import { from './config';
import {notesConstants} from '../__constants/notesConstants';
const apiUrl = 'http://10.0.2.2:8004';
export function fetchStarMe() {
  return dispatch => {
    dispatch({
      type: 'fetchStarMe',
    });
    axios
      .get(`${apiUrl}/api/starmeup/recent/?userId=1&skip=0&limit=100`)
      .then(response => {
        // console.log(response.data.data);
        dispatch({
          type: 'fetchStarMeSuccess',
          payload: response.data.data,
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: 'fetchStarMeFailure',
          payload: {error},
        });
        //handleErrors(error)
      });
  };
}

export function fetchStarMeCmts(id, parentId, userId = 1) {
  return dispatch => {
    dispatch({
      type: 'fetchStarMeCmts',
    });
    axios
      .get(
        `${apiUrl}/api/starmeup/${id}/posts/${parentId}/comments?userId=${userId}&skip=0&limit=100`,
      )
      .then(response => {
        console.log('cmts', response.data.data);
        dispatch({
          type: 'fetchStarMeCmtsSuccess',
          payload: response.data.data,
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: 'fetchStarMeCmtsFailure',
          payload: {error},
        });
        //handleErrors(error)
      });
  };
}

export const setStarMeCmt = StarMeObj => {
  return dispatch => {
    const obj = JSON.stringify(StarMeObj);
    axios
      .post(`${apiUrl}/api/starmeup/create/`, obj, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        dispatch({
          type: 'setStarMeCmt',
          payload: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const addComment = (Comment, id = 1) => {
  return dispatch => {
    const obj = JSON.stringify(Comment);
    axios
      .post(`${apiUrl}/api/starmeup/${id}/comments/new`, obj, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        dispatch({
          type: 'addCommentNew',
          payload: response.data,
          data: Comment,
          isLiked: false,
        });
      })
      .catch(error => {
        console.log('error in post comment', error);
      });
  };
};

export const likeUnlikeComment = (gettingLiked, commentId, likedBy) => {
  return dispatch => {
    const obj = JSON.stringify(likedBy);
    axios
      .put(
        `${apiUrl}/api/starmeup/${gettingLiked}/comments/${commentId}/like_or_unlike`,
        obj,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'application/json',
          },
        },
      )
      .then(response => {
        // console.log('from actions', response.data);
        dispatch({
          type: 'LikeUnlikeComment',
          payload: response.data,
          commentId,
          isReply: false,
          replyCommentId: undefined,
        });
      })
      .catch(error => {
        console.log('error in post comment', error);
      });
  };
};

export const likeUnlikeStar = (gettingLiked, likedBy, isLiked) => {
  return dispatch => {
    const obj = JSON.stringify(likedBy);
    axios
      .put(`${apiUrl}/api/starmeup/${gettingLiked}/like_or_unlike`, obj, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        dispatch({
          type: 'LikeUnlikeStar',
          payload: response.data,
          likedBy,
          gettingLiked,
          isLiked,
        });
      })
      .catch(error => {
        console.log('error in post comment', error);
      });
  };
};
