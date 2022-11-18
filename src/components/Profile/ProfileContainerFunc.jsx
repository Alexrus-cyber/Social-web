import React, {useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../Redux/Profile-reducer";
import {useParams} from "react-router-dom";



const ProfileContainerFunc = () => {
    let params = useParams();
    let dispatch = useDispatch();
    let {profile} = useSelector(state => state.profilePage)

    useEffect(() => {
        dispatch(getProfile(params.id))
    }, [dispatch, params.id])

    return (
        <Profile profile={profile}/>
    )
}
export default ProfileContainerFunc;
