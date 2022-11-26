import styles from "./User.module.css";
import React from "react";
import image from '../../img/icon.jpg';
import {NavLink} from "react-router-dom";

export const User = React.memo((props) => {

    return (
        <div className={styles.flex + " " + styles.flexWrap}>
            <div className={styles.card}>
                <div className={styles.flex}> {/*Блок подписки и иконки*/}
                    <div className={styles.containerIcon + " " + styles.flex}
                         style={{display: "flex", justifyContent: "left", width: 300, wordWrap: "break-word"}}>
                        <NavLink to={'/Profile/' + props.id}>
                            <img className={styles.icon} src={props.photos.large != null ? props.photos.large : image}
                                 alt={"helloWorld"}/>
                        </NavLink>
                        <div style={{width: 100}} className={styles.inlineBlock}>
                            <b>{props.name}</b>
                            <p className={styles.p}>{props.status}</p>
                        </div>
                    </div>
                    <div className={styles.MessageContainer}>
                        <button className={styles.follow}>Написать сообщение</button>
                    </div>
                </div>
                <div className={styles.flex}>
                    <div className={styles.description}>
                        <div className={styles.followContainer}>
                            {props.followed
                                ? <button disabled={props.isFollowingInProgress.some(id => id === props.id)}
                                          onClick={() => props.UnFollow(props.id)}
                                          className={styles.follow}>Отписаться</button>
                                : <button disabled={props.isFollowingInProgress.some(id => id === props.id)}
                                          onClick={() => props.follow(props.id)}
                                          className={styles.follow}>Подписаться</button>}
                        </div>
                        <div className={styles.text + ' ' + styles.flex}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

