import {getNextId, getRandomHex} from '../selectors';

export const changeColor = (col) => ({
  type: 'CHANGE_COLOR',
  col
});

export const handleNewChange = (key, value) => ({
  type: 'CHANGE_NEW_COLOR_VALUE',
  key,
  value
});

export const addHandler = () => (dispatch, getState) => {
  const {newColor} = getState();
  if(newColor.name === '' || newColor.color === '') { return; }
  dispatch({
    type: 'ADD_COLOR',
    color: { ...newColor, id: getNextId(getState().colors) }
  });
};

export const randomColor = () => (dispatch) => {
  return fetch(`http://www.thecolorapi.com/id?hex=${getRandomHex()}`)
  .then( response => response.json())
  .then( json => {
    console.log('json : ', json);
    return dispatch({
      type: 'REPLACE_NEW_COLOR',
      name: json.name.value,
      color: json.name.closest_named_hex
    });
  });

};
