import {Dialogs} from "./Dialogs";
import {addMessage, updateCount} from "../../Redux/Dialogs-reducer";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";



const DialogsContainer = () => {
    let dispatch = useDispatch();
    let {messages , messageUsers ,newMessageText ,idCounter} = useSelector(state => state.dialogsPage)


    const AddMessage = useCallback((id, name, img, newMessageText, idUser) => {
        dispatch(addMessage(id,name,img,newMessageText,idUser))
        dispatch(updateCount(id))
    }, [dispatch])


    return(
        <Dialogs  addMessage = {AddMessage} messageData = {messages} userData = {messageUsers} newMessageText = {newMessageText} idCounter = {idCounter}/>
    )
}


export default DialogsContainer;