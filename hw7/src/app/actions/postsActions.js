import { GET_POSTS } from "../constants/postsConstants";

import axios from 'axios';

export function getPosts() {
  let url = 'http://jsonplaceholder.typicode.com/posts';
  return {
    type: GET_POSTS,
    payload: axios.get(url)
  };
}
