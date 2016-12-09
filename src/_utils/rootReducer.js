import { combineReducers } from 'redux';
import system from '../System/reducer';
import notisianan from '../features/Notisia/reducer';
import videonan from '../features/Videos/reducer';
export default combineReducers({
  notisianan,
	videonan,
	system
})
