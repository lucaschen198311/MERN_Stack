import React, { useEffect, useState } from 'react'
import ProdManForm from '../components/ProdManForm';
import PMList from '../components/PMList';
import axios from 'axios';
const Main = () => {
    /*const [ message, setMessage ] = useState("Loading...")
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>setMessage(res.data.message))       
    }, []);
    */
    const [pm, setPM] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pms')
            .then(res=>{
                setPM(res.data);
                setLoaded(true);
            });
    },[]);
    const removeFromDom=(pmId)=>{
        setPM(pm.filter(el=>el._id!=pmId))
    }
    return (
        <div>
            <ProdManForm/>
            <hr/>
           { loaded && 
            <div>
                <h2>All Project Managers: </h2>
                <PMList pm={pm} removeFromDom={removeFromDom}/>
            </div>
            }
        </div>
    )
}

export default Main;