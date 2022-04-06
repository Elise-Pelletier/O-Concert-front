import axios from 'axios';

import { FETCH_REGIONS, saveRegions } from '../actions/regions';

const regionsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_REGIONS:
      axios.get('http://jeremy-bruguier.vpnuser.lan:8080/api/region')
        .then((response) => {
          store.dispatch(saveRegions(response.data));
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

export default regionsMiddleware;
