import React from "react";
import styles from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div className={styles.content}>
               <ProfileInfo myId = {props.myId} id = {props.id} profile = {props.profile} updateStatus = {props.updateStatus} status = {props.status}/>
               <MyPostsContainer myId = {props.myId} id = {props.id}/>
        </div>
    );
}

export default  Profile;