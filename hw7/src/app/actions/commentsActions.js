import { GET_COMMENTS } from "../constants/commentsConstants";

import axios from 'axios';

export function getComments() {
  let url = 'http://jsonplaceholder.typicode.com/comments';
  return {
    type: GET_COMMENTS,
    payload: axios.get(url)
  };
}
