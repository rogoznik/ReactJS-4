import * as Types from '../constants/usersConstants';

export function usersReducer(state = {users: []}, action) {
  switch (action.type) {
    case Types.GETTING_USERS_PENDING: {
      state = {...state};
      break;
    }
    case Types.GETTING_USERS_FULFILLED: {
      state = {...state, users: action.payload.data};
      break;
    }
  }

  return state;
}