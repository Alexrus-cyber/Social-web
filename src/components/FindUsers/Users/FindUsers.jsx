import styles from "../FindUsers.module.css";
import React from "react";
import {User} from "./User/User";

export const FindUsers = React.memo((props) => {

    let usersElements = props.users.map(el => <User key={el.id} id={el.id} name={el.name} photos={el.photos}
                                                    status={el.status} followed={el.followed}
                                                    follow={props.follow} UnFollow={props.UnFollow} setUsers = {props.setUsers} isFollowingInProgress = {props.isFollowingInProgress}/>)
    return (
        <div className={styles.FindUsers}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>Пользователи</h2>
                </div>
                <div style={{width: "100%", display: "flex", alignItems: "center", flexWrap: "wrap"}}>
                        {usersElements}
                </div>

                <div className={styles.showMore}>
                    {props.currentPage !== 1 && <button onClick={() => props.onPageChanged(props.currentPage - 1)} className={styles.button}>Вернуться</button>}
                    <button onClick={() => props.onPageChanged(props.currentPage + 1)} className={styles.button}>Показать еще</button>
                </div>
            </div>
        </div>
    )
})