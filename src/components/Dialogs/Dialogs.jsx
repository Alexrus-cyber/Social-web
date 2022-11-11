import React, {useEffect, useState} from "react";
import styles from './Dialogs.module.css';
import {User} from "./Users/User";
import {Messages} from "./Messages/Messages";
import image from './Users/img/icon.jpg'
import Ivan from './Users/img/Ivan.jpg'
import Andrey from './Users/img/Andrey.jpg'

export const Dialogs = (props) => {
    const [count , setCount]= useState(0);



    let messageElements = props.userData.map(el => <Messages userData = {props.userData} messageData = {props.messageData.message} dispatch = {props.dispatch} newMessageText = {props.newMessageText.newMessageText} id={el.id} message = {el.message} name = {el.name} img={el.img}/>);
    let userElements = props.userData.map(el => <User dispatch = {props.dispatch} setActiveStep={setCount} img={el.img} name = {el.name} id={el.id}/>)


    return (
        <div className={styles.Dialogs}>
            <div className={styles.container}>
                <div className={styles.secondContainer}>
                    <div style={{border:'1px solid #9a9a9a', borderRight: 'none'}} className={''}>
                        <div>
                            <input className={styles.kingInput} placeholder={'Поиск'}></input>
                        </div>
                        {userElements}
                    </div>
                        {messageElements}
                </div>
            </div>
        </div>
    );
}