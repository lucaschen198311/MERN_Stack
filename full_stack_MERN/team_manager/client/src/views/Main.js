import React, { useEffect, useState } from 'react'
import PlayerList from '../components/PlayerList';
import Header from '../components/Header';
import styles from './view.module.css';
import { Link } from '@reach/router';
import axios from 'axios';
const Main = () => {
    const [playerList, setPlayerList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api')
            .then(res=>{
                setPlayerList(res.data);
                setLoaded(true);
            });
    },[]);

    const removeFromDom=(playerId)=>{
        setPlayerList(playerList.filter(el=>el._id!==playerId))
    }

    return (

        <div className={styles.container}>
            <Header/>
            <div className={styles.box}>
                <div className={styles.nav}>
                    <Link className={styles.link} to={"/players/list"}>List</Link>
                    |
                    <Link className={styles.link} to={"/players/addplayer"}>Add Player</Link>
                </div>
                {
                    loaded &&
                    <div className={styles.playerList}>
                        <PlayerList playerList={playerList} removeFromDom={removeFromDom}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default Main;