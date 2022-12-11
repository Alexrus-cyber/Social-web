import styles from "../../Profile.module.css";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";
import React, {useCallback, useState} from "react";
import {Contact} from "../ProfileInfo";
import {ContactsType, ProfileType} from "../../../../Types/Types";

export type PropsDataType = {
    id: string | undefined
    myId : number
    updateProfile: (profile: ProfileType) => void
    profile: ProfileType
    updateStatus: (status: string) => void
    status: string
}

const ProfileDataText: React.FC<PropsDataType> = (props) => {
    const [status, setStatus] = useState(props.status);
    const [active, setActive] = useState(false);
    const statusUpdate = useCallback(() => {
        props.updateStatus(status);
        setActive(false)
    }, [props, status])

    const onChanged = (e: any) => {
        setStatus(e.currentTarget.value);
    }
    return (
        <div className={styles.text}>
            <div style={{display: "flex", alignItems: "center"}}>
                <h1>{props.profile.fullName}</h1>
                <ProfileStatus updateProfile={props.updateProfile} myId={props.myId} id={props.id} status={props.status}
                               updateStatus={props.updateStatus} profile={props.profile}/>
            </div>
            {Number(props.id) === props.myId
                ? active
                    ? <div style={{display: "flex"}}>status: <textarea
                        style={{outline: "none", resize: "none", height: 20, fontSize: 15, borderRadius: 5, marginLeft: 10}}
                        value={status}
                        onChange={onChanged}></textarea>
                        <button className={styles.button} onClick={statusUpdate}>Сохранить</button>
                    </div>
                    :
                    <div style={{display: "flex"}}>status: <p className={styles.status} onDoubleClick={() => setActive(true)}>{props.status ? props.status : "Статус не установлен"}</p></div>
                : <div style={{display: "flex"}}>status: {props.status ? props.status : "Статус не установлен"}</div>
            }
            <p>Обо мне: {props.profile.aboutMe}</p>
            <div>
                <b>Контакты</b>:
                <div className={styles.contacts}>
                    {Object.keys(props.profile.contacts).map((key) => {
                        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key as keyof ContactsType]}/>
                    })}
                </div>
            </div>
            <p>Поиск работы: {props.profile.lookingForAJob ? 'Активен' : 'Уже работаю'}</p>
            <p>Описание: {props.profile.lookingForAJobDescription}</p>
        </div>
    )
}

export default ProfileDataText;