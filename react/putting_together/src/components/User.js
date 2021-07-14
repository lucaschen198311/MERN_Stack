import React, {useState} from 'react';

const User = (props) =>{
    const {firstName, lastName, hairColor, age} = props;
    const [currAge, setCurrAge] = useState(age);
    const addAgeOnClick = ()=>{
        setCurrAge(currAge + 1);
    }
    return (
        <div>
            <h1>{firstName}, {lastName}</h1>
            <p>Age: {currAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick = {addAgeOnClick}>Birday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default User;