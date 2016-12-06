import { combineReducers } from 'redux';
import system from './System/reducer';
import games from './features/Games/reducer';
export default combineReducers({
  games,
	system
})
