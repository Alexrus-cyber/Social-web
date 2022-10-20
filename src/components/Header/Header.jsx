import React from "react";
import h from './Header.module.css';
import image from './ket_logo.png'

const Header = () => {
    return (
        <header className={h.header}>
            <div className={h.head}>
                <img alt={'f'} className={h.Logo} src={image}/>
            </div>
            <div className={h.links}>

            </div>

        </header>
    );
}

export default Header;