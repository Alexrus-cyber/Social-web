import React, {memo} from "react";
import styles from './Header.module.css';
import image from './ket_logo.png'
import {NavLink} from "react-router-dom";

type PropsHeaderType = {
    logout: () => void,
    login: string | null,
    isAuth: boolean
}

const Header = memo<PropsHeaderType>(({logout,isAuth, login}) => {

    return (
        <header className={styles.header}>
            <div className={styles.head}>
                <img alt={'f'} className={styles.Logo} src={image}/>
            </div>
            <div className={styles.links}>
                {isAuth
                    ?
                    <div style={{display: "flex"}}>
                        <p>{login}</p>
                        <button onClick={() => logout()}>Выйти</button>
                    </div>
                    : <NavLink className={styles.link} to={'/login'}>Войти</NavLink>}
            </div>

        </header>
    );
})

export default Header;