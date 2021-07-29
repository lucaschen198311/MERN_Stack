import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Router} from "@reach/router";
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [input, setInput] = useState({name:"", id:""});
  const {name, id} = input; 
  //let routeOfPath = `/${name}/${id}`;
  console.log(`name = ${name}, id=${id}`);

  return (
    <div className="App">
      <Form setInput = {setInput}/>
      <Router>
        <Display path="/:name/:id" />
      </Router>
    </div>
  );
}

export default App;
