import React, {useEffect, useState} from "react";
import styles from './Dialogs.module.css';
import {User} from "./Users/User";
import {Messages} from "./Message/Messages";
import image from './Users/img/icon.jpg'
import Ivan from './Users/img/Ivan.jpg'
import Andrey from './Users/img/Andrey.jpg'

export const Dialogs = (props) => {

    const [count , setCount]= useState(0);
    const Form = () => count === 0
        ? <div><h4 style={{marginLeft: 150}}>Выберите собеседника</h4></div>
        : count === 1 ? <Messages id = {'2'}  name = {'Яван Миллер'} img={Ivan}/> : <Messages id = {'1'}  name = {'Даниил Громыко'} img={image}/>

    let userData = [
        {id: '1', name: 'Даниил Громыко' , img :image, setActiveStep:setCount},
        {id: '2', name: 'Яван Миллер' ,img :Ivan, setActiveStep:setCount},
        {id: '3', name: 'Андрей Солодышкин', img :Andrey, setActiveStep:setCount},
    ]
    let userElements = userData.map(el => <User setActiveStep={el.setActiveStep} img={el.img} name = {el.name} id={el.id}/>)


    return (
        <div className={styles.Dialogs}>
            <div className={styles.container}>
                <div className={styles.secondContainer}>
                    <div style={{border:'1px solid #9a9a9a', borderRight: 'none'}} className={''}>
                        {userElements}
                    </div>
                    <Form/>
                  {/*<Messages name = {'Даниил Громыко'} img={image}/>
                    <Messages name = {'Яван Миллер'} img={Ivan}/>*/}
                </div>
            </div>
        </div>
    );
}