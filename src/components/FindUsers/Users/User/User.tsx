// @ts-ignore
import styles from "./User.module.css";
// @ts-ignore
import React, {FC} from "react";
// @ts-ignore
import {NavLink} from "react-router-dom";
import {PhotosType} from "../../../../Types/Types";
const image = require( '../../img/icon.jpg');


type PropsType = {
    id: number
    name: string
    photos: PhotosType
    status: string
    isFollowingInProgress: Array<number>
    follow: (id:number) => void
    UnFollow: (id:number) => void
    followed: boolean
}


export const User: FC<PropsType> = ({id, name, photos, status, isFollowingInProgress, follow, UnFollow, followed}) => {

    return (
        <div className={styles.flex + " " + styles.flexWrap}>
            <div className={styles.card}>
                <div className={styles.flex}> {/*Блок подписки и иконки*/}
                    <div className={styles.containerIcon + " " + styles.flex}
                         style={{display: "flex", justifyContent: "left", width: 300, wordWrap: "break-word"}}>
                        <NavLink to={'/Profile/' + id}>
                            <img className={styles.icon} src={photos.large != null ? photos.large : image}
                                 alt={"helloWorld"}/>
                        </NavLink>
                        <div style={{width: 100}} className={styles.inlineBlock}>
                            <b>{name}</b>
                            <p className={styles.p}>{status}</p>
                        </div>
                    </div>
                    <div className={styles.MessageContainer}>
                        <button className={styles.follow}>Написать сообщение</button>
                    </div>
                </div>
                <div className={styles.flex}>
                    <div className={styles.description}>
                        <div className={styles.followContainer}>
                            {followed
                                ? <button disabled={isFollowingInProgress.some((idUser: number) => idUser === id)}
                                          onClick={() => UnFollow(id)}
                                          className={styles.follow}>Отписаться</button>
                                : <button disabled={isFollowingInProgress.some((idUser: number) => idUser === id)}
                                          onClick={() => follow(id)}
                                          className={styles.follow}>Подписаться</button>}
                        </div>
                        <div className={styles.text + ' ' + styles.flex}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

