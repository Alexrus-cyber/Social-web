import styles from "../Profile.module.css";
import React from "react";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import Preloader from "../../Common/Preloader";
import image from "../../FindUsers/img/icon.jpg"

export const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    let link = "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300";
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
                        </div>
                        <div className={styles.text}>
                            <h1>{props.profile.fullName}</h1>
                            <ProfileStatus myId={props.myId} id={props.id} status={props.status}
                                           updateStatus={props.updateStatus}/>
                            <p>Обо мне: {props.profile.aboutMe}</p>
                            <div>
                                {props.profile.contacts.facebook ? <p> Контакты: facebook: {props.profile.contacts.facebook}</p> : <p>Контакты: https://vk.com/arassadin2014</p>}
                                <div className={styles.contacts}>
                                    {props.profile.contacts.website ?<p>website:{props.profile.contacts.website }</p>:  'website: http://localhost:3000/'}
                                    {props.profile.contacts.vk ? <p>vk: {props.profile.contacts.vk}</p> : <p></p>}
                                    {props.profile.contacts.twitter ? <p>twitter: {props.profile.contacts.twitter}</p> : <p></p>}
                                    {props.profile.contacts.instagram ? <p>instagram: {props.profile.contacts.instagram}</p>: <p></p>}
                                    {props.profile.contacts.youtube ? <p>youtube: {props.profile.contacts.youtube}</p>: <p></p>}
                                    { props.profile.contacts.github ? <p>github: {props.profile.contacts.github}</p>: <p></p>}
                                    { props.profile.contacts.mainLink ? <p>mainLink: {props.profile.contacts.mainLink}</p>: <p></p>}


                                </div>
                            </div>
                            <p>Поиск работы: {props.profile.lookingForAJob ? 'Уже работаю' : 'Активен'}</p>
                            <p>Описание: {props.profile.lookingForAJobDescription}</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}