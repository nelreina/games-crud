import { combineReducers } from 'redux';
import system from './System/reducer';
import notisianan from './features/Notisia/reducer';
export default combineReducers({
  notisianan,
	system
})
