import React, {useState} from 'react'
import styles from './component.module.css';
//import {navigate} from '@reach/router';
const PetForm = (props) => {
    //keep track of what is being typed via useState hook
    const { initName, initType, initDescription, initSkill1, initSkill2, initSkill3,onSubmitProp, errors} = props;
    const [name, setName] = useState(initName); 
    const [type, setType] = useState(initType);
    const [description, setDescription] = useState(initDescription); 
    const [skill1, setSkill1] = useState(initSkill1);
    const [skill2, setSkill2] = useState(initSkill2);
    const [skill3, setSkill3] = useState(initSkill3);
    //handler when the form is submitted
    console.log(errors)
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp({name, type, description, skill1, skill2, skill3});
        console.log(errors, errors.length);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className={styles.wholeForm}>
                <div className={styles.basicForm}>
                    <p>
                        <label>Pet Name:</label><br/>
                        <input type="text" value={name} onChange = {(e)=>setName(e.target.value)}/>
                        { errors.name ? <p className={styles.errMessage}>{errors.name.message}</p>: null}
                    </p>
                    <p>
                        <label>Pet Type:</label><br/>
                        <input type="text" value={type} onChange = {(e)=>setType(e.target.value)}/>
                        { errors.type ? <p className={styles.errMessage}>{errors.type.message}</p>: null}
                    </p>
                    <p>
                        <label className={styles.description}>Pet Description:</label><br/>
                        <input type="text" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
                        { errors.description ? <p className={styles.errMessage}>{errors.description.message}</p>: null}
                    </p>
                </div>
                <div className={styles.skillForm}>
                    <p>Skills (optional)</p>
                    <p>
                        <label>Skill 1:</label><br/>
                        <input type="text" value={skill1} onChange = {(e)=>setSkill1(e.target.value)}/>
                    </p>
                    <p>
                        <label>Skill 2:</label><br/>
                        <input type="text" value={skill2} onChange = {(e)=>setSkill2(e.target.value)}/>
                    </p>
                    <p>
                        <label>Skill 3:</label><br/>
                        <input type="text" value={skill3} onChange = {(e)=>setSkill3(e.target.value)}/>
                    </p>
                </div>
            </div>
            {
                initName? 
                <button className={styles.formBtn} type="submit" value="add">Edit Pet</button>
                :
                <button className={styles.formBtn} type="submit" value="add">Add Pet</button>
            }
            
        </form>
    )
}
export default PetForm;