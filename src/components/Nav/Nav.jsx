import React from "react";
import styles from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink end className={({isActive}) => (isActive ? styles.active : styles.link)}
                         to={'/'}>Профиль</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={({isActive}) => (isActive ? styles.active : styles.link)}
                         to={'/Dialogs'}>Сообщения</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={({isActive}) => (isActive ? styles.active : styles.link)}
                         to={'/News'}>Новости</NavLink>
            </div>

            <div className={styles.item}>
                <NavLink className={({isActive}) => (isActive ? styles.active : styles.link)}
                         to={'/Kira'}>Музыка</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={({isActive}) => (isActive ? styles.active : styles.link)}
                         to={'/FindUsers'}>Пользователи</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={({isActive}) => (isActive ? styles.active : styles.link)}
                         to={'/Alex'}>Настройки</NavLink>
            </div>
        </nav>
    );
}

export default Nav;