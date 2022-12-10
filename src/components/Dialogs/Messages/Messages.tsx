// @ts-ignore
import styles from "../Dialogs.module.css";
import React, {memo, useCallback, useState} from "react";
// @ts-ignore
import {Message} from "./Message/Message";
import {Field, reduxForm} from "redux-form";
// @ts-ignore
import {TextAreaForm} from "../../Common/FormCreators";
// @ts-ignore
import {Required} from "../../../Utils/Validators/Validators";
// @ts-ignore
import image from "../../FindUsers/img/icon.jpg"
import {IdCounterType, MessagesType, ProfileType} from "../../../Types/Types";

type PropsMessageType = {
    userId: string
    profile: ProfileType
    addMessage: (id: number, name: string, img: string | null, newMessageText: string, idUser: number) => void
    messageData: Array<MessagesType>
    idCounter: Array<IdCounterType>
}

export const Messages = memo<PropsMessageType>((props) => {

    const [count, setCount] = useState(3)
    const AddNewMessageText = useCallback((values: any) => {
        let counts = count + 1;
        setCount(counts);
        props.addMessage(counts, props.profile.fullName, props.profile.photos.large, values.newMessageText, Number( props.userId));
    }, [count, props]);

    let messageEl = props.messageData.map(el => <Message key={el.id} message={el.message} id={el.id} name={el.name}
                                                         img={el.img}/>)
    return (
        <div className={styles.messages}>
            <div className={styles.header}>
                <div className={styles.headerName}>
                    <p>{props.profile.fullName}</p>
                </div>
                <div className={styles.headerLogo}>
                    <img className={styles.photo} src={props.profile.photos.small ? props.profile.photos.small : image}
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