import React, {memo, useCallback} from "react";
// @ts-ignore
import Profile from "./Profile.jsx";
// @ts-ignore
import {savePhoto, setProfile, updateStatus} from "../../Redux/Reducers/ProfileReducer.ts";
import {useNavigate, useParams} from "react-router-dom";
// @ts-ignore
import Preloader from "../Common/Preloader";
// @ts-ignore
import {useProfile} from "../../Hooks/TakeProfile.ts";
// @ts-ignore
import {useAppDispatch, useAppSelector} from "../../Hooks/Hooks.ts";
import {PhotosType, ProfileType} from "../../Types/Types";
// @ts-ignore
import {RootState} from "../../Redux/ReduxStore";

type ProfilePageType = {
    profile: ProfileType,
    status: string,
    isLoading: boolean
}
const ProfileContainerFunc = memo(() => {
    let params = useParams();
    let dispatch = useAppDispatch();
    let {profile, status, isLoading}: ProfilePageType = useAppSelector((state:RootState) => state.profilePage)
    let {id, isAuth} = useAppSelector((state: RootState)  => state.auth)
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

    let userId  = params.id;
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
