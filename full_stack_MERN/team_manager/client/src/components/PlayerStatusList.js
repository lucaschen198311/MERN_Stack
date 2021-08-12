import React from 'react';
import styles from './component.module.css'
//import axios from 'axios';
//import { Link } from '@reach/router';
//import StatusBtn from './StatusBtn';
const PlayerStatusList = (props) => {
    const {id, playerList, changeStatus} = props;
    //const [click, setClick] = useState(false);
    
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        playerList.map((el, idx)=>{
                            const player = el;
                            return (
                                <tr key={idx}>
                                    <td>{el.name}</td>
                                    <td>
                                    <button className = {el.status[parseInt(id)-1]==="Playing"? styles.Playing:styles.inactive} onClick={(el)=>changeStatus(player, "Playing", id)}>Playing</button>
                                    <button className = {el.status[parseInt(id)-1]==="Not Playing"? styles.NoPlaying:styles.inactive} onClick={(el)=>changeStatus(player, "Not Playing", id)}>Not Playing</button>
                                    <button className = {el.status[parseInt(id)-1]==="Undecided"? styles.Undecided:styles.inactive} onClick={(el)=>changeStatus(player, "Undecided", id)}>Undecided</button>
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
export default PlayerStatusList;