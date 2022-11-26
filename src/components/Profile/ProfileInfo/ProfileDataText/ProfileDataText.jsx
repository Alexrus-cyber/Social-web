import styles from "../../Profile.module.css";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";
import React from "react";
import {Contact} from "../ProfileInfo";

const ProfileDataText = (props) => {
    return (
        <div className={styles.text}>
            <div style={{display: "flex", alignItems: "center"}}>
                <h1>{props.profile.fullName}</h1>
                <ProfileStatus updateProfile = {props.updateProfile} myId={props.myId} id={props.id} status={props.status}
                               updateStatus={props.updateStatus}/>
            </div>
            <p>status: {props.status}</p>
            <p>Обо мне: {props.profile.aboutMe}</p>
            <div>
                <b>Контакты</b>:
                <div className={styles.contacts}>
                    {Object.keys( props.profile.contacts).map(key => {
                        return  <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                    })}
                </div>
            </div>
            <p>Поиск работы: {props.profile.lookingForAJob ? 'Активен' : 'Уже работаю'}</p>
            <p>Описание: {props.profile.lookingForAJobDescription}</p>
        </div>
        )
}

export default ProfileDataText;