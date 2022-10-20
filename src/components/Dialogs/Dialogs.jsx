import React from "react";
import styles from './Dialogs.module.css';
import {User} from "./Users/User";
import {Messages} from "./Message/Messages";

export const Dialogs = (props) => {
    return (
        <div className={styles.Dialogs}>
            <div className={styles.container}>
                <div className={styles.secondContainer}>
                    <div style={{border:'1px solid #9a9a9a', borderRight: 'none'}} className={''}>
                        <User link={'/Dialogs/1'}/>
                        <User link={'/Dialogs/2'}/>
                        <User link={'/Dialogs/3'}/>
                    </div>
                    <Messages/>
                </div>
            </div>
        </div>
    );
}