import React, {useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../Redux/Profile-reducer";
import {useNavigate, useParams} from "react-router-dom";



const ProfileContainerFunc = () => {
    let params = useParams();
    let dispatch = useDispatch();
    let {profile} = useSelector(state => state.profilePage)
    let {isAuth} = useSelector(state => state.auth)
    let navigate = useNavigate();

    useEffect(() => {
        dispatch(getProfile(params.id));
        if (!isAuth){
            return navigate("/login");
        }
    }, [dispatch, params.id, navigate,isAuth])

    return (
        <Profile profile={profile} />
    )
}
export default ProfileContainerFunc;
