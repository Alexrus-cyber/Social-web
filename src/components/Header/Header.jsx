import React from "react";
import h from './Header.module.css';

const Header = () => {
    return (
        <header className={h.header}>
            <div className={h.head}><img alt={'f'} className={h.Logo} src={"https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"}/></div>
            <div className={h.links}>

            </div>

        </header>
    );
}

export default Header;