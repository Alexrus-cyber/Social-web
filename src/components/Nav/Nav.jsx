import React from "react";
import styles from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={styles.nav}>
        <div className={styles.item}>
            <NavLink end className={({ isActive }) => (isActive ? styles.active : styles.link)} to={'/'}>Profile</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : styles.link)} to={'/Dialogs'}>Messages</NavLink>
        </div>
            <div className={styles.item}>
                <NavLink  className={({ isActive }) => (isActive ? styles.active : styles.link)} to={'/News'} >News</NavLink>
            </div>

        <div className={styles.item}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : styles.link)} to={'/Kira'}>Music</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : styles.link)} to={'/Alex'}>Settings</NavLink>
        </div>
    </nav>
    );
}

export default Nav;