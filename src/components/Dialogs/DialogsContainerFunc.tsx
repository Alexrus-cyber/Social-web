import {Dialogs} from "./Dialogs";
import {addMessage, updateCount} from "../../Redux/Reducers/DialogsReducer";
import {useCallback} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useProfile} from "../../Hooks/TakeProfile";
import Preloader from "../Common/Preloader";
import {useAppDispatch, useAppSelector} from "../../Hooks/Hooks";
import {QuizParams} from "../../Types/Types";
import React from "react";


const DialogsContainer = () => {
    let dispatch = useAppDispatch();
    let params = useParams<QuizParams>();
    let navigate = useNavigate();
    let {profile}= useAppSelector(state => state.profilePage)
    let {messages, messageUsers, idCounter} = useAppSelector(state => state.dialogsPage)
    let {id, isAuth} = useAppSelector(state => state.auth)


    useProfile(params,id, isAuth, dispatch, navigate, false);

    const AddMessage = useCallback((id: number, name: string, img: string | null, newMessageText: string, idUser: number) => {
        dispatch(addMessage(id, name, img, newMessageText, idUser))
        dispatch(updateCount(id))
    }, [dispatch])

    let userId  = params.id
    if (userId === undefined) {
        userId = String(id);
    }

    return (
        profile ? <Dialogs userId={userId} profile={profile} addMessage={AddMessage} messageData={messages}
                           userData={messageUsers} idCounter={idCounter}/> : <Preloader/>

    )
}


export default DialogsContainer;
