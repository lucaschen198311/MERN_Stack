import React from 'react'
import axios from 'axios';
import styles from './component.module.css';
const DeleteBtn = (props) => {
    const { authorId, successCallback } = props;
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/' + authorId)
            .then(res=>successCallback())
    }
    return (
        <button className={styles.deleteBtn} onClick={deleteAuthor}>Delete</button>
    )
}
export default DeleteBtn;