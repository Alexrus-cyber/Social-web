import styles from "../../FindUsers.module.css";
import React from "react";
import image from '../../img/icon.jpg';
import {NavLink} from "react-router-dom";
import axios from "axios";

export const User = (props) => {
    const unFollow = () => {
        axios
            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0){
                    props.unFollow(props.id)
                }
            })
    }
    const Follow = () => {
            axios
                .post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {},{withCredentials: true})
                .then(response => {
                    if (response.data.resultCode === 0){
                        props.follow(props.id)
                    }
                })
    }


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
                            ? <button onClick={unFollow} content={"Hello"} className={styles.follow}>Отписаться</button>
                            : <button onClick={Follow} content={"Hello"} className={styles.follow}>Подписаться</button>}
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