import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={styles.content}>
               <ProfileInfo/>
                <MyPosts dispatch = {props.dispatch} counts = {props.postCountData} state = {props.postData}/>
        </div>
    );
}

export default  Profile;