import axios from 'axios';
import baseapi from '../peopletofollowapi';
export const loadCoworkersAction = () => async dispatch => {
  const resp = await axios.get(
    'http://10.0.2.2:8008/api/people/60263c56fe615b45578b026b',
  );
  //console.log(resp.data)
  // console.log("thisfunc")
  dispatch({
    type: 'LOAD_COWORKERS',
    payload: resp.data.data,
  });
};
export const followAction = id => dispatch => {
  baseapi.post(`/following/${id}`, {
    id: '60263c56fe615b45578b026b',
    firstName: 'Chetan',
    lastName: 'Godhani',
    profile_id: '60263c56fe615b45578b026b',
    user: {
      fname: 'Chetan',
      lname: 'Godhani',
    },
    media: {
      bannerImg: 'string',
      profileImg: 'https://randomuser.me/api/portraits/men/97.jpg',
    },
  });
  dispatch({
    type: 'FOLLOW_UNFOLLOW',
    id,
  });
};

export const unfollowAction = id => dispatch => {
  baseapi.delete(`/unfollow/${id}`);
  dispatch({
    type: 'FOLLOW_UNFOLLOW',
    id,
  });
};
