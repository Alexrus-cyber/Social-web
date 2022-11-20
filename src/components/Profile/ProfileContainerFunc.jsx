import React, {useCallback, useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getLoading, getProfile, getStatus, updateStatus} from "../../Redux/Profile-reducer";
import {useNavigate, useParams} from "react-router-dom";
import Preloader from "../Common/Preloader";


const ProfileContainerFunc = () => {
    let params = useParams();
    let dispatch = useDispatch();
    let {profile, status, isLoading} = useSelector(state => state.profilePage)
    let {id, isAuth} = useSelector(state => state.auth)
    let navigate = useNavigate();

    useEffect(() => {
        let userId = params.id;
        if (!userId) {
            if (isAuth) {
                userId = id;
                dispatch(getProfile(userId, false));
                dispatch(getStatus(userId));
            } else {
                navigate('/login')
            }
        } else {
            dispatch(getLoading(true))
            dispatch(getProfile(userId, false));
            dispatch(getStatus(userId));
        }

    }, [dispatch, params.id, id, navigate, isAuth])
    const UpdateStatus = useCallback((status) => {
        dispatch(updateStatus(status));
    }, [dispatch])
    let userId = params.id;
    if (userId === undefined) {
        userId = id;
    }

    return (
        isLoading ? <Preloader/> :
            <Profile id={userId} myId={id} profile={profile} updateStatus={UpdateStatus} status={status}/>
    )
}


export default ProfileContainerFunc;
