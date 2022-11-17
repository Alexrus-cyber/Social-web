import styles from "../FindUsers.module.css";
import React from "react";
import {User} from "./User/User";

export const FindUsers = (props) => {

    let usersElements = props.users.map(el => <User key={el.id} id={el.id} name={el.name} photos={el.photos}
                                                    status={el.status} followed={el.followed}
                                                    follow={props.follow} UnFollow={props.UnFollow} setUsers = {props.setUsers} isFollowingInProgress = {props.isFollowingInProgress}/>)
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
                    {props.currentPage !== 1 && <button onClick={props.onPageChangedMinus} className={styles.button}>Вернуться</button>}
                    <button onClick={props.onPageChangedPlus} className={styles.button}>Показать еще</button>
                </div>
            </div>
        </div>
    )
}