import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MyContext from './context/MyContext';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  const [val, setVal] = useState("");
  return (
    <div className="App">
      <MyContext.Provider value={{val, setVal}}>
        <Wrapper>
          <Navbar/>
          <Form/>
        </Wrapper>
      </MyContext.Provider>
    </div>
  );
}

export default App;
