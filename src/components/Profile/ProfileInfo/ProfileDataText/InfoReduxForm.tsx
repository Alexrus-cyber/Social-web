// @ts-ignore
import styles from "../../Profile.module.css";
// @ts-ignore
import {FieldCreator, InputLogin} from "../../../Common/FormCreators";
import {reduxForm} from "redux-form";
import React from "react";
// @ts-ignore
import {getProfile} from "../../../../Redux/Reducers/ProfileReducer.ts";
import {ProfileType} from "../../../../Types/Types";

type FormType  = {
    handleSubmit: any,
    onSubmit: (formData: any) => void,
    profile:ProfileType
    initialValues: ProfileType
}
let InitializeFromStateForm  = React.memo<FormType>(({handleSubmit, onSubmit, profile}) => {

    let click = () => {
        getProfile(profile,false);
    }
    return (
        <form  onSubmit={handleSubmit}>
            <button className={styles.hidden}  type="button" onClick={click}>Load Account</button>
            <div className={styles.textArea}>
                <p className={styles.p}>Изменить никнейм: </p>
                {FieldCreator('fullName', 'Введите полный никнейм', [], InputLogin)}
            </div>
            <div className={styles.textArea}>
                <p className={styles.p}>Ищите ли работу: </p>
                {FieldCreator('lookingForAJob', null, [], InputLogin, null, "checkbox")}
            </div>

            <div className={styles.textArea}>
                <p className={styles.p}>Обо мне: </p>
                {FieldCreator('aboutMe', 'Обо мне', [], InputLogin)}
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
                {FieldCreator('lookingForAJobDescription', 'О работе', [], InputLogin)}
            </div>
            <div className={styles.textArea}>
                <button style={{height: 35, width: 250, marginRight: 10}} className={styles.button}
                        onSubmit={onSubmit}>Сохранить
                </button>
            </div>
        </form>
    )
})

// @ts-ignore

InitializeFromStateForm = reduxForm({
    form: 'info', // a unique identifier for this form
    // @ts-ignore
})(InitializeFromStateForm);

export default InitializeFromStateForm;