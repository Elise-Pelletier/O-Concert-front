import axios from 'axios';
// import { URL } from '../../config';
import {
  FETCH_GENRES, saveGenres,
} from '../actions/genres';

const genresMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case FETCH_GENRES:
    // We send request to the API in order to get genres list
      axios.get('http://elise-pelletier.vpnuser.lan:8081/api/genre')
        .then((response) => {
          store.dispatch(saveGenres(response.data));
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default genresMiddleware;
