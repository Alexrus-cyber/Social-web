import {Dialogs} from "./Dialogs";
import {addMessage, updateCount, updateMessage} from "../../Redux/Dialogs-reducer";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {useNavigate} from "react-router-dom";



export const DialogsContainer = () => {
    let dispatch = useDispatch();
    let {message , messageUsers ,newMessageText ,idCounter} = useSelector(state => state.dialogsPage)
    let {isAuth} = useSelector(state => state.auth)
    let navigate = useNavigate();
    useEffect(() => {
        if (!isAuth){
            return navigate("/login");
        }
    });

    const AddMessage = useCallback((id, name, img) => {
        dispatch(addMessage(id,name,img))
        dispatch(updateCount(id))
    }, [dispatch])

    const UpdateMessage = useCallback((text) => {
        dispatch(updateMessage(text))
    },[dispatch])

    return(
        <Dialogs  updateMessage={UpdateMessage} addMessage = {AddMessage} messageData = {message} userData = {messageUsers} newMessageText = {newMessageText} idCounter = {idCounter}/>
    )
}
