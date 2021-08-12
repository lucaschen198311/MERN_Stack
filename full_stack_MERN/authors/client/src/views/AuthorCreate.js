import React from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import styles from './view.module.css';
import {Link} from '@reach/router';
const AuthorCreate = () => {
    const createAuthor = author => {
        axios.post('http://localhost:8000/api/new', author)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    return (
        <div className={styles.container}>
            <h1>Favorite Authors</h1>
            <Link className={styles.link} to={"/"}>Home</Link>
            <p>Add a new author:</p>
            <AuthorForm onSubmitProp={createAuthor} initName=""/>
        </div>
    )
}
export default AuthorCreate;
