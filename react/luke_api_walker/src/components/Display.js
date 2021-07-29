import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Display = props=>{
    const [responseData, setResponseData] = useState(null);
    console.log(props.name);
    console.log(props.id);
    console.log("https://swapi.dev/api" + props.path);
    return(
        <></>
    )
        /*if(props.path){
            axios.get("https://swapi.dev/api" + props.path)
            .then(response=>setResponseData(response.data))
            .catch(err=>console.log(err))
            return(
                <div>
                    <h2>{responseData.name}</h2>
                    <p>Height: {responseData.height}cm</p>
                    <p>Hair Color: {responseData.hair_color}</p>
                    <p>Eye Color: {responseData.eye_color}</p>
                    <p>Skin Color: {responseData.skin_color}</p>
                </div>
            )
        }*/
}

/*
<h2>{responseData.name}</h2>
<p>Height: {responseData.height}cm</p>
<p>Hair Color: {responseData.hair_color}</p>
<p>Eye Color: {responseData.eye_color}</p>
<p>Skin Color: {responseData.skin_color}</p>
*/

export default Display;