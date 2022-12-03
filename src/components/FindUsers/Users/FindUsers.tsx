// @ts-ignore
import styles from "../FindUsers.module.css";
// @ts-ignore
import React, {memo} from "react";
// @ts-ignore
import {User} from "./User/User.tsx";
import {UsersType} from "../../../Types/Types";

type PropsType = {
    users: Array<UsersType>,
    currentPage: number
    isFollowingInProgress: Array<number>
    follow: (id:number) => void
    UnFollow: (id:number) => void
    onPageChanged: (currentPage: number) => void
}

export const FindUsers = memo<PropsType>(({follow, UnFollow, isFollowingInProgress, users, onPageChanged,currentPage}) => {

    let usersElements = users.map(el => <User key={el.id} id={el.id} name={el.name} photos={el.photos}
                                                    status={el.status} followed={el.followed}
                                                    follow={follow} UnFollow={UnFollow} isFollowingInProgress = {isFollowingInProgress}/>)
    return (
        <div className={styles.FindUsers}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>Пользователи</h2>
                </div>
                <div className={styles.showMore}>
                    {currentPage !== 1 && <button onClick={() => onPageChanged(currentPage - 1)} className={styles.button}>⬅</button>}
                    <button onClick={() => onPageChanged(currentPage + 1)} className={styles.button}>➡</button>
                </div>
                <div style={{width: "100%", display: "flex", alignItems: "center", flexWrap: "wrap", margin: "20px 0px 20px 0px"}}>
                        {usersElements}
                </div>

                <div className={styles.showMore}>
                    {currentPage !== 1 && <button onClick={() => onPageChanged(currentPage - 1)} className={styles.button}>⬅</button>}
                    <button onClick={() => onPageChanged(currentPage + 1)} className={styles.button}>➡</button>
                </div>
            </div>
        </div>
    )
})