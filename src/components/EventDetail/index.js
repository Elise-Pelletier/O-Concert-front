import { useSelector, useDispatch } from 'react-redux';
import './eventDetail.scss';
import {
  Card,
  Image,
  Badge,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { fetchEventsByGenre, fetchEventsByRegion } from '../../actions/events';

const EventDetail = () => {
  const { eventDetail } = useSelector((state) => state.events);
  console.log(eventDetail);
  const dispatch = useDispatch();
  return (

    <Card id="eventDetail" className="justify-content-center">
      <Image className="detailImg" variant="top" src={eventDetail.image} />
      <div className="">
        <h2 className="title">{eventDetail.name}</h2>
        <LinkContainer
          to="/resultats-evenements"
          onClick={() => {
            dispatch(fetchEventsByRegion(eventDetail.region.id));
          }}
        >
          <Badge pill bg="secondary">{eventDetail.region.name}</Badge>
        </LinkContainer>
        <LinkContainer
          to="/resultats-evenements"
          onClick={() => {
            dispatch(fetchEventsByGenre(eventDetail.genres[0].id));
          }}
        >
          <Badge pill>{eventDetail.genres[0].name}</Badge>
        </LinkContainer>
      </div>
      <div className="price">{eventDetail.price}€</div>
      <div className="description">{eventDetail.description}</div>
      <a href={`${eventDetail.linkTicketing}`}>Billeterie</a>
    </Card>

  );
};
export default EventDetail;
