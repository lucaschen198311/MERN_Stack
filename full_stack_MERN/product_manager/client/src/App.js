import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import PMDetail from './views/PMDetail';
import PMUpdate from './views/PMUpdate';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <PMDetail path="/:id"/>
        <PMUpdate path="/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
