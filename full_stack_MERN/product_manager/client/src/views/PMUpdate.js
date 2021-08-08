import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProdManForm from '../components/ProdManForm';
import DeleteBtn from '../components/DeleteBtn';
import {navigate} from '@reach/router';
const PMUpdate = (props) => {
    const { id } = props;
    /*
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    useEffect(() => {
        axios.get('http://localhost:8000/api/pms/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])
    */
    const [pm, setPM] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pms/' + id)
            .then(res => {
                setPM(res.data);
                setLoaded(true);
            })
    }, [])
    const updatePM = (pm) => {
        //e.preventDefault();
        /*
        axios.put('http://localhost:8000/api/pms/' + id, {
            title,    // this is shortcut syntax for title,
            price,      // this is shortcut syntax for price,
            description  // this is short syntax for description
        })
            .then(res => console.log(res));
        */
        axios.put('http://localhost:8000/api/pms/' + id, pm)
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Project Manager</h1>
            {loaded && (
                <>
                    <ProdManForm onSubmitProp={updatePM} 
                    initTitle={pm.title} initPrice={pm.price} 
                    initDescription={pm.description}/>
                    <DeleteBtn pmId={pm._id} successCallback={() => navigate("/")} />
                </>
            )}
        </div>
    )
}
export default PMUpdate;

/*
<form onSubmit={updatePM}>
                <p>
                    <label>Title</label><br />
                    <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" name="price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <button type="submit" name="Update">Update</button>
</form>
*/