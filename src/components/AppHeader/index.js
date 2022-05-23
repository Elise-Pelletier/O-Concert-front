// import Bootsrap-react's components
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import logo from 'src/assets/images/logo.png';
import LoginForm from 'src/components/LoginForm';

import { fetchAllEvents } from '../../actions/events';
import { setSelectedRegionId } from '../../actions/regions';
import { setSelectedGenreId } from '../../actions/genres';
import { changeLoginField, logIn } from '../../actions/user';

import './appHeader.scss';

const AppHeader = () => {
  // const emailValue = useSelector((state) => state.users.email);
  // const passwordValue = useSelector((state) => state.users.password);
  // const username = useSelector((state) => state.users.username);
  // const token = useSelector((state) => state.users.token);

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
      <LoginForm
         // email={emailValue}
         // password={passwordValue}
        changeField={(newValue, name) => {
          console.log(`changeField, newValue=${newValue} name=${name}`);

          const action = changeLoginField(newValue, name);
          dispatch(action);
        }}
        handleLogin={() => {
          console.log('handleLogin');

          // on dispatch une action qui sera traitée par userMiddleware
          // => envoi d'une requête
          dispatch(logIn());
        }}
        handleLogout={() => {
          console.log('handleLogout');
        }}
       // isLogged={token !== null}
       // loggedMessage={`Bienvenue ${username}`}
      />
    </div>

  );
};
export default AppHeader;
