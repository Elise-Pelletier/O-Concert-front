import { CHANGE_LOGIN_FIELD, SAVE_USER_DATA } from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  username: '',
  // valeur initiale spéciale : permet de savoir si on est authentifié
  // ou non
  token: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      if (action.email === 'email') {
        return {
          ...state,
          email: action.value,
        };
      }
      // else implicite
      return {
        ...state,
        password: action.value,
      };

    case SAVE_USER_DATA:
      return {
        ...state,
        username: action.username,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
