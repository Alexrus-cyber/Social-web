import React, {memo} from "react";
// @ts-ignore
import styles from './Dialogs.module.css';
// @ts-ignore
import {MessageUser} from "./Users/MessageUser";
// @ts-ignore
import {Messages} from "./Messages/Messages";
// @ts-ignore
import Preloader from "../Common/Preloader";
import {IdCounterType, MessagesType, MessageUsersType, ProfileType} from "../../Types/Types";

type PropsDialogType = {
    userId: number
    profile: ProfileType
    addMessage: (id: number, name: string, img: string | null, newMessageText: string, idUser: number) => void
    messageData: Array<MessagesType>
    userData: Array<MessageUsersType>
    idCounter: Array<IdCounterType>
}

export const Dialogs = memo<PropsDialogType>(({
                                                  userId, profile, addMessage, messageData, userData, idCounter,
                                              }) => {

    if (profile.userId !== userId) {
        return <Preloader/>
    }

    let userElements = userData.map(el => <MessageUser img={el.img} key={el.id} name={el.name} id={el.id}/>)


    return (
        <div className={styles.Dialogs}>
            <div className={styles.container}>
                <div className={styles.secondContainer}>
                    <div style={{
                        border: '1px solid #9a9a9a',
                        borderRight: 'none',
                        width: "30%",
                        borderBottomLeftRadius: 20
                    }} className={''}>
                        <div>
                            <input className={styles.kingInput} placeholder={'Поиск'}></input>
                        </div>
                        {userElements}
                    </div>
                    <Messages idCounter={idCounter}
                              addMessage={addMessage}
                              messageData={messageData}
                              userId={userId}
                              profile={profile}
                    />
                </div>
            </div>
        </div>
    );
})