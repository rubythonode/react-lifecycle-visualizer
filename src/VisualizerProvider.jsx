import * as React from 'react';
import { createProvider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import * as constants from './constants';
import * as actionCreators from './actionCreators';
import { reducer } from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Provider = createProvider(constants.reduxStoreKey);

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);

export const clearLog = () => store.dispatch(actionCreators.clearLog());
// Store never changes, so we can safely export this bound function.

const VisualizerProvider = ({children}) => (
  <Provider store={store}>{children}</Provider>
);

export default VisualizerProvider;
