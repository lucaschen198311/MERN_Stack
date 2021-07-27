import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Form = props=>{
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [nameList, setNameList] = useState([]);
    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
        .then(response=>setNameList(Object.keys(response.data)))
        .catch(err=>console.log(err))
    }, []);
    const handelSubmit = (e)=>{
        e.preventDefault();
        console.log({name:name, id:id});
        props.setInput({name:{name}, id:{id}})
    }
    return(
        <div>
            <form onSubmit={e=>handelSubmit(e)}>
                <label>Serach For: </label>
                <select name="nameList" onChange={e=>setName(e.target.value)}>
                    {
                        nameList.map((element, index)=>
                            <option key={index} value={element}>{element}</option>
                        )
                    }
                </select>
                <label>ID: </label>
                <input type="text" name="id" onChange={e=>setId(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
export default Form;