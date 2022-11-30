
const image = require( "../../components/Dialogs/Users/img/icon.jpg");
const Ivan = require( "../../components/Dialogs/Users/img/Ivan.jpg");
const Andrey = require('../../components/Dialogs/Users/img/Andrey.jpg')
//action.types
const UpdateCount = 'updateCount';
const AddMessage = 'addMessage';
const GetUsers = 'GetUsers';
//type
type InitialStateType = typeof initialState;
type getUsersType = {
    type: typeof GetUsers;
    users: object;
}
type updateCountType = {
    type: typeof UpdateCount;
    idCounts: number
}
type addMessageType = {
    type: typeof AddMessage,
    idCount: number,
    name: string,
    image: string | null,
    newMessageText: string,
    idUser: number,
}


let initialState = {
    messageUsers: [
        {id: 1, name: 'Даниил Громыко', img: image,},
        {id: 2, name: 'Яван Миллер', img: Ivan,},
        {id: 3, name: 'Андрей Солодышкин', img: Andrey,},
    ],
    users: [],
    messages: [
        {id: 1, message: 'Привет Бро!', name: 'Даниил Громыко', img: image},
        {id: 2, name: 'Яван Миллер', img: Ivan, message: 'Я Иван привет'},
        {id: 3, name: 'Андрей Солодышкин', img: Andrey, message: 'Hello world!'},
    ],
    newMessageText: '',
    idCounter: [],
}

export const dialogsReducer = (state = initialState, action):InitialStateType => {
    switch (action.type) {
        case AddMessage: {
            let newMessage = {
                id: action.idCount,
                name: action.name,
                img: action.image,
                message: action.newMessageText,
                idUser: action.idUser
            }
            console.log(newMessage)
            return {
                ...state,
                messages: [...state.messages, newMessage]
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

export const getUsers = (users: object):getUsersType => {
    return {
        type: GetUsers,
        users
    }
}
export let updateCount = (counts: number): updateCountType => {
    return {
        type: UpdateCount,
        idCounts: counts,
    }
}


export let addMessage = (id: number, name: string, img: string | null, newMessageText: string, idUser: number): addMessageType => {
    return {
        type: AddMessage,
        idCount: id,
        name: name,
        image: img,
        newMessageText,
        idUser,
    }
}
