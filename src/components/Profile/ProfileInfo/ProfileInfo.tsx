import styles from "../Profile.module.css";
import React, { ChangeEvent } from "react";
import Preloader from "../../Common/Preloader";
import image from "../../FindUsers/img/icon.jpg"
import ProfileDataText from "./ProfileDataText/ProfileDataText";
import {PropsType} from "../Profile";


export const ProfileInfo = React.memo<PropsType>((props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    let link = "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300";

    const PhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", marginBottom: 10}}>
                <img alt={'f'} className={styles.image} src={link}/>
            </div>

            <div className={styles.super}>
                <div className={styles.main}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        columnGap: 20,
                        borderRadius: 20,
                        padding: 10
                    }}>
                        <div className={styles.imgContainer}>
                            <img alt={'f'} className={styles.img}
                                 src={props.profile.photos.large ? props.profile.photos.large : image}/>
                            {Number(props.id) === props.myId ?
                                <form className={styles.position}>
                                    <label className={styles.label}>
                                        <input type={"file"} className={styles.input} onChange={PhotoSelected}></input>
                                        <span className={styles.imageEdit}>Изменить</span>
                                    </label>
                                </form>
                                : <div/>}
                        </div>
                        <ProfileDataText updateProfile={props.updateProfile} myId={props.myId} id={props.id}
                                         status={props.status}
                                         updateStatus={props.updateStatus} profile={props.profile}/>
                    </div>

                </div>

            </div>
        </div>
    )
})

type ContactPropsType ={
    contactValue: string | null,
    contactTitle: string
}
export const Contact: React.FC<ContactPropsType> = ({contactValue, contactTitle}) => {
    return (
        <div>
            {contactValue ? <b>{contactTitle}:{contactValue}</b> : <div/>}
        </div>
    )
}