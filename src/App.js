import React, { Component } from 'react';
import './App.css';
import {Header} from './Components/Header';
import {Footer} from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;
