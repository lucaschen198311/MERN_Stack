import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import styles from './NavContext.module.css';
const Form = (props) =>{
    const context = useContext(MyContext);
    return(
      <div>
        <label>Your Name: </label>
        <input className={styles.inputContent} type="text" name="inputName" value={context.val} onChange={(e)=>context.setVal(e.target.value)} />
      </div>
    )
}
export default Form;