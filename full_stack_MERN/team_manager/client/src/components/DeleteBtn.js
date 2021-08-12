import React from 'react'
import axios from 'axios';
import styles from './component.module.css';
const DeleteBtn = (props) => {
    const { playerId, playerName, successCallback } = props;
    const deletePlayer =()=> {
        //let result = confirm("Are you sure to delete?");
            const deleteConfirm = window.confirm(`Are you sure you want to remove ${playerName}?`);
            if(deleteConfirm){
                axios.delete('http://localhost:8000/api/' + playerId)
                .then(res=>successCallback())
            }
            
        
    }
    return (
        <button className={styles.delBtn} onClick={deletePlayer}>DELETE</button>
    )
}
export default DeleteBtn;