import styles from "./FindUsers.module.css";
import React from "react";
import {User} from "./Users/User";
import image from "../Dialogs/Users/img/icon.jpg";
import Ivan from "../Dialogs/Users/img/Ivan.jpg";
import Andrey from "../Dialogs/Users/img/Andrey.jpg";

export const FindUsers = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                name: 'Алексей Рассадин',
                img: image,
                country: 'Russia',
                town: 'Kostroma',
                statusTeg: 'Я прекрасен...😊',
                followed: true,
            },
            {
                id: 2,
                name: 'Яван Миллер',
                img: Ivan,
                country: 'Russia',
                town: 'Kostroma',
                statusTeg: 'Я люблю гранту...🦽',
                followed: true,
            },
            {
                id: 3,
                name: 'Андрей Солодышкин',
                img: Andrey,
                country: 'Russia',
                town: 'Kostroma',
                statusTeg: 'Я не плачу...😥',
                followed: false,
            },
        ])
    }



    let usersElements = props.users.map(el => <User key={el.id} id={el.id} name={el.name} img={el.img}
                                                    country={el.country} town={el.town}
                                                    statusTeg={el.statusTeg} followed={el.followed}
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
                    <button className={styles.button}>Показать еще</button>
                </div>
            </div>
        </div>
    )
}