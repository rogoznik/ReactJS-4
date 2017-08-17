import * as Types from '../constants/commentsConstants';

export function commentsForPostReducer(state = {commentsForPost: []}, action) {
  switch (action.type) {
    case Types.GET_COMMENTS_FOR_POST_PENDING: {
      state = {...state};
      break;
    }
    case Types.GET_COMMENTS_FOR_POST_FULFILLED: {
      state = {...state, commentsForPost: action.payload.data};
      break;
    }
  }

  return state;
}
