import {CREATE_USER_REQUEST} from './constants';

export function createUser(user) {
  console.log('user===>', user);

  return {
    type: CREATE_USER_REQUEST,
    payload: {user},
  };
}
