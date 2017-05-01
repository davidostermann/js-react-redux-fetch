import React from 'react';
import ColorListItem from './ColorListItem';
import './List.css';

const ColorList = (props) =>
<ul className="sub-container list-container">
  {
    props.colors.map( item =>
      <ColorListItem key={item.id} item={item} selectColor={props.changeColor}/>
    )
  }
</ul>;

export default ColorList;
