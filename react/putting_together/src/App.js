import React from 'react';
//import logo from './logo.svg';
import './App.css';
import User from './components/User';

const users = [
  {firstName: "Doe", lastName:"Jane", age:45, hairColor:"Black"},
  {firstName: "Smith", lastName:"John", age:88, hairColor:"Brown"}
]

function App() {
  return (
    <div className="App">
      {
        users.map((element, index)=>{
          return <User firstName={element.firstName} lastName={element.lastName} age={element.age} hairColor={element.hairColor} key={index}/>
        })
      }
    </div>
  );
}

export default App;
