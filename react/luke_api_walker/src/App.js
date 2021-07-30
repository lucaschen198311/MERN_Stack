import React, {useState} from 'react';
import './App.css';
import {Router} from "@reach/router";
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [input, setInput] = useState({name:"", id:""});
  const {name, id} = input; 
  //const [state, setState] = useState([]);
  console.log(`name = ${name}, id=${id}`);

  return (
    <div className="App">
      <Form setInput = {setInput} />
      <Router>
        <Display path="/:name/:id" />
      </Router>
    </div>
  );
}

export default App;
