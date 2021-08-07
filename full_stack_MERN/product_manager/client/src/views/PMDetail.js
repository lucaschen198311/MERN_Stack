import React, { useEffect, useState } from 'react'
import axios from 'axios';
const PMDetail = (props) => {
    const [pm, setPM] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/pms/" + props.id)
            .then(res => setPM({
                ...res.data
            }))
    }, [])
    return (
        <div>
            <h2>{pm.title}</h2>
            <p>Price: ${pm.price}</p>
            <p>Description: {pm.description}</p>
        </div>
    )
}
export default PMDetail;