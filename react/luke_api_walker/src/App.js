import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import {Router} from "@reach/router"

function App() {
  const [input, setInput] = useState({name:"", id:""});
  const {name, id} = input; 
  let routeOfPath = `/${name}/${id}`;
  return (
    <div className="App">
      <Form setInput = {setInput}/>
      <Router>
        <Display path={routeOfPath} />
      </Router>
    </div>
  );
}

export default App;
