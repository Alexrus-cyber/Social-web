import {Dialogs} from "./Dialogs";
import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/Dialogs-reducer";

export const DialogsContainer = (props) => {
    /// Переменные(Данные из DialogsReducer)
    let state = props.store.getState().dialogsPage;
    let messageData = state.message;
    let userData = state.users;
    let newMessageText = state.newMessageText;

    /// Методы (action.creators из DialogsReducer)
    let updateMessage = (messageValue) => {
        let action = updateMessageActionCreator(messageValue)
        props.store.dispatch(action);
    }
    let addMessage = (id, name, img) => {
        let action = addMessageActionCreator(id, name , img)
        props.store.dispatch(action)
    }

    return (
        <Dialogs updateMessage = {updateMessage} addMessage = {addMessage}  messageData = {messageData} newMessageText = {newMessageText} userData = {userData} />
    )
}