const initialState = {
  availableCards: [],
  myCards: [],
  cmts: [],
  like: [],
  loading: true,
  currentPage: 1,
  limit: 20,
  totalCards: 45,
  takepart: [],
  comment: [],
};

export default function takePartReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOAD_TAKE_PART_QUIZ':
      return {
        ...state,
        availableCards: action.data,
        loading: false,
      };

    case 'GET_COMMENT_OF_CARD':
      return {
        ...state,
        comment: action.data,
      };
    case 'postLike':
      return {
        ...state,
        ...action.data,
        loading: false,
      };
    case 'POST_TAKEPART':
      const items = state.items.concat(action.payload);
      return {...state, items};
    case 'addCommentNew':
      return {...state, comment: [...state.comment, action.data]};
    case 'LikeUnlikeComment':
      const like = state.like.concat(action.payload);
      return {...state, like};
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.payload),
      };
    case 'SAVE_COMMENT_LIKE_UNLIKE':
      comment = state.comment.map(comment => {
        if (comment.id === action.commentId) {
          if (!action.isReply) {
            return {
              ...comment,
              isliked: !comment.isliked,
            };
          } else {
            const replies = comment.replies.map(reply => {
              if (reply.id === action.replyCommentId) {
                return {
                  ...reply,
                  isliked: !reply.isliked,
                };
              } else {
                return reply;
              }
            });
            return {
              ...comment,
              replies: replies,
            };
          }
        } else {
          return comment;
        }
      });
      return {...state, comment};
    default:
      return state;
  }
}
