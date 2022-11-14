import styles from "../Profile.module.css";
import React from "react";
import Preloader from "../../Common/Preloader";

export const ProfileInfo = (props) => {

    if (!props.profile) {
        return (
            <Preloader/>
        )
    }

    return (
        <div>
            <img alt={'f'} className={styles.image} src={"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"}/>
            <div className={styles.super}>
                <div className={styles.main}>
                    <div className={styles.imgContainer}>
                        <img alt={'f'} className={styles.img} src={props.profile.photos.large}/>
                    </div>
                    <div className={styles.text}>
                        <h1>{props.profile.fullName}</h1>
                        <p>Обо мне: {props.profile.aboutMe}</p>
                        <div><p>Контакты: facebook: {props.profile.contacts.facebook}</p>
                            <div className={styles.contacts}>
                                <p>website: {props.profile.contacts.website ? props.profile.contacts.website : 'http://localhost:3000/'}</p>
                                <p>vk: {props.profile.contacts.vk}</p>
                                <p>twitter: {props.profile.contacts.twitter}</p>
                                <p>instagram: {props.profile.contacts.instagram}</p>
                                <p>youtube: {props.profile.contacts.youtube }</p>
                                <p>github: {props.profile.contacts.github}</p>
                                <p>mainLink: {props.profile.contacts.mainLink}</p>
                            </div>
                        </div>
                        <p>Поиск работы: {props.profile.lookingForAJob ? 'Активен' : 'Уже работаю'}</p>
                        <p>Описание: {props.profile.lookingForAJobDescription}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}