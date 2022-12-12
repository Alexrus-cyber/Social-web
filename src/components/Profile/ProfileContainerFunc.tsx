import React from "react";
import Profile from "./Profile";
import Preloader from "../Common/Preloader";
import {useProfile} from "../../Hooks/TakeProfile";
import {useAppSelector, useSavePhoto, useUpdateProfile, useUpdateStatus, useUserID} from "../../Hooks/Hooks";


const ProfileContainerFunc = () => {

    const {profile, status, isLoading}= useAppSelector(state => state.profilePage)
    const {id, isAuth} = useAppSelector(state  => state.auth)

    useProfile(id, isAuth, true)
    const UpdateStatus = useUpdateStatus();
    const updateProfile = useUpdateProfile();
    const savePhoto = useSavePhoto();
    const userId = useUserID(id);

    return (
        isLoading ? <Preloader/> :
            <Profile updateProfile={updateProfile} savePhoto={savePhoto} id={userId} myId={id} profile={profile}
                     updateStatus={UpdateStatus} status={status}/>
    )
}


export default ProfileContainerFunc;
