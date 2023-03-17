import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'; 
import DialogItem from './DiaologItem/DialogItem';
import Messege from './Messeges/Messeges';


 
const Dialogs =  () => {
    let dialogs = [
    {id: 1, name:"Angela" },
    {id: 2, name:"Dani" },
    {id: 3, name:"Iso" },
    {id: 4, name:"Tiko" },
    {id: 5, name:"Garnik" },
]

let messeges = [
    {id: 1, messege:"barev" },
    {id: 2, messege:"hajox" },
    {id: 3, messege:"Inch ka" },
    {id: 4, messege:"ari  nkarvenq" },
    {id: 5, messege:"bayc xi garnik?" },
]

let dialogsElements = dialogs.map ( (d) => <DialogItem name={d.name} id={d.id}/>);


let messegesElements = messeges.map ((m)=> <Messege messege={m.messege}/>);

    return (
       <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            {dialogsElements}
        </div>
        <div className={s.messeges}>
            {messegesElements}
        </div>
       </div>
    );
}

export default Dialogs;
