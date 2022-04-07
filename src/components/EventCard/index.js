import PropTypes from 'prop-types';
import './eventCard.scss';
import {
  Card,
  Button,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const EventCard = ({ name, description, image }) => (
  <LinkContainer to="/detail">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name} </Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary stretched-link">Voir le détail</Button>
      </Card.Body>
    </Card>
  </LinkContainer>
);
EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EventCard;
