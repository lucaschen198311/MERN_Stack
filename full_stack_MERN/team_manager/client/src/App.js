import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import PlayerCreate from './views/PlayerCreate';
import PlayerStatus from './views/PlayerStatus';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/players/list"/>
        <PlayerCreate path="/players/addplayer"/>
        <PlayerStatus path="/players/status/game/:id"/>
      </Router>
    </div>
  );
}

export default App;