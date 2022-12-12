import {Dialogs} from "./Dialogs";
import {useProfile} from "../../Hooks/TakeProfile";
import Preloader from "../Common/Preloader";
import {useAddMessage,useAppSelector} from "../../Hooks/Hooks";
import React from "react";


const DialogsContainer = () => {
    let {photos, fullName , userId}= useAppSelector(state => state.profilePage.profile)
    let {messages, messageUsers} = useAppSelector(state => state.dialogsPage)
    let {id, isAuth} = useAppSelector(state => state.auth)

    useProfile(id, isAuth, false);
    const AddMessage = useAddMessage();

    return (
         photos ? <Dialogs userId={userId} photos = {photos} fullName = {fullName} addMessage={AddMessage} messageData={messages}
                                           userData={messageUsers} /> : <Preloader/>

    )
}


export default DialogsContainer;
