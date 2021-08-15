import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import styles from './view.module.css';
const DisplayPet = (props) => {
    const {id} = props;
    const [pet, setPet] = useState({});
    //const [numOfLike, setNumOfLike] = useState(0);
    const [click, setClick] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/api/" + id)
            .then(res => {
                setPet({
                    ...res.data
                });
                console.log(res.data.likes)
                //setNumOfLike(res.data.likes)
                //console.log(numOfLike);
            })
    },[click])
    const handleClickLike = (shelterPet)=>{
        //const likeNum=numOfLike;
        //setNumOfLike(likeNum+1);
        //const totalLikes = numOfLike;
        //console.log(numOfLike);
        /*
        const newPet = {
            name: pet.name,
            type: pet.type,
            description: pet.description,
            skill1: pet.skill1,
            skill2: pet.skill2,
            skill3: pet.skill3,
            likes: numOfLike
        }
        */
        pet.likes += 1;
        console.log(pet.likes)
        axios.put('http://localhost:8000/api/' + id, pet)
            .then(res => {
                console.log(res);
                setClick(!click);
                console.log(click);
            })
            .catch(err=>console.log(err.response));
    }
    const handleAdopt = ()=>{
        const adoptConfirm = window.confirm(`Are you sure you want to adopt ${pet.name}?`);
        if(adoptConfirm){
            axios.delete('http://localhost:8000/api/' + id)
            .then(res=>{
                    console.log(res);
                    navigate("/");
                }
            )
            .catch(err=>console.log(err.response));
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Pet Shelter</h1>
                <div className={styles.navLink}>
                    <Link className={styles.link} to={"/"}>back to home</Link>
                </div>
            </div>
            <div className={styles.navBar}>
                <h2 className={styles.navTitle}>Details about: {pet.name}</h2>
                <div className={styles.adopt}>
                    <button className={styles.adoptBtn} onClick={handleAdopt}>Adopt {pet.name}</button>
                </div>
            </div>
            <div className={styles.displayBox}>
                <p className={styles.displayItem}>Pet type: <span id={styles.typeItem}>{pet.type}</span></p>
                <p className={styles.displayItem}>Description: <span id={styles.descriptionItem}>{pet.description}</span></p>
                <p className={styles.displayItem}>Skills: 
                    <div className={styles.skillItems}>
                        <p className={styles.skillItem}>{pet.skill1}</p>
                        <p className={styles.skillItem}>{pet.skill2}</p>
                        <p className={styles.skillItem}>{pet.skill3}</p>
                    </div>
                </p>
                <button className={styles.likeBtn} onClick={(pet)=>handleClickLike(pet)}>Like {pet.name}</button>
                <span>{pet.likes} like(s)</span>
            </div>
        </div>
    )
}
export default DisplayPet;