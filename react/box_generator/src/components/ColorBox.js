import React, {useState} from 'react';
//import {Component} from 'react';
import styles from './ColorBox.module.css';
const ColorBox = props=>{
    const [boxColor, setBoxColor] = useState("");
    const [boxColorArr, setBoxColorArr] = useState([]);
    const handelSubmit = (e)=>{
        e.preventDefault();
        const addColor = {
            backgroundColor: boxColor, 
            height:"100px",
            width: "100px"
        };
        setBoxColorArr([...boxColorArr, addColor]);
        setBoxColor("");
    }
    return (
        <div>
            <form onSubmit={(e)=>handelSubmit(e)}>
                <label>Color: </label>
                <input type="text" value={boxColor} onChange={e=>setBoxColor(e.target.value)} />
                <button>Add Color</button>
            </form>
            <div className={styles.boxes}>
                {
                    boxColorArr.map((el, idx)=>
                    <div id={idx} className={styles.box} style={el}></div>)
                }
            </div>
        </div>
    )
}
export default ColorBox;