import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Admin from './Admin';
import Register from './Register';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Admin />
        {/* <Register /> */}
      </div>
    )
  }
}

export default App;
