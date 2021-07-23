import React, {useState} from 'react';
import styles from './toDoList.module.css';
const Form = (props)=>{
    const [task, setTask] = useState({content:"", completed:false})
    const {handleInput} = props;
    const handleSubmit = (e)=>{
        e.preventDefault();
        handleInput(task);
        setTask({content:"", completed:false});
    }
    return(
        <form className={styles.form} onSubmit={(e)=>handleSubmit(e)}>
            <input className={styles.input} type="text" name="task" value={task.content} onChange={(e)=>setTask({content:e.target.value, completed:false})}/>
            <button className={styles.addBtn}>Add</button>
        </form>
    )
}
export default Form;