import { GET_USERS } from "../constants/usersConstants";

import axios from 'axios';

export function getUsers() {
  let url = 'http://jsonplaceholder.typicode.com/users';
  return {
    type: GET_USERS,
    payload: axios.get(url)
  };
}