
import baseapi from '../eventapi';


export const getTodayEventAction = (pageNumber,limit,userId) => async dispatch =>{
  const response = await baseapi.get('/events/today/', {
    params: {
      userId: userId,
      skip: pageNumber,
      limit: limit
    }
  });

  
  dispatch({
    type: "FETCH_TODAY_EVENT",
    data: response.data.data
  })
}

export const getThisWeekEventAction = (pageNumber,limit,userId) => async dispatch =>{
  const response = await baseapi.get('/events/this_week/', {
    params: {
      userId: userId,
      skip: pageNumber,
      limit: limit
    }
  });
  dispatch({
    type: "FETCH_THIS_WEEK_EVENT",
    data: response.data.data
  })
}

export const getThisMonthEventAction = (pageNumber,limit,userId) => async dispatch =>{
  const response = await baseapi.get('/events/this_month/', {
    params: {
      userId: userId,
      skip: pageNumber,
      limit: limit
    }
  });
  dispatch({
    type: "FETCH_THIS_MONTH_EVENT",
    data: response.data.data
  })
}

export const getPrevEventAction = (pageNumber,limit,userId) => async dispatch =>{
  const response = await baseapi.get('/events/previous/', {
    params: {
      userId: userId,
      skip: pageNumber,
      limit: limit
    }
  });
  console.log("resp",response);
  dispatch({
    type: "FETCH_PREVIOUS_EVENT",
    data: response.data.data
  })
}

export const joinEventbyId = (eventId) => async dispatch =>{
  await baseapi.post(`/events/${eventId}/join_or_leave`,{
    id:"1",
    profileImg:'url',
    name: {
      fname: 'Virat',
      lname: 'Kohli'
    }
  });
  dispatch({
    type: "JOIN_EVENT",
    data:{
      id:"1",
      profileImg:'url',
      name: {
        fname: 'Virat',
        lname: 'Kohli'
      }
    },
    eventId
  })
}



