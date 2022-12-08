import React, {memo, useCallback} from "react";
import Profile from "./Profile";
import {savePhoto, setProfile, updateStatus} from "../../Redux/Reducers/ProfileReducer";
import {useNavigate, useParams} from "react-router-dom";
// @ts-ignore
import Preloader from "../Common/Preloader";
import {useProfile} from "../../Hooks/TakeProfile";
import {useAppDispatch, useAppSelector} from "../../Hooks/Hooks";
import {PhotosType, ProfileType, QuizParams} from "../../Types/Types";
import {AuthPageType, ProfilePageType} from "../../Types/SelectorTypes";


const ProfileContainerFunc = memo(() => {
    let params = useParams<QuizParams>();
    let dispatch = useAppDispatch();
    const {profile, status, isLoading}: ProfilePageType= useAppSelector(state => state.profilePage)
    let {id, isAuth}: AuthPageType = useAppSelector(state  => state.auth)

    let navigate = useNavigate();

    useProfile(params, id, isAuth, dispatch, navigate, true)

    const UpdateStatus = useCallback((status: string) => {
        dispatch(updateStatus(status));
    }, [dispatch])

    const updateProfile = useCallback((profile: ProfileType) => {
        dispatch(setProfile(profile))
    }, [dispatch])

    const SavePhoto = useCallback((file: PhotosType) => {
        dispatch(savePhoto(file));
    }, [dispatch])

    let userId  = params.id
    if (userId === undefined) {
        userId = String(id);
    }

    return (
        isLoading ? <Preloader/> :
            <Profile updateProfile={updateProfile} savePhoto={SavePhoto} id={userId} myId={id} profile={profile}
                     updateStatus={UpdateStatus} status={status}/>
    )
})


export default ProfileContainerFunc;
