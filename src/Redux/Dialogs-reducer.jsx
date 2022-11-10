const updateMessage = 'updateMessage';
const addMessage = 'addMessage';

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case addMessage:
            let newMessage = {
                id: action.idCount,
                message: state.newMessageText,
                name: action.name,
                img: action.image
            }
            state.message.push(newMessage);
            state.newMessageText = '';

            console.log(newMessage)
            return state;

        case updateMessage:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }

}
export let updateMessageActionCreator = (messageValue) => {
    return {
        type: updateMessage,
        newMessage: messageValue
    }
}
export let addMessageActionCreator = (id,name, img) =>{
    return {
        type: addMessage,
        idCount: id,
        name: name,
        image: img,
    }
}
