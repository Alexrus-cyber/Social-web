import styles from "../Dialogs.module.css";
import React, {useState} from "react";
import {Message} from "./Message/Message";

export const Messages = (props) => {
    const [count, setCount] = useState(props.idCounter)

    const textInput = React.createRef();
    const Clicker = () => {
        let messageValue = textInput.current.value;
        let counts = count + 1;
        setCount(counts);
        if (messageValue !== ''){
           props.updateCount(counts);
           props.addMessage(counts, props.name, props.img);
        }

    }

    let updateMessage = () => {
        let messageValue = textInput.current.value;
        props.updateMessage(messageValue);
    }

       let messageEl = props.messageData.map(el => <Message key={el.id} message = {el.message} id = {el.id} name = {el.name} img = {el.img}/>)


    return (
        <div className={styles.messages}>
            <div className={styles.header}>
                <div className={styles.headerName}>
                    <p>{props.name}</p>
                </div>
                <div className={styles.headerLogo}>
                    <img className={styles.photo} src={props.img} alt={'photoHello'}/>
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