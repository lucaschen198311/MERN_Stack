import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import styles from './view.module.css';
import {Link} from '@reach/router';
const AuthorUpdate = (props) => {
    const { id } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])
    const updateAuthor = (author) => {
        
        axios.put('http://localhost:8000/api/' + id, author)
            .then(res => console.log(res));
    }
    return (
        <div className={styles.container}>
            <h1>Favorite Authors</h1>
            <Link className={styles.link} to={"/"}>Home</Link>
            {loaded && (
                <>
                    <p>Edit this author</p>
                    <AuthorForm onSubmitProp={updateAuthor} initName={author.name}/>
                </>
            )}
        </div>
    )
}
export default AuthorUpdate;
