// changer la valeur de l'un des champs du formulaire de login
export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const changeLoginField = (newValue, name) => ({
  type: CHANGE_LOGIN_FIELD,
  value: newValue,
  name: name,
});

/* payload quand on a besoin d'informations pour traiter l'action
(middleware/reducer) ET que ces informations ne sont pas présentes dans
le state
*/
export const logIn = () => ({
  type: LOG_IN,
});

export const saveUserData = (username, token) => ({
  type: SAVE_USER_DATA,
  username: username,
  token: token,
});
