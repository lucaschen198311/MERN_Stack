import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import Home from './components/Home';
//import Number from './components/Number';
//import Hello from './components/Hello';
import Post from './components/Post';
import HelloColor from './components/HelloColor';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Post path="/:input"/>
        <HelloColor path="/:word/:color/:bgColor"/>
      </Router>
    </div>
  );
}

export default App;
