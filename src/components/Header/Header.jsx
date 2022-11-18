import React from "react";
import styles from './Header.module.css';
import image from './ket_logo.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.head}>
                <img alt={'f'} className={styles.Logo} src={image}/>
            </div>
            <div className={styles.links}>
                {props.isAuth
                    ?
                    <div style={{display: "flex"}}>
                        <p>{props.login}</p>
                    </div>
                    : <NavLink onClick={() => props.toggleIsAuth(true)} className={styles.link} to={'/login'}>Войти</NavLink>}
            </div>

        </header>
    );
}

export default Header;