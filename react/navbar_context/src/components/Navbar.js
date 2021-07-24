import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import styles from './NavContext.module.css';
const Navbar = (props) =>{
    const context = useContext(MyContext);
    return(
      <div>
        <p className={styles.nav}>Hi {context.val}!</p>
      </div>
    )
}
export default Navbar;