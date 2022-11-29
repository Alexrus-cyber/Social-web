import React from "react";
import styles from './Dialogs.module.css';
import {MessageUser} from "./Users/MessageUser";
import {Messages} from "./Messages/Messages";

export const Dialogs = (props) => {

    let userElements = props.userData.map(el => <MessageUser img={el.img} key={el.id} name={el.name} id={el.id}/>)


    return (
        <div className={styles.Dialogs}>
            <div className={styles.container}>
                <div className={styles.secondContainer}>
                    <div style={{border: '1px solid #9a9a9a', borderRight: 'none', width:"30%", borderBottomLeftRadius: 20}} className={''}>
                        <div>
                            <input className={styles.kingInput} placeholder={'Поиск'}></input>
                        </div>
                        {userElements}
                    </div>
                    <Messages idCounter={props.idCounter}
                              updateMessage={props.updateMessage} key={props.id}
                              addMessage={props.addMessage}
                              messageData={props.messageData}
                              userId={props.userId}
                              profile={props.profile}
                    />
                </div>
            </div>
        </div>
    );
}