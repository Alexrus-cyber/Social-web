import image from "../components/Dialogs/Users/img/icon.jpg";
import Ivan from "../components/Dialogs/Users/img/Ivan.jpg";
import Andrey from "../components/Dialogs/Users/img/Andrey.jpg";
import {dialogsAPI} from "../API/API";

const UpdateMessage = 'updateMessage';
const UpdateCount = 'updateCount';
const AddMessage = 'addMessage';
const GetUsers = 'GetUsers';

let initialState = {
    messageUsers: [
        {id: 1, name: 'Даниил Громыко', img: image,},
        {id: 2, name: 'Яван Миллер', img: Ivan,},
        {id: 3, name: 'Андрей Солодышкин', img: Andrey,},
    ],
    users: [],
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
        case GetUsers: {
            return {
                ...state,
                users: [...state.users, action.users]
            }
        }

        default:
            return state;
    }

}
export const getUsers = (users) => {
    return {
        type: GetUsers,
        users
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

export const getAllDialogs = () =>{
    return (dispatch) => {
        dialogsAPI.getDialogs().then(data =>
        dispatch(getUsers(data))
        )}
}