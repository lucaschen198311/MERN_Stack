import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import AuthorCreate from './views/AuthorCreate';
import AuthorUpdate from './views/AuthorUpdate';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <AuthorCreate path="/new"/>
        <AuthorUpdate path="/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
