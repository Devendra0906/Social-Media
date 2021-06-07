
import baseapi from '../bettermeapi';

export const fetchFeedbacksAndRequestAction = (skip, limit) => async dispatch => {
    const response= await baseapi.get("/betterme/received",{
        params:{
            skip:skip,
            limit:limit
        }
    });
    
      setTimeout(() => {
        dispatch({
          type: "FETCH_RECEIVED_FEEDBACKS",
          data: response.data.data
        })
      }, 1000);

}

export const fetchsentfeedbacks = (skip,limit) => async dispatch => {
    const response= await baseapi.get("/betterme/sent",{
      params:{
        skip:skip,
        limit:limit
      }
    });
    
    setTimeout(() => {
      dispatch({
        type: "FETCH_SENT_FEEDBACKS",
        data: response.data.data
        })
      },1000);
  
}

export const fetchfeedbackrequests = (skip,limit) => async dispatch => {
  const response= await baseapi.get("/betterme/requests",{
    params:{
      skip:skip,
      limit:limit
    }
  });
  console.log("tttt",response.data.data);
  setTimeout(() => {
    dispatch({
      type: "FETCH_FEEDBACK_REQUESTS",
      data: response.data.data
      })
    },1000);
}

export const addfeedbackrequest = (competencies,comment) => async dispatch => {
  await baseapi.post("/betterme/request/",{
      "sender": {
        "id": "string",
        "name": "string",
        "profile": "string"
      },
      "sentTo": {
        "id": "string",
        "name": "string",
        "profile": "string"
      },
      "competencies": competencies,
      "comment": comment
  });
  console.log("kkk",competencies);
  dispatch({
    type: "ADD_FEEDBACK_REQUESTS",
    data: {
        "sender": {
          "id": "string",
          "name": "string",
          "profile": "string"
        },
        "sentTo": {
          "id": "string",
          "name": "string",
          "profile": "string"
        },
        "competencies": [],
        "comment": "string"
      
    },
  });
}



export const addsentrequests = (Feedback,comment) => async dispatch => {
  await baseapi.post("/betterme/send/",{
    "sender": {
      "id": "string",
      "name": "string",
      "profile": "string"
    },
    "sentTo": {
      "id": "string",
      "name": "string",
      "profile": "string"
    },
    "Feedbacks": Feedback
    ,
    "comment": comment
  });

  dispatch({
    type: "ADD_SENT_REQUESTS",
    data: {
      "sender": {
        "id": "string",
        "name": "string",
        "profile": "string"
      },
      "sentTo": {
        "id": "string",
        "name": "string",
        "profile": "string"
      },
      "Feedbacks": [],
      "comment": "string"
      
    },
  });
}






