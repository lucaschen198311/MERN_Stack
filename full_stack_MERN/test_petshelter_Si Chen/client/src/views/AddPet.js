import React, {useState} from 'react';
import axios from 'axios';
import PetForm from '../components/PetForm';
import styles from './view.module.css';
import {Link, navigate} from '@reach/router';
//update with validation message display for form input:
const AddPet = () => {
    const [errors, setErrors] = useState([]); 
    const addPet = pet => {
        axios.post('http://localhost:8000/api/new', pet)
            .then(res=>{
                console.log(res);
                navigate("/");
            })
            .catch(err=>{
                setErrors(err.response.data.errors);
            })
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Pet Shelter</h1>
                <div className={styles.navLink}>
                    <Link className={styles.link} to={"/"}>back to home</Link>
                </div>
            </div>
            <div className={styles.addPet}>
                <h2>Know a pet needing a home?</h2>
                <PetForm onSubmitProp={addPet} 
                initName="" initType="" initDescription="" 
                initSkill1="" initSkill2="" initSkill3=""
                errors={errors}/>
            </div>
        </div>
    )
}
export default AddPet;