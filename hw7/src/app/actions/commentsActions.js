import { GET_COMMENTS, GET_COMMENTS_FOR_POST } from "../constants/commentsConstants";

import axios from 'axios';

export function getComments() {
  let url = 'http://jsonplaceholder.typicode.com/comments';
  return {
    type: GET_COMMENTS,
    payload: axios.get(url)
  };
}

export function getCommentsForPost(postId) {
  let url = 'http://jsonplaceholder.typicode.com/comments?postId='+postId;
  return {
    type: GET_COMMENTS_FOR_POST,
    payload: axios.get(url)
  };
}
