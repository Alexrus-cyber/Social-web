import {Dialogs} from "./Dialogs";
import {addMessage, updateCount, updateMessage} from "../../Redux/Dialogs-reducer";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {WithRedirect} from "../Hoc/WithRedirectComponent";
import {compose} from "redux";



const DialogsContainer = () => {
    let dispatch = useDispatch();
    let {message , messageUsers ,newMessageText ,idCounter} = useSelector(state => state.dialogsPage)


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
let HighOrderComponents = compose(
    WithRedirect,

)(DialogsContainer)

export default HighOrderComponents;