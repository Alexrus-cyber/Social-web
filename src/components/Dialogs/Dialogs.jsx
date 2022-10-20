import React from "react";
import styles from './Dialogs.module.css';
import {User} from "./Users/User";
import {Messages} from "./Message/Messages";
import image from './Users/img/icon.jpg'
import Ivan from './Users/img/Ivan.jpg'
import Andrey from './Users/img/Andrey.jpg'

export const Dialogs = (props) => {
    return (
        <div className={styles.Dialogs}>
            <div className={styles.container}>
                <div className={styles.secondContainer}>
                    <div style={{border:'1px solid #9a9a9a', borderRight: 'none'}} className={''}>
                        <User link={'/Dialogs/1'} img={image} name = {'Даниил Громыко'}/>
                        <User link={'/Dialogs/2'} img={Ivan} name = {'Яван Миллер'}/>
                        <User link={'/Dialogs/3'} img={Andrey} name = {'Андрей Солодышкин'}/>
                    </div>
                        <Messages name = {'Даниил Громыко'} img={image}/>
                </div>
            </div>
        </div>
    );
}