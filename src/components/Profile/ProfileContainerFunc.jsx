import React, {memo, useCallback} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {savePhoto, setProfile, updateStatus} from "../../Redux/Profile-reducer";
import {useNavigate, useParams} from "react-router-dom";
import Preloader from "../Common/Preloader";
import {useProfile} from "../../Hooks/TakeProfile.ts";


const ProfileContainerFunc = memo(() => {
    let params = useParams();
    let dispatch = useDispatch();
    let {profile, status, isLoading} = useSelector(state => state.profilePage)
    let {id, isAuth} = useSelector(state => state.auth)
    let navigate = useNavigate();

    useProfile(params, id, isAuth, dispatch, navigate, true)

    const UpdateStatus = useCallback((status) => {
        dispatch(updateStatus(status));
    }, [dispatch])

    const updateProfile = useCallback((profile) => {
        dispatch(setProfile(profile))
    }, [dispatch])

    const SavePhoto = useCallback((file) => {
        dispatch(savePhoto(file));
    }, [dispatch])

    let userId = params.id;
    if (userId === undefined) {
        userId = id;
    }

    return (
        isLoading ? <Preloader/> :
            <Profile updateProfile={updateProfile} savePhoto={SavePhoto} id={userId} myId={id} profile={profile}
                     updateStatus={UpdateStatus} status={status}/>
    )
})


export default ProfileContainerFunc;
