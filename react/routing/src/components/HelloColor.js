import React from 'react';
const HelloColor = props=>{
    return (
        <div>
            <h1 style={{color:props.color, backgroundColor:props.bgColor}}>This word is : {props.word}</h1>
        </div>
    )
}
export default  HelloColor;