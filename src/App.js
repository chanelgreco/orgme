import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <section>
          <div className="box">
          <p>Date:</p>
          <p>Activity:</p>
          <p>Duration:</p>
          </div>
        </section>

      </div>
    );
  }
}

export default App;
