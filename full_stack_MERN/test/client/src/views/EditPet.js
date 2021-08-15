import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PetForm from '../components/PetForm';
import styles from './view.module.css';
import {Link, navigate} from '@reach/router';
const EditPet = (props) => {
    const { id } = props;
    const [errors, setErrors] = useState([]); 
    const [pet, setPet] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/' + id)
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            })
    }, [])
    const updatePet = (pet) => {
        axios.put('http://localhost:8000/api/' + id, pet)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err=>{
                setErrors(err.response.data.errors);
            });
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Pet Shelter</h1>
                <div className={styles.navLink}>
                    <Link className={styles.link} to={"/"}>back to home</Link>
                </div>
            </div>
            {loaded && (
                <div className={styles.editPet}>
                    <h2>Edit {pet.name}</h2>
                    <PetForm onSubmitProp={updatePet} 
                    initName={pet.name} initType={pet.type} initDescription={pet.description}
                    initSkill1={pet.skill1} initSkill2={pet.skill2} initSkill3={pet.skill3}
                    errors={errors}/>
                </div>
            )}
        </div>
    )
}
export default EditPet;