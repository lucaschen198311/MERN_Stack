import React from 'react';
const Post = props=>{
    return isNaN(props.input)?
    (
        <div>
            <h1>This word is : {props.input}</h1>
        </div>
    )
    :
     (
        <div>
            <h1>This number is : {props.input}</h1>
        </div>
    )
}
export default Post;