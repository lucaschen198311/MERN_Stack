import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Display = props=>{
    const {name, id} = props;
    const [responseData, setResponseData] = useState(null);
    console.log("https://swapi.dev/api" + `/${name}/${id}`);
    useEffect(()=>{
        axios.get("https://swapi.dev/api" + `/${name}/${id}`)
            .then(response=>{
                setResponseData(response.data);
                console.log(response.data);
            })
            .catch(err=>console.log(err))
    },[name, id]);
    return responseData?
        (
            <div>
                <h2>{responseData.name}</h2>
                <p>Height: {responseData.height}cm</p>
                <p>Hair Color: {responseData.hair_color}</p>
                <p>Eye Color: {responseData.eye_color}</p>
                <p>Skin Color: {responseData.skin_color}</p>
            </div>
    ) :
    (
        <></>
    )
}

export default Display;