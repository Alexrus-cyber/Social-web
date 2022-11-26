import React, {useCallback, useState} from "react";
import styles from '../../Profile.module.css'
import {Module} from "../../../Common/Module/Module";
import {reduxForm} from "redux-form";
import {InputLogin, FieldCreator} from "../../../Common/FormCreators";

export const ProfileStatus = React.memo((props) => {
    const [moduleActive, setModuleActive] = useState(false);

    const onSubmit = useCallback((formData) => {
        console.log(formData);
        setModuleActive(false);
        props.updateStatus(formData.status)
        props.updateProfile(formData)
    }, [props])

    return (
        <div style={{display: "flex"}}>
            status:
            {Number(props.id) === props.myId
                ? moduleActive
                    ? <div></div>
                    :
                    <div style={{marginLeft: 10}}>
                        <span>{props.status}</span>
                        <button className={styles.button} onClick={() => setModuleActive(true)}>Изменить</button>
                    </div>
                : <div style={{marginLeft: 10}}>{props.status}</div>
            }
            <Module active={moduleActive} setActive={setModuleActive}>
                <InfoReduxForm  initialValues = {props.profile} profile={props.profile}
                                onSubmit={onSubmit}/>
            </Module>

        </div>
    )
})


const InfoForm = ({handleSubmit, onSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.textArea}>
                <p className={styles.p}>Изменить никнейм: </p>
                {FieldCreator('fullName', 'Введите полный никнейм', [], InputLogin)}
            </div>
            <div className={styles.textArea}>
                <p className={styles.p}>Ищите ли работу: </p>
                {FieldCreator('lookingForAJob', null, [], InputLogin, null, "checkbox")}
            </div>
             <div className={styles.textArea}>
                <p className={styles.p}>Статус: </p>
                {FieldCreator('status', 'status', [], InputLogin)}
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
}

const InfoReduxForm = reduxForm({form: 'info'})(InfoForm);
