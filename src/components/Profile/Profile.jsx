import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {


    return (
        <div className={styles.content}>
            <img alt={'f'} className={styles.image} src={"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"}/>
            <div className={styles.super}>
            <div className={styles.main}>
                <div className={styles.imgContainer}>
                    <img alt={'f'} className={styles.img} src={"https://i.pinimg.com/originals/6b/08/76/6b087603862a127ea290e0a47ed932bf.jpg"}/>
                </div>

                <div className={styles.text}>
                    <h1>Alex R.</h1>
                    <p>Date of Birth: 4 April</p>
                    <p>City: Kostroma</p>
                    <p>Education: BSU'11</p>
                    <p>Web Site:https//vk.com</p>
                </div>
            </div>
            <MyPosts/>
            </div>
        </div>
    );
}

export default  Profile;