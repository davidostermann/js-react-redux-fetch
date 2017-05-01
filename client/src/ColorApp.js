import React from 'react';
import AddContainer from './containers/AddContainer';
import HeaderContainer from './containers/HeaderContainer';
import ListContainer from './containers/ListContainer';

import './ColorApp.css';

const ColorApp = () => (
      <div className="App">
        <HeaderContainer/>
        <div className="container">
          <ListContainer/>
          <AddContainer/>
      </div>
    </div>);

export default ColorApp;
