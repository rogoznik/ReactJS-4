import * as Types from '../constants/postsConstants';

export function postsReducer(state = {posts: []}, action) {
  switch (action.type) {
    case Types.GET_POSTS_PENDING: {
      state = {...state};
      break;
    }
    case Types.GET_POSTS_FULFILLED: {
      state = {...state, posts: action.payload.data};
      break;
    }
  }

  return state;
}
