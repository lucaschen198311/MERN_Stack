import React, {useState} from 'react';
import styles from './Tab.module.css';
const Tab = ()=>{
    const tabs = [
        {label:"Tab 1", content:"Tab 1 content is showing here", selected:false}, 
        {label:"Tab 2", content:"Tab 2 content is showing here", selected:false},
        {label:"Tab 3", content:"Tab 3 content is showing here", selected:false}
    ]
    
    const [msg, setMsg] = useState("");
    const [btnArr, setBtnArr] = useState(tabs)
    const handleClick = (e, index)=>{
        e.preventDefault();
        setMsg(tabs[index].content);
        setBtnArr(btnArr.map((el)=>{
            return el.selected=false;
        }));
        const btnClick = btnArr[index];
        btnClick.selected = true
        setBtnArr([...btnArr.slice(0,index), btnClick, ...btnArr.slice(index+1)]);
        console.log(btnArr);
    }
   /* const selectTab = {
        backgroundColor: "black",
        color: "white"
    }
    const unselectTab = {
        backgroundColor: "white",
        color: "black"
    }*/
    return (
        <div>
            {
                btnArr.map((el,idx) => {
                    return <button className={el.selected? styles.active:""} key={idx} onClick={(e)=>handleClick(e,idx)}>{el.label}</button>
                }
              )
            }
            <div>
                <textarea rows="4" cols="50" value={msg}></textarea>
            </div>
        </div>
    )
}
export default Tab;