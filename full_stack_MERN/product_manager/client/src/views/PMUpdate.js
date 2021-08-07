import React, { useEffect, useState } from 'react'
import axios from 'axios';
const PMUpdate = (props) => {
    const { id } = props;
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
    const updatePM = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pms/' + id, {
            title,    // this is shortcut syntax for title,
            price,      // this is shortcut syntax for price,
            description  // this is short syntax for description
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Project Manager</h1>
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
        </div>
    )
}
export default PMUpdate;