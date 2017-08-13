import dispatcher from '../dispatcher';

import { ADD_POST, FETCH_POSTS_START, DEL_POST } from '../constants/postsConstants';

export function addPost({userId, id, title, body}) {
  const blog = {userId, id, title, body};

  dispatcher.dispatch({
    type: ADD_POST,
    payload: blog
  });
}

export function delPost(id) {
  dispatcher.dispatch({
    type: DEL_POST,
    payload: id
  });
}

export function fetchPosts() {
  dispatcher.dispatch({
    type: FETCH_POSTS_START
  });
}