import React from 'react';
const Number = props=>{
    console.log(props)
    return (
        <div>
            <h1>This number is : {props.id}</h1>
        </div>
    )
}
export default Number;