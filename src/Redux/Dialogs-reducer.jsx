import image from "../components/Dialogs/Users/img/icon.jpg";
import Ivan from "../components/Dialogs/Users/img/Ivan.jpg";
import Andrey from "../components/Dialogs/Users/img/Andrey.jpg";

const updateMessage = 'updateMessage';
const updateCount = 'updateCount';
const addMessage = 'addMessage';

let initialState = {
    messageUsers: [
        {id: 1, name: 'Даниил Громыко', img: image,},
        {id: 2, name: 'Яван Миллер', img: Ivan,},
        {id: 3, name: 'Андрей Солодышкин', img: Andrey,},
    ],
    message: [
        {id: 1, message: 'Привет Бро!', name: 'Даниил Громыко', img: image,},
        {id: 2, name: 'Яван Миллер', img: Ivan, message: 'Я Иван привет'},
        {id: 3, name: 'Андрей Солодышкин', img: Andrey, message: 'Hello world!'},
    ],
    newMessageText: '',
    idCounter: 3,
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case addMessage: {
            let newMessage = {
                id: action.idCount,
                message: state.newMessageText,
                name: action.name,
                img: action.image
            }
            console.log(newMessage)
            return {
                ...state,
                message: [...state.message, newMessage],
                newMessageText: '',
            };
        }

        case updateMessage: {
            return {
                ...state,
                newMessageText: action.newMessage,
            };
        }
        case updateCount: {
            return {
                ...state,
                idCounter: action.idCounts,
            };
        }

        default:
            return state;
    }

}
export let updateCountCreator = (counts) => {
    return {
        type: updateCount,
        idCounts: counts,
    }
}
export let updateMessageActionCreator = (messageValue) => {
    return {
        type: updateMessage,
        newMessage: messageValue
    }
}
export let addMessageActionCreator = (id, name, img) => {
    return {
        type: addMessage,
        idCount: id,
        name: name,
        image: img,
    }
}
