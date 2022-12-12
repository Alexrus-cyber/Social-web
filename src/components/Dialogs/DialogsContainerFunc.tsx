import {Dialogs} from "./Dialogs";
import {addMessage, updateCount} from "../../Redux/Reducers/DialogsReducer";
import {useCallback} from "react";
import {useProfile} from "../../Hooks/TakeProfile";
import Preloader from "../Common/Preloader";
import {useAppDispatch, useAppSelector, useUserID} from "../../Hooks/Hooks";
import React from "react";


const DialogsContainer = () => {
    let dispatch = useAppDispatch();
    let {profile}= useAppSelector(state => state.profilePage)
    let {messages, messageUsers, idCounter} = useAppSelector(state => state.dialogsPage)
    let {id, isAuth} = useAppSelector(state => state.auth)
    useProfile(id, isAuth, false);
    const AddMessage = useCallback((id: number, name: string, img: string | null, newMessageText: string, idUser: number) => {
        dispatch(addMessage(id, name, img, newMessageText, idUser))
        dispatch(updateCount(id))
    }, [dispatch])

    let userId = useUserID(id);

    return (
        profile ? <Dialogs userId={userId} profile={profile} addMessage={AddMessage} messageData={messages}
                           userData={messageUsers} idCounter={idCounter}/> : <Preloader/>

    )
}


export default DialogsContainer;
