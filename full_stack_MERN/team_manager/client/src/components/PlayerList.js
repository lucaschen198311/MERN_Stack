import React from 'react';
import styles from './component.module.css';
//import { Link } from '@reach/router';
import DeleteBtn from './DeleteBtn';
const PlayerList = (props) => {
    const {playerList, removeFromDom} = props
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        playerList.map((el, idx)=>{
                            const playerName = el.name;
                            return (
                                <tr key={idx}>
                                    <td>{el.name}</td>
                                    <td>{el.position}</td>
                                    <td>
                                    <DeleteBtn playerId={el._id} playerName={playerName} successCallback={()=>removeFromDom(el._id)}/>
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
export default PlayerList;