import React, {useEffect, useState} from "react";
import styles from './Dialogs.module.css';
import {User} from "./Users/User";
import {Messages} from "./Message/Messages";
import image from './Users/img/icon.jpg'
import Ivan from './Users/img/Ivan.jpg'
import Andrey from './Users/img/Andrey.jpg'

export const Dialogs = (props) => {
    const [count , setCount]= useState(0);
   /* const Form = () => count === 0
        ? <div><h4 style={{marginLeft: 150}}>Выберите собеседника</h4></div>
        :  <Messages id = {'1'}  name = {'Даниил Громыко'} img={image}/>*/


    let messageElements = props.messageData.map(el => <Messages newMessageText = {props.newMessageText} id={el.id} message = {el.message} name = {el.name} img={props.img}/>);
    let userElements = props.userData.map(el => <User setActiveStep={setCount} img={el.img} name = {el.name} id={el.id}/>)


    return (
        <div className={styles.Dialogs}>
            <div className={styles.container}>
                <div className={styles.secondContainer}>
                    <div style={{border:'1px solid #9a9a9a', borderRight: 'none'}} className={''}>
                        {userElements}
                    </div>
                    {messageElements}
                </div>
            </div>
        </div>
    );
}