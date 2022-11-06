import image from "../components/Dialogs/Users/img/icon.jpg";
import Ivan from "../components/Dialogs/Users/img/Ivan.jpg";
import Andrey from "../components/Dialogs/Users/img/Andrey.jpg";
import {useState} from "react";



let rerenderTree = (post) => {
    console.log("State changed")
    console.log(post)
}


export let state = {

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
        ]
    }
}
window.state = state;
export let AddPost = (postMessage , idCount , likes) =>{
    let newPost = {
        id: idCount,
        message: postMessage,
        likesCount: likes,
    };
    state.profilePage.posts.push(newPost)
    rerenderTree(newPost);
}

export const subscribe = (observer) =>{
    rerenderTree = observer
}

export default state;
