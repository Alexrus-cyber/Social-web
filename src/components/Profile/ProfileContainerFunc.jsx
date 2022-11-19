import React, {useCallback, useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../Redux/Profile-reducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {WithRedirect} from "../Hoc/WithRedirectComponent";


const ProfileContainerFunc = () => {
    let params = useParams();
    let dispatch = useDispatch();
    let {profile, status} = useSelector(state => state.profilePage)
    useEffect(() => {
        let userId = params.id;
        if (!userId){
            userId = 1079;
        }
            dispatch(getProfile(userId));
            dispatch(getStatus(userId));
    }, [dispatch, params.id])

    const UpdateStatus = useCallback((status)=>{
        dispatch(updateStatus(status));
    },[dispatch])
    return (
        <Profile profile={profile} updateStatus = {UpdateStatus} status = {status}/>
    )
}
let HighOrderComponents = compose(
    WithRedirect
)(ProfileContainerFunc)

export default HighOrderComponents;
