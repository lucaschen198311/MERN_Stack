import React, {useState} from 'react'
import styles from './component.module.css';
//import {navigate} from '@reach/router';
const PlayerForm = (props) => {
    //keep track of what is being typed via useState hook
    const { initName, initPosition, onSubmitProp, errors} = props;
    const [name, setName] = useState(initName); 
    const [position, setPosition] = useState(initPosition); 
    //handler when the form is submitted
    console.log(errors)
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp({name, position});
        console.log(errors, errors.length);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Player Name:</label><br/>
                <input type="text" value={name} onChange = {(e)=>setName(e.target.value)}/>
                { errors.name ? <p className={styles.errMessage}>{errors.name.message}</p>: null}
            </p>
            <p>
                <label>Preferred Position:</label><br/>
                <input type="text" value={position} onChange = {(e)=>setPosition(e.target.value)}/>
                { errors.position ? <p className={styles.errMessage}>{errors.position.message}</p>: null}
            </p>
            <button className={styles.addBtn} type="submit" value="add">ADD</button>
        </form>
    )
}
export default PlayerForm;