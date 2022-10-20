import styles from "../Dialogs.module.css";
import React from "react";

export const Messages = () => {
    return (
        <div className={styles.messages}>
            <div className={styles.header}>
                <p>Header</p>
            </div>
            <div className={styles.text}>
                <div className={styles.textContainer}>
                    <div>
                        <img style={{height: 30, width:30}} className={styles.photo} src={'https://i.pinimg.com/originals/6b/08/76/6b087603862a127ea290e0a47ed932bf.jpg'} alt={'photo'}/>
                    </div>
                    <div>
                        <p>Hello world!</p>
                    </div>
                </div>
            </div>
            <div className={styles.inputContainer}>
                <div>
                    <textarea className={styles.input}>
                    </textarea>
                </div>
            </div>
        </div>
    )
}