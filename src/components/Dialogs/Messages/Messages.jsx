import styles from "../Dialogs.module.css";
import React, {useEffect, useState} from "react";

import {Message} from "./Message/Message";
import {addMessageActionCreator, updateMessageActionCreator} from "../../../Redux/Dialogs-reducer";

export const Messages = (props) => {


    const textInput = React.createRef();
    const Clicker = () => {
        let messageValue = textInput.current.value;
        if (messageValue !== ''){
           props.addMessage(props.id, props.name, props.img);
        }

    }

    let updateMessage = () => {
        let messageValue = textInput.current.value;
        props.updateMessage(messageValue);
    }

       let messageEl = props.messageData.map(el => <Message message = {el.message} id = {el.id} name = {el.name} img = {el.img}/>)


    return (
        <div className={styles.messages}>
            <div className={styles.header}>
                <div className={styles.headerName}>
                    <p>{props.name}</p>
                </div>
                <div className={styles.headerLogo}>
                    <img className={styles.photo} src={props.img} alt={'photo'}/>
                </div>
            </div>
            <div className={styles.text}>
                {messageEl}
            </div>
            <div className={styles.inputContainer}>
                <div style={{display: "flex"}}>
                    <textarea value = {props.newMessageText} onChange={updateMessage} className={styles.input} ref={textInput}>
                    </textarea>
                    <div style={{display: "flex" , alignItems: "center", marginLeft: 10}}>
                        <button onClick={Clicker} className={styles.button}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}