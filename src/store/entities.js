import { combineReducers } from 'redux';
import charactersReducer from './characters';
import locationsReducer from './location';

export default combineReducers({
  characters: charactersReducer,
  locations: locationsReducer,
});
