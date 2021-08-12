import React from 'react';
//import axios from 'axios';
import styles from './component.module.css';
import { Link } from '@reach/router';
import DeleteBtn from './DeleteBtn';
const AuthorList = (props) => {
    const {authorList, removeFromDom} = props
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authorList.map((el, idx)=>{
                            return (
                                <tr key={idx}>
                                    <td>{el.name}</td>
                                    <td className={styles.actions}>
                                    <Link className={styles.edit} to={"/edit/" + el._id}>Edit</Link>
                                    |
                                    <DeleteBtn authorId={el._id} successCallback={()=>removeFromDom(el._id)}/>
                                    </td>
                                </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
export default AuthorList;