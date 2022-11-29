import {Dialogs} from "./Dialogs";
import {addMessage, updateCount} from "../../Redux/Dialogs-reducer";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useProfile} from "../../Hooks/TakeProfile.ts";


const DialogsContainer = () => {
    let dispatch = useDispatch();
    let params = useParams();
    let navigate = useNavigate();
    let {profile} = useSelector(state => state.profilePage)
    let {messages, messageUsers, idCounter} = useSelector(state => state.dialogsPage)
    let {id, isAuth} = useSelector(state => state.auth)


    useProfile(params,id, isAuth, dispatch, navigate, false);

    const AddMessage = useCallback((id, name, img, newMessageText, idUser) => {
        dispatch(addMessage(id, name, img, newMessageText, idUser))
        dispatch(updateCount(id))
    }, [dispatch])

    let userId = params.id;
    if (userId === undefined) {
        userId = id;
    }

    return (
        <Dialogs userId={userId} profile={profile} addMessage={AddMessage} messageData={messages}
                 userData={messageUsers} idCounter={idCounter}/>
    )
}


export default DialogsContainer;