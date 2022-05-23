import axios from 'axios';

import { LOG_IN, saveUserData } from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN:
      axios.post(
        // URL
        'http://elise-pelletier.vpnuser.lan:8081/api/user',
        // données
        {
          // ne pas oublier le nom du tiroir ;)
          email: store.getState().users.email,
          password: store.getState().users.password,
        },
      )
        .then((response) => {
          console.log(response);

          // on dispatch une action pour faire réagir le reducer user
          store.dispatch(saveUserData(response.data.username, response.data.token));
        })
        .catch((error) => {
          // TODO afficher une erreur à l'utilisateur
          console.log(error);
        });
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default userMiddleware;
