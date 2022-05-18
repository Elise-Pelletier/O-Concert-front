// import Bootsrap-react's components
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import logo from 'src/assets/images/logo.png';
import { fetchAllEvents } from '../../actions/events';
import { setSelectedRegionId } from '../../actions/regions';
import { setSelectedGenreId } from '../../actions/genres';
import './appHeader.scss';

const AppHeader = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar id="mainNav" expand="lg">
        <Container id="navbar-container">
          <LinkContainer to="/">
            <Navbar.Brand> <img src={logo} alt="logo" height="60" />
            </Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/">
            <Nav.Link>
              <h2 className="navbar-title">Concert'O</h2>
            </Nav.Link>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav " placement="right">
            <Nav className="flex-grow-1 justify-content-evenly">
              <LinkContainer
                to="/"
                onClick={() => {
                  dispatch(setSelectedGenreId());
                  dispatch(setSelectedRegionId());
                }}
              >
                <Nav.Link className="navlink-header">Accueil</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/genres">
                <Nav.Link className="navlink-header">Genres</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/regions">
                <Nav.Link className="navlink-header">Regions</Nav.Link>
              </LinkContainer>
              <LinkContainer
                to="/tous-les-evenements"
                onClick={() => {
                  dispatch(setSelectedGenreId());
                  dispatch(setSelectedRegionId());
                  dispatch(fetchAllEvents());
                }}
              >
                <Nav.Link className="navlink-header">Tous les événements</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
};
export default AppHeader;
