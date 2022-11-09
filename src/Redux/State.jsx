import image from "../components/Dialogs/Users/img/icon.jpg";
import Ivan from "../components/Dialogs/Users/img/Ivan.jpg";
import Andrey from "../components/Dialogs/Users/img/Andrey.jpg";
import {useState} from "react";

const addPost = 'addPost';
const postCount = 'postCount';
const addLike = 'addLike';


let store = {
    _state: {

        dialogsPage: {
            users : [   {id: '1', name: 'Даниил Громыко' , img :image,},
                {id: '2', name: 'Яван Миллер' ,img :Ivan, },
                {id: '3', name: 'Андрей Солодышкин', img :Andrey,},
            ]
        },
        profilePage: {
            posts: [
                {id: '1', message: 'Даниил Громыко' , likesCount : 1,},
                {id: '2', message: 'Яван Миллер' , likesCount : 2, },
                {id: '3', message: 'Андрей Солодышкин',  likesCount : 3,},
            ],
            countPosts: 3
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
                message: action.postMessage,
                likesCount: action.likes,
            };
            this._state.profilePage.posts.unshift(newPost)
            this._rerenderTree(newPost);
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
    }
}
export let addPostActionCreator = (counts, postsValue, likes) =>{
    return {
        type: addPost,
        idCount: counts,
        postMessage: postsValue,
        likes: likes
    }
}
export let Counter = (counts) =>{
    return {
        type: postCount,
        countPost: counts
    }
}

window.store = store;
export default store;
