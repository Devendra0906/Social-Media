import axios from 'axios';
// import { from './config';
import {notesConstants} from '../__constants/notesConstants';
const apiUrl = 'http://10.0.2.2:8011';
export function fetchNotes() {
  return dispatch => {
    dispatch({
      type: notesConstants.FETCH_NOTES_BEGIN,
    });
    axios
      .get(`${apiUrl}/api/fetchall`)
      .then(response => {
        // console.log(response.data.data[0]);
        dispatch({
          type: notesConstants.FETCH_NOTES_SUCCESS,
          payload: response.data.data[0],
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: notesConstants.FETCH_NOTES_FAILURE,
          payload: {error},
        });
        //handleErrors(error)
      });
  };
}

export const setNote = noteObj => {
  return dispatch => {
    const obj = JSON.stringify(noteObj);
    axios
      .post(`${apiUrl}/api/add`, obj, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        dispatch({
          type: notesConstants.SET_NOTE,
          payload: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const editNote = noteObj => {
  console.log(noteObj.id);

  return dispatch => {
    const obj = JSON.stringify(noteObj);
    axios
      .put(`${apiUrl}/api/users/update/` + noteObj.id, obj, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        dispatch({
          type: notesConstants.EDIT_NOTES,
          payload: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const deleteNotes = id => {
  return dispatch => {
    axios
      .delete(`${apiUrl}/api/delete/` + id, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        dispatch({
          type: notesConstants.DELETE_NOTES,
          payload: response.data.data[0],
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

function handleErrors(response) {
  console.log(response);
  if (response.status != 200) {
    throw Error(response.statusText);
  }
  return response;
}
