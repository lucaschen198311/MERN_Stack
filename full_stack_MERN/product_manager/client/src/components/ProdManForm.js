import React, { useState } from 'react'
import axios from 'axios';
const ProdManForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new PM
        axios.post('http://localhost:8000/api/pms', {
            title,    // this is shortcut syntax for title,
            price,      // this is shortcut syntax for price,
            description //this is shortcut syntax for desc.
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
            setTitle("");
            setPrice("");
            setDescription("");
            console.log(title, price, description);
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <button type="submit" value="Create">Create</button>
        </form>
    )
}
export default ProdManForm;