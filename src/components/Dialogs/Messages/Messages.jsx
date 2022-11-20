import styles from "../Dialogs.module.css";
import React, {useState} from "react";
import {Message} from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../Common/TextArea";
import {Required} from "../../../Utils/Validators/Validators";

export const Messages = (props) => {
    const [count, setCount] = useState(3)
    const AddNewMessageText = (values) => {
        if (values.newMessageText !== undefined) {
            let counts = count + 1;
            setCount(counts);
            props.addMessage(counts, props.userData.name, props.img, values.newMessageText, props.userData.id);
        }
    }


    let messageEl = props.messageData.map(el => <Message key={el.id} message={el.message} id={el.id} name={el.name}
                                                         img={el.img}/>)


    return (
        <div className={styles.messages}>
            <div className={styles.header}>
                <div className={styles.headerName}>
                    <p>{props.userData.name}</p>
                </div>
                <div className={styles.headerLogo}>
                    <img className={styles.photo} src={props.img} alt={'photoHello'}/>
                </div>
            </div>
            <div className={styles.text}>
                {messageEl}
            </div>
            <ReduxAddMessage onSubmit={AddNewMessageText}/>
        </div>
    )
}

const addMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.inputContainer}>
                <div style={{display: "flex"}}>
                    <Field name={'newMessageText'} placeholder={'Введите ваше сообщение...'}
                           style={{width: 300, height: 30, borderRadius: 10, resize: "none"}} validate={[Required]} component={TextArea}>
                    </Field>
                    <div style={{display: "flex", alignItems: "center", marginLeft: 10}}>
                        <button className={styles.button} onSubmit={props.onSubmit}>Send</button>
                    </div>
                </div>
            </div>
        </form>

    )
}

const ReduxAddMessage = reduxForm({form: 'dialogsAddMessage'})(addMessageForm);