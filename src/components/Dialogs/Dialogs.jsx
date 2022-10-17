import React from "react";
import styles from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={styles.Dialogs}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <div>
                        <p>Hello world!</p>
                        <p>Hello world!</p>
                        <p>Hello world!</p>
                        <p>Hello world!</p>
                        <p>Hello world!</p>
                    </div>
                    <div>
                        <p>Hello world!</p>
                        <p>Hello world!</p>
                        <p>Hello world!</p>
                        <p>Hello world!</p>
                        <p>Hello world!</p>
                    </div>
                </div>

            </div>
        </div>
    );
}