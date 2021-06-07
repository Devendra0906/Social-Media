


const initialState = {
    postsList: [],
    currentPage: 1,
    limit: 20,
    loading: true,
    commentsLimit: 15,
    comment: []
  };
  
  export default function common(state = initialState, action = {}) {
    // let postsList = state.postsList;
    switch (action.type) {

        case "GET_ALL_POSTS_LIST":
          if(action.data.length > 0){
            return{
              ...state,
              postsList: action.data,
              loading: false
            };
          }else{
            return{
              loading: true
            };
          }

        default:
            return state;
        

        case "SAVE_POST_LIKE_UNLIKE":
          postsList = state.postsList.map((post) => {
            if(post.id === action.postId) {
              if(!post.isliked) {
                return {
                  ...post,
                  isliked: !post.isliked,
                  likes: [...post.likes,action.data],
                  totallikes: post.totallikes + 1
                }
              }else{
                const likes = post.likes.filter((value) => value.id !== action.data.id)
                return {
                  ...post,
                  isliked: !post.isliked,
                  likes: likes,
                  totallikes: post.totallikes - 1
                }
              }
            } else {
              return post;
            }
          });
          return { ...state, postsList };
        
          case "GET_POST_COMMENT":
            postsList = state.postsList.map((post) =>{
              
              if(post.id === action.postId){
                return{
                  ...post,
                  comment: [...action.data]
                };
              }else{
                return post;
              }
            });
            // console.log("getpostlist1",postsList);
            return { ...state, postsList };

      
          case "SAVE_NEW_COMMENT":
            postsList = state.postsList.map((post) => {
              if(post.id === action.postId) {
                return{
                  ...post,
                  comment: [...post.comment,action.data]
                }
              } else {
                return post;
              }
            });
            return { ...state, postsList };
        
          case "SAVE_COMMENT_REPLY":
            postsList = state.postsList.map((post) =>{
              if(post.id === action.postId){
                const comment = post.comment.map((comment) =>{
                  if(comment.id === action.commentId){
                    return{
                      ...comment,
                      replies: [...comment.replies,action.data]
                    }
                  }else{
                    return comment;
                  }
                })
                return{
                  ...post,
                  comment: comment
                }
              }else{
                return post;
              }
            });
            return { ...state, postsList };
          case "SAVE_REPLIES_REPLY":
            postsList = state.postsList.map((post) =>{
              if(post.id === action.postId){
                const comment = post.comment.map((comment) =>{
                  if(comment.id === action.commentId){
                    return{
                      ...comment,
                      replies: [...comment.replies,action.data]
                    }
                  }else{
                    return comment;
                  }
                })
                return{
                  ...post,
                  comment: comment
                }
              }else{
                return post;
              }
            });
            return { ...state, postsList };
      
          case "SAVE_COMMENT_LIKE_UNLIKE":
            postsList = state.postsList.map((post) => {
              if(post.id === action.postId) {
                const comment = post.comment.map(comment => {
                  if(comment.id === action.commentId) {
                    if(!action.isReply) {
                      return {
                        ...comment,
                        isliked: !comment.isliked
                      }
                    } else {
                      return {
                        ...comment,
                        replies: comment.replies.map(reply => {
                          if(reply.id === action.replyCommentId) {
                            return {
                              ...reply,
                              isliked: !reply.isliked
                            }
                          } else {
                            return reply;
                          }
                        })
                      }
                    }
                  } else {
                    return comment;
                  }
                });
                return {
                  ...post,
                  comment
                }
              } else {
                return post;
              }
            });
            return { ...state, postsList };
          

          case "GET_COMMENT_REPLIES":
            postsList = state.postsList.map((post) =>{
              if(post.id === action.postId){
                // console.log("reducomment",post.comment)
                const comment = post.comment.map((comment) =>{
                  if(comment.id === action.commentId){
                    const newreplies = action.data.map((reply) => {
                      return {
                        ...reply,
                        postid : action.postId
                      }
                    })
                    return{
                      ...comment,
                      replies: newreplies
                    }
                  }else{
                    return comment;
                  }
                })
                return{
                  ...post,
                  comment: comment
                }
              }else{
                return post;
              }
              
            });
            
            return { ...state, postsList };
        
        

        
        }
    };