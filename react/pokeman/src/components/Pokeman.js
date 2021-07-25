import React, {useEffect, useState} from 'react';
import styles from './Pokeman.module.css';
const Pokeman = (props)=>{
    const [nameList, setNameList] = useState([]);
    useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response)=>{return response.json()})
    .then((response)=>{setNameList(response.results)})
    .catch((err)=>{console.log(err)})}, 
    []);
    return(
        <div>
            <button>Fetch Pokeman</button>
            {
                nameList.map((element, index)=>
                    <ul>
                        <li className ={styles.list} key={index}>{element.name}</li>
                    </ul>
                )
            }
        </div>
    )
}
export default Pokeman;