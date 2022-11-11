import image from "../components/Dialogs/Users/img/icon.jpg";
import Ivan from "../components/Dialogs/Users/img/Ivan.jpg";
import Andrey from "../components/Dialogs/Users/img/Andrey.jpg";
import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reducer";


let store = {
    _state: {
        dialogsPage: {
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

        },
        profilePage: {
            posts: [
                {id: 1, message: 'Даниил Громыко' , likesCount : 1,},
                {id: 2, message: 'Яван Миллер' , likesCount : 2, },
                {id: 3, message: 'Андрей Солодышкин',  likesCount : 3,},
            ],
            countPosts: 3 ,
            newPostText: '',
        }
    },
    _rerenderTree (post){
        console.log("State changed")
        console.log(post)
    },
    subscribe (observer) {
        this._rerenderTree = observer;
    },
    getState() {
            return this._state;
    },
    dispatch (action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._rerenderTree(this._state);

    }
}



window.store = store;
export default store;
