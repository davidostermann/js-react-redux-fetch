import {combineReducers} from 'redux';

function newColor(state = {} , action) {
  switch (action.type) {
  case 'CHANGE_NEW_COLOR_VALUE':
    return { ...state, [action.key]: action.value};
  case 'REPLACE_NEW_COLOR':
    return action;
  default:
    return state;
  }
}

function colors(state = [] , action) {
  switch (action.type) {
  case 'ADD_COLOR':
    return [...state, action.color];
  default:
    return state;
  }
}

function objStyle(state = {} , action) {
  switch (action.type) {
  case 'CHANGE_COLOR':
    return { backgroundColor: action.col};
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  newColor,
  objStyle,
  colors
});

export default rootReducer;
