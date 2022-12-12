import React, {memo} from "react";
import styles from './Dialogs.module.css';
import {MessageUser} from "./Users/MessageUser";
import {Messages} from "./Messages/Messages";
import {MessagesType, MessageUsersType, PhotosType} from "../../Types/Types";

type PropsDialogType = {
    userId: number
    photos: PhotosType
    fullName: string
    addMessage: (id: number, name: string, img: string | null, newMessageText: string, idUser: number) => void
    messageData: Array<MessagesType>
    userData: Array<MessageUsersType>

}

export const Dialogs = memo<PropsDialogType>(({
                                                  userId, photos,fullName, addMessage, messageData, userData}) => {


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
                    <Messages addMessage={addMessage}
                              messageData={messageData}
                              userId={userId}
                              photos = {photos}
                              fullName = {fullName}
                    />
                </div>
            </div>
        </div>
    );
})