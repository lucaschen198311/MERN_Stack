import React, { useEffect, useState } from 'react'
//import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
import styles from './view.module.css';
import { Link } from '@reach/router';
import axios from 'axios';
const Main = () => {
    const [authorList, setAuthorList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api')
            .then(res=>{
                setAuthorList(res.data);
                setLoaded(true);
            });
    },[]);

    const removeFromDom=(authorId)=>{
        setAuthorList(authorList.filter(el=>el._id!=authorId))
    }

    return (

        <div className={styles.container}>
            <h1>Favorite Authors</h1>
            <Link className={styles.style} to={"/new"}>Add an author</Link>
            <hr/>
            {
                loaded &&
                <div>
                    <p>We have quotes by: </p>
                    <AuthorList authorList={authorList} removeFromDom={removeFromDom}/>
                </div>
            }
        </div>
    )
}

export default Main;
