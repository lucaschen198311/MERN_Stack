import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import styles from './component.module.css';
import DeleteBtn from './DeleteBtn';
const PMList = (props) => {
    const { removeFromDom } = props;
    /*
    const deletePM = (pmId)=>{
        axios.delete('http://localhost:8000/api/pms/' + pmId)
        .then(res => {removeFromDom(pmId)})
    }
    */
    return (
        <div>
            {props.pm.map((el, idx)=>{
                //const path = `/${el._id}`;
                return <p key={idx}>
                    <Link className={styles.link} to={"/" + el._id}>{el.title}</Link>
                    |
                    <Link className={styles.link} to={"/" + el._id + "/edit"}>Edit</Link>
                    |
                    <DeleteBtn pmId={el._id} successCallback={()=>removeFromDom(el._id)}/>
                </p>
            })}
        </div>
    )
}
export default PMList;