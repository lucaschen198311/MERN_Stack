import React, { useEffect, useState } from 'react'
import PlayerStatusList from '../components/PlayerStatusList';
import Header from '../components/Header';
import styles from './view.module.css';
import { Link } from '@reach/router';
import axios from 'axios';
const PlayerStatus = (props) => {
    const {id} = props;
    console.log(id);
    const [playerList, setPlayerList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [click, setClick] = useState(false)
    useEffect(()=>{
        axios.get('http://localhost:8000/api')
            .then(res=>{
                setPlayerList(res.data);
                setLoaded(true);
            });
    },[click]);

    const changeStatus =(player, status, id)=>{
        console.log(player, status, id);
        console.log(player.status[parseInt(id)-1])
        player.status[parseInt(id)-1] = status;
        console.log(player);
        
        axios.put('http://localhost:8000/api/' + player._id, player)
            .then(res => {
                console.log(res);
                setClick(!click);
            });
            
    }

    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.box}>
                <h1>Player Status - Game{id}</h1>
                <div className={styles.nav}>
                    <Link className={styles.link} to={"/players/status/game/1"}>Game 1</Link>
                    |
                    <Link className={styles.link} to={"/players/status/game/2"}>Game 2</Link>
                    |
                    <Link className={styles.link} to={"/players/status/game/3"}>Game 3</Link>
                </div>
                {
                    loaded &&
                    <div>
                        <PlayerStatusList id={id} playerList={playerList} changeStatus={changeStatus}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default PlayerStatus;