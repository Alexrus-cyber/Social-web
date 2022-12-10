import React from "react";
// @ts-ignore
import styles from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {PhotosType, ProfileType} from "../../Types/Types";

export type PropsType = {
    id: string | undefined
    myId : number
    updateProfile: (profile: ProfileType) => void
    savePhoto:(file: PhotosType) => void
    profile: ProfileType
    updateStatus: (status: string) => void
    status: string
}

const Profile = (props: PropsType) => {

    return (
        <div className={styles.content}>
               <ProfileInfo updateProfile = {props.updateProfile} savePhoto = {props.savePhoto} myId = {props.myId} id = {props.id} profile = {props.profile} updateStatus = {props.updateStatus} status = {props.status}/>
               <MyPostsContainer  myId = {props.myId} id = {props.id}/>
        </div>
    );
}

export default  Profile;