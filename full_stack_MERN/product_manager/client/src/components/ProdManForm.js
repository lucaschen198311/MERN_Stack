import React, { useState, useEffect} from 'react'
import axios from 'axios';
const ProdManForm = (props) => {
    //keep track of what is being typed via useState hook
    const { id, initTitle, initPrice, initDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initTitle); 
    const [price, setPrice] = useState(initPrice);
    const [description, setDescription] = useState(initDescription);
    const btnLabel = id!==""? "Edit":"Create";
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new PM
        /*
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
            */
            onSubmitProp({title, price, description});
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
            <button type="submit" value="Create">{btnLabel}</button>
        </form>
    )
}
export default ProdManForm;