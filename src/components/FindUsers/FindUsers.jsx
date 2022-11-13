import styles from "./FindUsers.module.css";
import React, {useEffect} from "react";
import {User} from "./Users/User";
import axios from "axios";

export const FindUsers = (props) => {

    useEffect(() => {
            if (props.users.length === 0) {
                axios
                    .get("https://social-network.samuraijs.com/api/1.0/users")
                    .then(response => {
                        props.setUsers(response.data.items)
                    })
            }
    })



    let usersElements = props.users.map(el => <User key={el.id} id={el.id} name={el.name} photos={el.photos}
                                                    status={el.status} followed={el.followed}
                                                    follow={props.follow} unFollow={props.unFollow} setUsers = {props.setUsers}/>)
    return (
        <div className={styles.FindUsers}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>Пользователи</h2>
                </div>
                <div className={styles.inlineBlock + ' ' + styles.width + ' ' + styles.user}>
                    {usersElements}
                </div>
                <div className={styles.showMore}>
                    <button  className={styles.button}>Показать еще</button>
                </div>
            </div>
        </div>
    )
}