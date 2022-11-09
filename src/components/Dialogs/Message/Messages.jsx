import styles from "../Dialogs.module.css";
import React, {useEffect, useState} from "react";

export const Messages = (props) => {

    let mes1;
    let mes2;


    const [message, setMessage] = useState([]);
    const [user , setUser] = useState(0);
    const textInput = React.createRef();
    const Clicker = () => {
        let messageValue = textInput.current.value;
        let messages = [...message,messageValue]
        if (messageValue !== ''){
            setMessage(messages)
        }
        textInput.current.value = ''

    }

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

                {message.map((item) =>
                <div className={styles.textContainer}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img style={{height: 30, width:30}} className={styles.photo} src={'https://i.pinimg.com/originals/6b/08/76/6b087603862a127ea290e0a47ed932bf.jpg'} alt={'colorScheme'}/>
                    </div>
                    <div>
                        <p>{item}</p>
                    </div>
                </div>
                )}

            </div>
            <div className={styles.inputContainer}>
                <div style={{display: "flex"}}>
                    <textarea className={styles.input} ref={textInput}>
                    </textarea>
                    <div style={{display: "flex" , alignItems: "center", marginLeft: 10}}>
                        <button onClick={Clicker} className={styles.button}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}