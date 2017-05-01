import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

const Header = ({objStyle}) =>
<div>
  <div className="App-header" style={objStyle}>
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Coloring input</h2>
  </div>
  <p className="App-intro">
    Quand je clique sur un element de la liste ci-dessous, je change la couleur de fond du header
  </p>
</div>;

export default Header;
