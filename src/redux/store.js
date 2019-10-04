import { createStore, applyMiddleware } from 'redux';
import wards from './reducers.js';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(wards, composeWithDevTools(applyMiddleware(thunk)));
