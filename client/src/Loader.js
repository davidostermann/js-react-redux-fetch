import React from 'react';
import logo from './logo.svg';

const Loader = (WrappedComponent, loading, props) => {

  return (loading) ?
    <img src={logo} className="App-logo" alt="logo" />
    : <WrappedComponent { ...props }/>;

};

export default Loader;
