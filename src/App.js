import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Admin from './Admin';
import Register from './Register';
import NeumorphicLogin from './NeumorphicLogin';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Admin />
        {/* <Register /> */}
        {/* <NeumorphicLogin /> */}
      </div>
    )
  }
}

export default App;
