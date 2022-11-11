import image from "../components/Dialogs/Users/img/icon.jpg";
import Ivan from "../components/Dialogs/Users/img/Ivan.jpg";
import Andrey from "../components/Dialogs/Users/img/Andrey.jpg";

const updateMessage = 'updateMessage';
const addMessage = 'addMessage';

let initialState = {
        users : [
            {id: 1, name: 'Даниил Громыко' , img :image,},
            {id: 2, name: 'Яван Миллер' ,img :Ivan, },
            {id: 3, name: 'Андрей Солодышкин', img :Andrey,},
        ],
        message : [
            {id : 1 , message: 'Привет Бро!' , name: 'Даниил Громыко' , img :image,},
            {id: 2, name: 'Яван Миллер' ,img :Ivan, message: 'Я Иван привет'},
            {id: 3, name: 'Андрей Солодышкин', img :Andrey, message: 'Hello world!'},
        ],
        newMessageText: '',

    }

export const dialogsReducer = (state = initialState, action) => {
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
