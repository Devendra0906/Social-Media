import axios from 'axios';
import {Alert} from 'react-native';
export function getPatients() {
  return dispatch => {
    return axios
      .get('http://10.0.2.2:8000/users/fetch')
      .then(response => {
        // console.log('from get patients', response.data.data[0][0]);
        return response.data.data[0];
      })
      .then(data => {
        dispatch({
          type: 'GET_PATIENTS',
          payload: data,
        });
      })
      .catch(error => {
        throw error;
      });
  };
}

export function postPatients(PatientData) {
  console.log('from get patient', PatientData);
  return dispatch => {
    return axios
      .post('http://10.0.2.2:8000/users/add', PatientData)
      .then(data => {
        console.log('from get patient', PatientData);

        dispatch({
          type: 'ADD_PATIENTS',
          payload: data,
        });
      })
      .catch(error => {
        console.log(error);
        Alert.alert('An error has occured ');
      });
  };
}
