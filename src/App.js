import React, { Component } from 'react';
import Episodes from './episodes';
import logo from './ds-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="header-title">Dicey Situations</div>
        </div>
        <Episodes />
      </div>
    );
  }
}

export default App;
