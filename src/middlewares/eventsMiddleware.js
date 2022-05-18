import axios from 'axios';
// import { URL } from '../../config';
import {
  FETCH_EVENTS_BY_GENRE,
  saveEventsByGenre,
  FETCH_DETAIL_EVENT,
  saveDetailEvent,
  FETCH_EVENTS_ON_HOMEPAGE,
  saveEventsOnHomepage,
  FETCH_EVENTS_BY_REGION,
  saveEventsByRegion,
  FETCH_EVENTS_WITH_SEARCHBAR,
  saveEventsWithSearchBar,
  FETCH_ALL_EVENTS,
  saveAllEvents,
} from '../actions/events';

const eventsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EVENTS_BY_GENRE:
      // We send request to the API in order to get an event list filtered by genres
      axios.get(`http://elise-pelletier.vpnuser.lan:8081/api/genre/${action.id}/events`)
        .then((response) => {
          // console.log(response.data.events);
          store.dispatch(saveEventsByGenre(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_DETAIL_EVENT:
      // We send request to the API in order to get an event detail
      axios.get(`http://elise-pelletier.vpnuser.lan:8081/api/event/${action.id}`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveDetailEvent(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_EVENTS_ON_HOMEPAGE:
      // We send request to the API in order to get an event detail
      axios.get('http://elise-pelletier.vpnuser.lan:8081/api/event/home')
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveEventsOnHomepage(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_EVENTS_BY_REGION:
      // We send request to the API in order to get an event list filtered by genres
      axios.get(`http://elise-pelletier.vpnuser.lan:8081/api/region/${action.id}/events`)
        .then((response) => {
          store.dispatch(saveEventsByRegion(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_EVENTS_WITH_SEARCHBAR:
      // We send request to the API in order to get an event list filtered by genres
      axios.get(`http://elise-pelletier.vpnuser.lan:8081/api/event/region/${action.genreId}/genre/${action.regionId}`)
        .then((response) => {
          // console.log('response', response.data);
          store.dispatch(saveEventsWithSearchBar(response.data));
        })
        .catch(() => {
          // en cas d'erreur 404 on renvoie un tableau vide pour vider le composant
          store.dispatch(saveEventsWithSearchBar([]));
        });
      break;
    case FETCH_ALL_EVENTS:
      // We send request to the API in order to get an event list filtered by genres
      axios.get('http://elise-pelletier.vpnuser.lan:8081/api/event')
        .then((response) => {
          // console.log('response', response.data);
          store.dispatch(saveAllEvents(response.data));
        })
        .catch(() => {
          // console.log('coucou');
        });
      break;
    default:
  }

  // passing the action to the next one (next middleware or reducer)
  next(action);
};

export default eventsMiddleware;
