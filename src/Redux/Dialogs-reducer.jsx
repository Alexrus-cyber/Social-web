import image from "../components/Dialogs/Users/img/icon.jpg";
import Ivan from "../components/Dialogs/Users/img/Ivan.jpg";
import Andrey from "../components/Dialogs/Users/img/Andrey.jpg";

const UpdateMessage = 'updateMessage';
const UpdateCount = 'updateCount';
const AddMessage = 'addMessage';

let initialState = {
    messageUsers: [
        {id: 1, name: 'Даниил Громыко', img: image,},
        {id: 2, name: 'Яван Миллер', img: Ivan,},
        {id: 3, name: 'Андрей Солодышкин', img: Andrey,},
    ],
    message: [
        {id: 1, message: 'Привет Бро!', name: 'Даниил Громыко', img: image, },
        {id: 2, name: 'Яван Миллер', img: Ivan, message: 'Я Иван привет',},
        {id: 3, name: 'Андрей Солодышкин', img: Andrey, message: 'Hello world!',},
    ],
    newMessageText: '',
    idCounter: [],
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case AddMessage: {
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

        case UpdateMessage: {
            return {
                ...state,
                newMessageText: action.newMessage,
            };
        }
        case UpdateCount: {
            return {
                ...state,
                idCounter: [...state.idCounter,action.idCounts],
            };
        }

        default:
            return state;
    }

}
export let updateCount = (counts) => {
    return {
        type: UpdateCount,
        idCounts: counts,
    }
}
export let updateMessage = (messageValue) => {
    return {
        type: UpdateMessage,
        newMessage: messageValue
    }
}
export let addMessage = (id, name, img) => {
    return {
        type: AddMessage,
        idCount: id,
        name: name,
        image: img,
    }
}
