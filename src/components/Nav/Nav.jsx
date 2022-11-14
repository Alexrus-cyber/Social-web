import React from "react";
import styles from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink end className={({isActive}) => (isActive ? styles.active : styles.link)}
                         to={'/profile'}>Профиль</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={({isActive}) => (isActive ? styles.active : styles.link)}
                         to={'/dialogs'}>Сообщения</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={({isActive}) => (isActive ? styles.active : styles.link)}
                         to={'/news'}>Новости</NavLink>
            </div>

            <div className={styles.item}>
                <NavLink className={({isActive}) => (isActive ? styles.active : styles.link)}
                         to={'/kira'}>Музыка</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={({isActive}) => (isActive ? styles.active : styles.link)}
                         to={'/findUsers'}>Пользователи</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={({isActive}) => (isActive ? styles.active : styles.link)}
                         to={'/alex'}>Настройки</NavLink>
            </div>
        </nav>
    );
}

export default Nav;