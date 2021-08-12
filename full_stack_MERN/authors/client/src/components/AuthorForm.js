import React, { useState, useEffect} from 'react'
//import axios from 'axios';
import styles from './component.module.css';
import {navigate} from '@reach/router';
const AuthorForm = (props) => {
    //keep track of what is being typed via useState hook
    const { initName, onSubmitProp } = props;
    const [name, setName] = useState(initName); 
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp({name});
        navigate("/");
    }
    
    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <p>
                <label>Name:</label><br/>
                <input type="text" value={name} onChange = {(e)=>setName(e.target.value)}/>
            </p>
            <button className={styles.addBtn} type="submit" value="Create">Submit</button>
            <button className={styles.addBtn} value="Cancel" onClick={() => navigate("/")}>Cancel</button>
        </form>
    )
}
export default AuthorForm;