import {Dialogs} from "./Dialogs";
import {addMessage, updateCount} from "../../Redux/Reducers/DialogsReducer";
import {useCallback} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useProfile} from "../../Hooks/TakeProfile";
// @ts-ignore
import Preloader from "../Common/Preloader";
import {useAppDispatch, useAppSelector} from "../../Hooks/Hooks";
import {QuizParams} from "../../Types/Types";
import React from "react";
import {AuthPageType, DialogsPageType, ProfilePageType} from "../../Types/SelectorTypes";



const DialogsContainer = () => {
    let dispatch = useAppDispatch();
    let params = useParams<QuizParams>();
    let navigate = useNavigate();
    let {profile}:ProfilePageType = useAppSelector(state => state.profilePage)
    let {messages, messageUsers, idCounter}: DialogsPageType = useAppSelector(state => state.dialogsPage)
    let {id, isAuth}: AuthPageType = useAppSelector(state => state.auth)


    useProfile(params,id, isAuth, dispatch, navigate, false);

    const AddMessage = useCallback((id: number, name: string, img: string | null, newMessageText: string, idUser: number) => {
        dispatch(addMessage(id, name, img, newMessageText, idUser))
        dispatch(updateCount(id))
    }, [dispatch])

    let userId =Number(params.id);
    if (userId === undefined) {
        userId = id;
    }

    return (
        profile ? <Dialogs userId={userId} profile={profile} addMessage={AddMessage} messageData={messages}
                           userData={messageUsers} idCounter={idCounter}/> : <Preloader/>

    )
}


export default DialogsContainer;
