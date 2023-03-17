import React from 'react';
import s from './Messeges.module.css'; 


const Messege = (props) => {

    return (
        <div className={s.messege}>{props.messege}</div>
    )
}   

export default  Messege;  

