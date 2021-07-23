import React, {useState} from 'react';
import styles from './toDoList.module.css';
const TaskList = (props)=>{
    const {taskArr, handleDelete, handleCheck, handleUnCheck} = props;
    const handleChange = (e,index)=>{
        //e.preventDefault();
        taskArr[index].completed? handleUnCheck(index): handleCheck(index);
        console.log(taskArr);
    }
    return(
        <div className={styles.taskList}>
            <h2>Task List</h2>
            <ul>
                {
                    taskArr.map((item, index)=>{
                        return (
                            <li className={styles.taskItem} key={index}>
                                <span className={item.completed? styles.checked: ""}>{item.content}</span>
                                <input type="checkbox" checked={item.completed} onChange={(e)=>handleChange(e,index)}/>
                                <button className={styles.deleteBtn} onClick={(e)=>handleDelete(e,index)}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default TaskList;