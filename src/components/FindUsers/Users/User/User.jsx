import styles from "../../FindUsers.module.css";
import React from "react";
import image from '../../img/icon.jpg';
import {NavLink} from "react-router-dom";

export const User = (props) => {

    return (
        <div className={styles.flex}>
            <div className={styles.card + ' ' + styles.flex}>
                <div className={styles.inlineBlock + ' ' + styles.width}> {/*Блок подписки и иконки*/}
                    <div className={styles.containerIcon + " " + styles.flex}
                         style={{display: "flex", justifyContent: "left"}}>
                        <NavLink to={'/Profile/' + props.id}>
                            <img className={styles.icon} src={props.photos.small != null ? props.photos.small : image}
                                 alt={"helloWorld"}/>
                        </NavLink>
                        <div className={styles.inlineBlock}>
                            <p>{props.name}</p>
                            <p>{'props.country'}, {'props.town'}</p>
                        </div>
                    </div>
                    <div className={styles.flex + " " + styles.followContainer}>
                        {props.followed
                            ? <button disabled={props.isFollowingInProgress.some(id => id === props.id)} onClick={() => props.UnFollow(props.id)} content={"Hello"} className={styles.follow}>Отписаться</button>
                            : <button disabled={props.isFollowingInProgress.some(id => id === props.id)}  onClick={() => props.follow(props.id)} content={"Hello"} className={styles.follow}>Подписаться</button>}
                    </div>
                </div>
                <div className={styles.flex + ' ' + styles.width}>
                    <div className={styles.description}>
                        <div className={styles.width + " " + styles.flex + ' ' + styles.messageContainer}>
                            <button className={styles.takeMessage}>Написать сообщение</button>
                        </div>
                        <div className={styles.text + ' ' + styles.flex}>
                            <p className={styles.p}>{props.status}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}