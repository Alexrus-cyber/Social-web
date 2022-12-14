import React, {FC} from "react";
import styles from './Post.module.css';
import Like from "./Like/Like";
import image from "../../../FindUsers/img/icon.jpg"
import {ProfileType} from "../../../../Types/Types";

type PropsType = {
    id: number
    likesCount: number
    message: string
    profile: ProfileType
    addLike: (counts: number, newId: number) => void
}
const Post: FC<PropsType> = (props) => {
    let date = new Date();

    let options: object = {
        era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    return (
        <div className={styles.item}>
            <div className={styles.textBlock}>
                <div className={styles.postHeader}>
                    <img className={styles.img} alt={'f'} src={props.profile.photos.large ? props.profile.photos.large : image}/>
                    <div className={styles.nameTime}>
                        <p>{props.profile.fullName}</p>
                        <p>{date.toLocaleString("ru", options)}</p>
                    </div>
                </div>
                <div className={styles.postText}> <p className={styles.p}>{props.message}</p></div>
                <Like addLike = {props.addLike}  message= {props.message} id={props.id} likes = {props.likesCount}/>


            </div>

        </div>

    );
}

export default  Post;