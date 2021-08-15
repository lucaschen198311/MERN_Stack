import React from 'react';
import styles from './component.module.css';
import { Link } from '@reach/router';
const PetList = (props) => {
    const {petList} = props
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        petList.map((el, idx)=>{
                            return (
                                <tr key={idx}>
                                    <td>{el.name}</td>
                                    <td>{el.type}</td>
                                    <td>
                                    <Link className={styles.link} to={`/pets/${el._id}`}>details</Link>
                                    |
                                    <Link className={styles.link} to={`/pets/edit/${el._id}`}>edit</Link>
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
export default PetList;