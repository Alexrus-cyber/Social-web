import React, {useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../Redux/Profile-reducer";
import {useParams} from "react-router-dom";
import {WithRedirect} from "../Hoc/WithRedirectComponent";
import {compose} from "redux";
import Preloader from "../Common/Preloader";



const ProfileContainerFunc = () => {
    let params = useParams();
    let dispatch = useDispatch();
    let {profile, isLoading} = useSelector(state => state.profilePage)
    useEffect(() => {
        dispatch(getProfile(params.id));
    }, [dispatch, params.id])

    return (
        isLoading ? <Preloader/> :
        <Profile profile={profile} />
    )
}
let HighOrderComponents = compose(
    WithRedirect,

)(ProfileContainerFunc)

export default HighOrderComponents;
