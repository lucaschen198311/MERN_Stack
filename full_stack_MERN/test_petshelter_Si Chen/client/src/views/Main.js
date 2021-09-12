import React, { useEffect, useState } from 'react'
import PetList from '../components/PetList';
import styles from './view.module.css';
import { Link } from '@reach/router';
import axios from 'axios';
const Main = () => {
    const [petList, setPetList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api')
            .then(res=>{
                setPetList(res.data);
                setLoaded(true);
            });
    },[]);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Pet Shelter</h1>
                <div className={styles.navLink}>
                    <Link className={styles.link} to={"/pets/new"}>add a pet to the shelter</Link>
                </div>
            </div>
            <div>
                {
                    loaded &&
                    <div className={styles.petList}>
                        <h2>These pets are looking for a good home</h2>
                        <PetList petList={petList}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default Main;