import places from './placesReducer';
import user from './userReducer';
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  router: connectRouter(history),
  places,user
});
