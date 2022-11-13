import {Dialogs} from "./Dialogs";
import {addMessageActionCreator, updateCountCreator, updateMessageActionCreator} from "../../Redux/Dialogs-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        messageData: state.dialogsPage.message,
        userData: state.dialogsPage.messageUsers,
        newMessageText: state.dialogsPage.newMessageText,
        idCounter: state.dialogsPage.idCounter,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (messageValue) => {
            dispatch(updateMessageActionCreator(messageValue));
        },
        addMessage: (id, name, img) => {
            dispatch(addMessageActionCreator(id, name, img))
        },
        updateCount: (count) => {
            dispatch(updateCountCreator(count))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

/*export const DialogsContainer = (props) => {
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
}*/