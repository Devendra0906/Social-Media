import axios from 'axios';
var apiUrl = 'http://10.0.2.2:8009';
const prof = 1;
export const fetchProfile = () => {
  return dispatch => {
    dispatch({
      type: 'FETCH_PROFILE_BEGIN',
    });
    const prof = 1; //profile id
    axios
      .get(`${apiUrl}/api/profile/${prof}`)
      .then(response => {
        // console.log('response',response.data.data[0]);
        dispatch({
          type: 'FETCH_PROFILE_SUCCESS',
          payload: response.data.data[0],
        });
      })
      .catch(error => {
        console.log('failed', error);
        dispatch({
          type: 'FETCH_PROFILE_FAILURE',
          payload: {error},
        });
        //handleErrors(error)
      });
  };
};

export const fetchExperience = () => {
  return dispatch => {
    dispatch({
      type: 'FETCH_EXPERIENCE_BEGIN',
    });

    axios
      .get(`${apiUrl}/api/profile/${prof}`)
      .then(response => {
        // console.log('response', response.data.data[0]);
        dispatch({
          type: 'FETCH_EXPERIENCE_SUCCESS',
          payload: response.data.data[0],
        });
      })
      .catch(error => {
        console.log('failed', error);
        dispatch({
          type: 'FETCH_EXPERIENCE_FAILURE',
          payload: {error},
        });
        //handleErrors(error)
      });
  };
};

export const fetchAccomplishmentsPublications = () => {
  return dispatch => {
    dispatch({
      type: 'FETCH_PUBLICATION_BEGIN',
    });

    axios
      .get(`${apiUrl}/api/profile/${prof}/publications/all`)
      .then(response => {
        // console.log('response', response.data.data[0]);
        dispatch({
          type: 'FETCH_PUBLICATION_SUCCESS',
          payload: response.data.data[0],
        });
      })
      .catch(error => {
        console.log('failed', error);
        dispatch({
          type: 'FETCH_PUBLICATION_FAILURE',
          payload: {error},
        });
        //handleErrors(error)
      });
  };
};

export const fetchAccomplishmentsPatents = () => {
  return dispatch => {
    dispatch({
      type: 'FETCH_PATENTS_BEGIN',
    });

    axios
      .get(`${apiUrl}/api/profile/${prof}/patents/all`)
      .then(response => {
        // console.log('response', response.data.data[0]);
        dispatch({
          type: 'FETCH_PATENTS_SUCCESS',
          payload: response.data.data[0],
        });
      })
      .catch(error => {
        console.log('failed', error);
        dispatch({
          type: 'FETCH_PATENTS_FAILURE',
          payload: {error},
        });
        //handleErrors(error)
      });
  };
};

export const AddExperienceData = exp => {
  return dispatch => {
    // console.log(exp);
    const obj = JSON.stringify(exp);

    axios
      .post(`${apiUrl}/api/workExperience/${prof}`, obj, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        // console.log('success', response.data);
        dispatch({
          type: 'ADD_EXPERIENCE',
          payload: exp,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const AddPublicationData = pub => {
  return dispatch => {
    // console.log(pub);
    const obj = JSON.stringify(pub);

    axios
      .post(`${apiUrl}/api/profile/${prof}/publications/new`, obj, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        // console.log('success', response.data);
        dispatch({
          type: 'ADD_PUBLICATION',
          data: response.data.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const AddPatentData = pub => {
  return dispatch => {
    // console.log(pub);
    const obj = JSON.stringify(pub);

    axios
      .post(`${apiUrl}/api/profile/${prof}/patents/new`, obj, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        // console.log('success', response.data);
        dispatch({
          type: 'ADD_PATENT',
          data: response.data.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const AddProjectData = pub => {
  return dispatch => {
    // console.log(pub);
    const obj = JSON.stringify(pub);

    axios
      .post(`${apiUrl}/api/profile/${prof}/projects/new`, obj, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        // console.log('success', response.data);
        dispatch({
          type: 'ADD_PROJECT',
          data: response.data.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const AddAwardsData = pub => {
  return dispatch => {
    // console.log(pub);
    const obj = JSON.stringify(pub);

    axios
      .post(`${apiUrl}/api/profile/${prof}/honorandawards/add`, obj, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        // console.log('success', response.data);
        dispatch({
          type: 'ADD_AWARDS',
          data: response.data.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const AddLanguageData = pub => {
  return dispatch => {
    // console.log(pub);
    const obj = JSON.stringify(pub);

    axios
      .post(`${apiUrl}/api/profile/${prof}/languages/add`, obj, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        // console.log('success', response.data);
        dispatch({
          type: 'ADD_LANGUAGE',
          data: response.data.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const AddOrganisationData = pub => {
  return dispatch => {
    // console.log(pub);
    const obj = JSON.stringify(pub);

    axios
      .post(`${apiUrl}/api/profile/${prof}/organizations/add`, obj, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        // console.log('success', response.data);
        dispatch({
          type: 'ADD_ORGANISATION',
          data: response.data.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const AddSkillsData = pub => {
  return dispatch => {
    // console.log(pub);
    const obj = JSON.stringify(pub);

    axios
      .post(`${apiUrl}/api/profile/${prof}/skills/add`, obj, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        // console.log('success', response.data);
        dispatch({
          type: 'ADD_ORGANISATION',
          data: response.data.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
