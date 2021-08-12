import React, {useState} from 'react';
import axios from 'axios';
import PlayerForm from '../components/PlayerForm';
import Header from '../components/Header';
import styles from './view.module.css';
import {Link, navigate} from '@reach/router';
//update with validation message display for form input:
const PlayerCreate = () => {
    const [errors, setErrors] = useState([]); 
    const createPlayer = player => {
        axios.post('http://localhost:8000/api/new', player)
            .then(res=>{
                console.log(res);
                navigate("/players/list");
            })
            .catch(err=>{
                setErrors(err.response.data.errors);
            })
    }
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.box}>
                <div className={styles.nav}>
                    <Link className={styles.link} to={"/players/list"}>List</Link>
                    |
                    <Link className={styles.link} to={"/players/addplayer"}>Add Player</Link>
                </div>
                <div>
                    <PlayerForm onSubmitProp={createPlayer} initName="" initPosition="" errors={errors}/>
                </div>
            </div>
            
        </div>
    )
}
export default PlayerCreate;