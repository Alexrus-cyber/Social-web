import styles from "../../Dialogs.module.css";
import React from "react";

export const Message = (props) => {
    return (
        <div className={styles.textContainer}>
            <div style={{display: "flex", alignItems: "center"}}>
                <img style={{height: 30, width:30}} className={styles.photo} src={props.img} alt={'colorScheme'}/>
                <b>{props.name}</b>
            </div>
            <div>
                <p>{props.message}</p>
            </div>
        </div>
    )
}