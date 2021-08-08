import React from 'react'
import axios from 'axios';
const DeleteBtn = (props) => {
    const { pmId, successCallback } = props;
    const deletePM = e => {
        axios.delete('http://localhost:8000/api/pms/' + pmId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deletePM}>Delete</button>
    )
}
export default DeleteBtn;