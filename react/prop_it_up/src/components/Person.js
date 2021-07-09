import React from "react";

const Person = (props)=>{
    const {firstName, lastName, age, hairColor} = props;
    return (
        <div className="Person">
            <h1 style={{textAlign:"center"}}>{firstName}, {lastName}</h1>
            <p style={{textAlign:"center"}}>Age: {age}</p>
            <p style={{textAlign:"center"}}>Hair Color: {hairColor}</p>
        </div>
    )
}

export default Person;