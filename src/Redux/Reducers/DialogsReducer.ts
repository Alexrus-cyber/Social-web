const image = require("../../components/Dialogs/Users/img/icon.jpg");
const Ivan = require("../../components/Dialogs/Users/img/Ivan.jpg");
const Andrey = require('../../components/Dialogs/Users/img/Andrey.jpg')
//action.types
const UpdateCount = 'updateCount';
const AddMessage = 'addMessage';
//type
export type InitialStateType = typeof initialState;


type UpdateCountType = {
    type: typeof UpdateCount;
    idCounts: number
}

type AddMessageType = {
    type: typeof AddMessage,
    idCount: number,
    name: string,
    image: string | null,
    newMessageText: string,
    idUser: number,
}
type MessageUsersType = {
    id: number,
    name: string,
    img: string,
}

type MessagesType = {
    id: number,
    message: string,
    name: string,
    img: string
}
type IdCounter = {
    idCounts: number;
}

let initialState = {
    messageUsers: [
        {id: 1, name: 'Даниил Громыко', img: image,},
        {id: 2, name: 'Яван Миллер', img: Ivan,},
        {id: 3, name: 'Андрей Солодышкин', img: Andrey,},
    ] as Array<MessageUsersType>,

    messages: [
        {id: 1, message: 'Привет Бро!', name: 'Даниил Громыко', img: image},
        {id: 2, name: 'Яван Миллер', img: Ivan, message: 'Я Иван привет'},
        {id: 3, name: 'Андрей Солодышкин', img: Andrey, message: 'Hello world!'},
    ] as Array<MessagesType>,
    idCounter: [] as Array<IdCounter>,
}

export const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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
                idCounter: [...state.idCounter, action.idCounts],
            };
        }
        default:
            return state;
    }

}


export let updateCount = (counts: number): UpdateCountType => {
    return {
        type: UpdateCount,
        idCounts: counts,
    }
}


export let addMessage = (id: number, name: string, img: string | null, newMessageText: string, idUser: number): AddMessageType => {
    return {
        type: AddMessage,
        idCount: id,
        name: name,
        image: img,
        newMessageText,
        idUser,
    }
}
