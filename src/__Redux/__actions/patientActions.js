import {patientConstants} from '../__constants/patientConstants';
import axios from 'axios';
// import {myConfig} from '../../config';
const apiUrl = 'http://10.0.2.2:8012';
export const fetchPatientsBegin = () => ({
  type: patientConstants.FETCH_PATIENTS_BEGIN,
});

export const fetchPatientsSuccess = response => ({
  type: patientConstants.FETCH_PATIENTS_SUCCESS,
  payload: response.data.data[0],
});

export const fetchPatientsFailure = error => ({
  type: patientConstants.FETCH_PATIENTS_FAILURE,
  payload: {error},
});

export function fetchPatients() {
  return dispatch => {
    dispatch(fetchPatientsBegin());
    axios
      .get(`${apiUrl}/users/fetch`)
      .then(response => {
        // console.log('pat act', response.data.data[0]);
        dispatch(fetchPatientsSuccess(response));
      })
      .catch(error => {
        console.log('error in fatching patients', error);
        dispatch(fetchPatientsFailure(error));
      });
  };
}

export const addPatient = patientObj => {
  return dispatch => {
    console.log(patientObj);
    const obj = JSON.stringify(patientObj);

    axios
      .post(`${apiUrl}/users/add`, obj, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        dispatch({
          type: 'ADD_PATIENT',
          payload: response.data,
        });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const deletePatient = id => {
  return dispatch => {
    console.log('from actions', `${apiUrl}/users/delete/` + id);
    axios
      .delete(`${apiUrl}/users/delete/` + id, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        dispatch({
          type: 'DELETE_ITEM',
          payload: id,
        });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
