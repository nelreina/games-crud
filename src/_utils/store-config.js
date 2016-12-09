import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';


export default (initialState = {}) => {

	let enhancer;
	const middelwares = applyMiddleware(thunk);

	enhancer = composeWithDevTools(middelwares);

	return createStore(rootReducer, initialState, enhancer);

};
