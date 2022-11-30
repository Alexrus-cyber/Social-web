import styles from "../Dialogs.module.css";
import React, {useState} from "react";

export const MessageUser = React.memo((props) => {
    const [isActive, setIsActive] = useState(false);

    const ButtonActive = () => {
        setIsActive(!isActive)
    }
    return (
        <div onClick={ButtonActive} className={isActive ? styles.active : styles.users}>
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
        </div>
    );
})