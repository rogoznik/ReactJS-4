import * as Types from '../constants/commentsConstants';

export function commentsReducer(state = {comments: []}, action) {
  switch (action.type) {
    case Types.GET_COMMENTS_PENDING: {
      state = {...state};
      break;
    }
    case Types.GET_COMMENTS_FULFILLED: {
      state = {...state, comments: action.payload.data};
      break;
    }
  }

  return state;
}
