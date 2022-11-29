import styles from "../Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

export const MessageUser = React.memo((props) => {
    const path = '/Dialogs/' + props.id


    return (
        <NavLink className={({isActive}) => (isActive ? styles.active : styles.users)} to={path}>
            <div>
                <img className={styles.photo} src={props.img} alt={'photoLikes'}/>
            </div>
            <div style={{display: "flex", justifyContent: "flex-start", textAlign: "left"}} className={''}>
                <p style={{textAlign: "left"}}>{props.name}</p>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                height: 56,
                marginRight: 10
            }}>
                <p
                    style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start'}}>x</p>
            </div>
        </NavLink>
    );
})