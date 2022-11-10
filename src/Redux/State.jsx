import image from "../components/Dialogs/Users/img/icon.jpg";
import Ivan from "../components/Dialogs/Users/img/Ivan.jpg";
import Andrey from "../components/Dialogs/Users/img/Andrey.jpg";
import {useState} from "react";

const addPost = 'addPost';
const postCount = 'postCount';
const addLike = 'addLike';
const updateText = 'updateText';
const updateMessage = 'updateMessage';


let store = {
    _state: {

        dialogsPage: {
            users : [   {id: 1, name: 'Даниил Громыко' , img :image,},
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
        if (action.type === addPost){
            let newPost = {
                id: action.idCount,
                message: this._state.profilePage.newPostText,
                likesCount: action.likes,
            };
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this._rerenderTree(newPost);
            console.log(newPost)
        }
        else if (action.type === postCount){
            this._state.profilePage.countPosts = action.countPost
            this._rerenderTree(action.countPost);
        }
        else if (action.type === addLike){
            let likes = {
                likesCount: action.like
            }
            console.log(action.id);
            this._rerenderTree(likes);
        }
        else if (action.type === updateText) {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderTree(action.newText);
        }
        else if (action.type === updateMessage) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._rerenderTree(action.newMessage);
        }

    }
}
export let addPostActionCreator = (counts, likes) =>{
    return {
        type: addPost,
        idCount: counts,
        likes: likes
    }
}
export let Counter = (counts) =>{
    return {
        type: postCount,
        countPost: counts
    }
}
export let updateTextActionCreator = (postsValue) => {
    return {
        type: updateText,
        newText: postsValue
    }
}
export let updateMessageActionCreator = (messageValue) => {
    return {
        type: updateText,
        newMessage: messageValue
    }
}

window.store = store;
export default store;
