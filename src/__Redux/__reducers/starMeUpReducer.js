const initialState = {
  items: [],
  loading: false,
  error: null,
  like: [],
  comment: [],
};

export default function starmeReducer(state = initialState, action) {
  let stars = state.items;
  switch (action.type) {
    case 'fetchStarMe':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'fetchStarMeSuccess':
      return {
        ...state,
        error: null,
        loading: false,
        items: action.payload,
      };

    case 'fetchStarMeFailure':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case 'setStarMe':
      const items = state.items.concat(action.payload);
      return {...state, items};
    case 'addCommentNew':
      const val = {
        isLiked: false,
      };
      action.data.isLiked = false;
      const comment = [action.data];

      console.log(comment);
      return {
        ...state,
        comment: [...state.comment, action.data],
      };
    case 'fetchStarMeCmts':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'fetchStarMeCmtsSuccess':
      // console.log(action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        comment: action.payload,
      };

    case 'fetchStarMeCmtsFailure':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case 'LikeUnlikeComment':
      const cmts = state.comment.map(comment => {
        if (comment.comments.id === action.commentId) {
          // console.log('from reducer', comment.comments.isLiked);
          return {
            ...comment,
            comments: {
              ...comment.comments,
              isLiked: !comment.comments.isLiked,
            },
          };
        } else {
          return comment;
        }
      });
      // console.log('data from reduceers', cmts);
      return {...state, comment: cmts};
    case 'LikeUnlikeStar':
      const item = state.items.map(star => {
        if (star.id === action.gettingLiked) {
          if (star.isLiked) {
            return {
              ...star,
              isLiked: !star.isLiked,
              totalLikes: star.totalLikes - 1,
              stars_likes: [...star.stars_likes, action.likedBy],
            };
          } else {
            const starlikes = star.stars_likes.filter(itm => {
              itm.id !== action.likedBy.id;
            });
            return {
              ...star,
              isLiked: !star.isLiked,
              totalLikes: star.totalLikes + 1,
              stars_likes: starlikes,
            };
          }
        } else {
          return star;
        }
      });
      return {...state, items: item};
    default:
      return state;
  }
}
