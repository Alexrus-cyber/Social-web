import image from "../components/Dialogs/Users/img/icon.jpg";
import Ivan from "../components/Dialogs/Users/img/Ivan.jpg";
import Andrey from "../components/Dialogs/Users/img/Andrey.jpg";
import {useState} from "react";




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
    getState() {
            return this._state;
    },
    _rerenderTree (post){
        console.log("State changed")
        console.log(post)
    },
    addPost (postMessage , idCount , likes) {
        let newPost = {
            id: idCount,
            message: postMessage,
            likesCount: likes,
        };
        this._state.profilePage.posts.unshift(newPost)
        this._rerenderTree(newPost);
    },
    postsCount (countPost){
        this._state.profilePage.countPosts = countPost
        this._rerenderTree(countPost);
    },
    addLike(like , id){
        let likes = {
            likesCount: like
        }
        console.log(id);
        this._rerenderTree(likes);
    }
}

window.store = store;
export default store;
