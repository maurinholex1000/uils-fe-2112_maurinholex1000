import {CREATE_USER_REQUEST} from './constants';

const initialState = {
  data: {
    name: '',
    surname: '',
    email: '',
    password: '',
    token: '',
  },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return {
        data: action.payload.user,
      };

    default:
      return state;
  }
}
