import React from 'react';
import {Link} from '@reach/router';
import styles from './component.module.css';
const Header =()=>{
    return (
        <div className={styles.header}>
            <Link className={styles.link} to={"/players/list"}>Manage Players</Link>
            |
            <Link className={styles.link} to={"/players/status/game/1"}>Manage Player Status</Link>
        </div>
    )
}

export default Header;