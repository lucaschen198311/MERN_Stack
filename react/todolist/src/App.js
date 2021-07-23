import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import TaskList from './components/TaskList';

function App() {
  const [taskArr, setTaskArr] = useState([]);
  const handleInput = (input)=>{
    setTaskArr([...taskArr, input]);
  }
  const handleDelete = (e,index)=>{
    e.preventDefault();
    setTaskArr(taskArr.filter((item, idx)=>idx!==index));
  }
  const handleCheck = (index)=>{
    //e.preventDefault();
    const taskChecked = taskArr[index];
    taskChecked.completed = true;
    setTaskArr([...taskArr.slice(0,index), taskChecked, ...taskArr.slice(index+1)])
  }
  const handleUnCheck = (index)=>{
    //e.preventDefault();
    const taskUnChecked = taskArr[index];
    taskUnChecked.completed = false;
    setTaskArr([...taskArr.slice(0,index), taskUnChecked, ...taskArr.slice(index+1)])
  }
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <Form handleInput={handleInput}/>
      <TaskList taskArr={taskArr} handleDelete={handleDelete} handleCheck={handleCheck} handleUnCheck={handleUnCheck}/>
    </div>
  );
}

export default App;
