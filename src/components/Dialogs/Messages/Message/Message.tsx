
import styles from "../../Dialogs.module.css";
import React from "react";
type PropsMessageType = {
    img: string,
    name: string,
    id: number,
    key: number
    message: string
}
export const Message = ({img, name, message}: PropsMessageType) => {
    return (
        <div className={styles.textContainer}>
            <div style={{display: "flex", alignItems: "center"}}>
                <img style={{height: 30, width:30}} className={styles.photo} src={img} alt={'colorScheme'}/>
                <b>{name}</b>
            </div>
            <div>
                <p>{message}</p>
            </div>
        </div>
    )
}