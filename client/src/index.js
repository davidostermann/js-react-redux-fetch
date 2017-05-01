import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import ColorApp from './ColorApp';
import rootReducer from './reducers';
import './index.css';

const stateFromLocal = localStorage.getItem('state');

let initialState = ( stateFromLocal
&& stateFromLocal.colors
&& stateFromLocal.newColor
&& stateFromLocal.objStyle ) ? stateFromLocal : {
  objStyle : {backgroundColor: 'blue'},
  colors : [
    {id:1, name:'violet', color:'#f5aafb'},
    {id:2, name:'marin blue', color:'rgb(43, 77, 153)'},
    {id:3, name:'pale green', color:'#aafbde'},
    {id:4, name:'vermillon', color:'#fe532e'},
    {id:5, name:'sky blue', color:'#82c4fa'},
    {id:6, name:'salmon', color:'#fb8b8b'},
  ],
  newColor: {
    name: '',
    color: ''
  }
};

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk, logger))
);

store.subscribe(() => {
  localStorage.state = JSON.stringify(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <ColorApp />
  </Provider>,
  document.getElementById('root')
);
