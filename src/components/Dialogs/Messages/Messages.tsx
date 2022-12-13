import styles from "../Dialogs.module.css";
import React, {memo, useCallback, useState} from "react";
import {Message} from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {TextAreaForm} from "../../Common/FormCreators";
import {Required} from "../../../Utils/Validators/Validators";
import image from "../../FindUsers/img/icon.jpg"
import {MessagesType, PhotosType} from "../../../Types/Types";

type PropsMessageType = {
    userId: number
    photos: PhotosType
    fullName: string
    addMessage: (id: number, name: string, img: string | null, newMessageText: string, idUser: number) => void
    messageData: Array<MessagesType>
}

export const Messages = memo<PropsMessageType>(({userId, photos, fullName, addMessage, messageData}) => {

    const [count, setCount] = useState(3)
    const AddNewMessageText = useCallback((values: any) => {
        let counts = count + 1;
        setCount(counts);
        addMessage(counts, fullName, photos.large, values.newMessageText, Number(userId));
    }, [count, fullName, photos,userId, addMessage]);

    let messageEl = messageData.map(el => <Message key={el.id} message={el.message} id={el.id} name={el.name}
                                                         img={el.img}/>)
    return (
        <div className={styles.messages}>
            <div className={styles.header}>
                <div className={styles.headerName}>
                    <p>{fullName}</p>
                </div>
                <div className={styles.headerLogo}>
                    <img className={styles.photo} src={photos.small ? photos.small : image}
                         alt={'photoHello'}/>
                </div>
            </div>
            <div className={styles.text}>
                {messageEl}
            </div>
            <ReduxAddMessage onSubmit={AddNewMessageText}/>
        </div>
    )
});

const addMessageForm = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.inputContainer}>
                <div style={{display: "flex"}}>
                    <Field name={'newMessageText'} placeholder={'Введите ваше сообщение...'}
                           style={{width: 300, height: 30, borderRadius: 10, resize: "none"}} validate={[Required]} component={TextAreaForm}>
                    </Field>
                    <div style={{display: "flex", alignItems: "center", marginLeft: 10}}>
                        <button className={styles.button} onSubmit={props.onSubmit}>Отправить</button>
                    </div>
                </div>
            </div>
        </form>

    )
}

const ReduxAddMessage = reduxForm({form: 'dialogsAddMessage'})(addMessageForm);