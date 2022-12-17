import styles from "../../Profile.module.css";
import {FieldCreator, InputLogin} from "../../../Common/FormCreators";
import {InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {ProfileType} from "../../../../Types/Types";
import {minLength, Nothing} from "../../../../Utils/Validators/Validators";

type FormType  = {
    profile:ProfileType
}

const minLength1 = minLength(3)
let InitializeFromStateForm  = React.memo<InjectedFormProps<ProfileType , FormType> & FormType>(({handleSubmit, profile}) => {

    return (
        <form  onSubmit={handleSubmit}>
            <div className={styles.textArea}>
                <p className={styles.p}>Изменить никнейм: </p>
                {FieldCreator('fullName', 'Введите полный никнейм', [Nothing,minLength1], InputLogin)}
            </div>
            <div className={styles.textArea}>
                <p className={styles.p}>Ищите ли работу: </p>
                {FieldCreator('lookingForAJob', null, [], InputLogin, null, "checkbox")}
            </div>

            <div className={styles.textArea}>
                <p className={styles.p}>Обо мне: </p>
                {FieldCreator('aboutMe', 'Обо мне', [Nothing,minLength1], InputLogin)}
            </div>
            <div className={styles.textArea}>
                <p className={styles.p}>Facebook: </p>
                {FieldCreator('contacts.facebook', 'facebook', [], InputLogin)}
            </div>
            <div className={styles.textArea}>
                <p className={styles.p}>WebSite: </p>
                {FieldCreator('contacts.website', 'website', [], InputLogin)}
            </div>
            <div className={styles.textArea}>
                <p className={styles.p}>Vk: </p>
                {FieldCreator('contacts.vk', 'Вк', [], InputLogin)}
            </div>
            <div className={styles.textArea}>
                <p className={styles.p}>Twitter: </p>
                {FieldCreator('contacts.twitter', 'twitter', [], InputLogin)}
            </div>
            <div className={styles.textArea}>
                <p className={styles.p}>Instagram: </p>
                {FieldCreator('contacts.instagram', 'instagram', [], InputLogin)}
            </div>
            <div className={styles.textArea}>
                <p className={styles.p}>Youtube: </p>
                {FieldCreator('contacts.youtube', 'youtube', [], InputLogin)}
            </div>
            <div className={styles.textArea}>
                <p className={styles.p}>GitHub: </p>
                {FieldCreator('contacts.github', 'github', [], InputLogin)}
            </div>
            <div className={styles.textArea}>
                <p className={styles.p}>MainLink: </p>

                {FieldCreator('contacts.mainLink', 'mainLink', [], InputLogin)}
            </div>
            <div className={styles.textArea}>
                <p className={styles.p}>О работе: </p>
                {FieldCreator('lookingForAJobDescription', 'О работе', [Nothing,minLength1], InputLogin)}
            </div>
            <div className={styles.textArea}>
                <button style={{height: 35, width: 250, marginRight: 10}} className={styles.button}>
                    Сохранить
                </button>
            </div>
        </form>
    )
})





export const InitializeFromStateFormRedux = reduxForm<ProfileType , FormType>({ form: 'info', })(InitializeFromStateForm);