import React from "react";
import styles from './Dialogs.module.css';
import {MessageUser} from "./Users/MessageUser";
import {Messages} from "./Messages/Messages";

export const Dialogs = (props) => {

    let messageElements = props.userData.map(el => <Messages    idCounter={props.idCounter}
                                                                updateMessage={props.updateMessage} key={el.id}
                                                                addMessage={props.addMessage}
                                                                messageData={props.messageData}
                                                                newMessageText={props.newMessageText}
                                                                userData={props.userData} id={el.id} message={el.message}
                                                                idUser = {el.id}
                                                                name={el.name} img={el.img}/>);

    let userElements = props.userData.map(el => <MessageUser img={el.img} key={el.id} name={el.name} id={el.id}/>)


    return (
        <div className={styles.Dialogs}>
            <div className={styles.container}>
                <div className={styles.secondContainer}>
                    <div style={{border: '1px solid #9a9a9a', borderRight: 'none'}} className={''}>
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