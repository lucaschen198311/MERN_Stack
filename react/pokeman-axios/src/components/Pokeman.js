import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './Pokeman.module.css';
const Pokeman = (props)=>{
    const [nameList, setNameList] = useState([]);
    useEffect(()=>{axios.get("https://pokeapi.co/api/v2/pokemon")
    .then((response)=>{setNameList(response.data.results)})
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