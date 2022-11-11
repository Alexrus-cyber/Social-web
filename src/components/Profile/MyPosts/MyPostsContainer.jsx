import React, {useEffect, useState} from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {addLikeCreator, addPostActionCreator, Counter, updateTextActionCreator} from "../../../Redux/Profile-reducer";
import MyPosts from "./MyPosts";




const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = (counts, likes) => {
        let action = addPostActionCreator(counts,likes)
        props.store.dispatch(action)
    }
    let counterPosts = (counts) => {
        let action = Counter(counts)
        props.store.dispatch(action)
    }
    let onPostChange = (text) => {
        let action = updateTextActionCreator(text);
        props.store.dispatch(action)
    }
    let addLike = (like) => {
        let action = addLikeCreator(like)
        props.store.dispatch(action)
    }
    let xray = state.profilePage.countPosts;

   return (
       <MyPosts addLike = {addLike} counts = {state.profilePage.countPosts} xray = {xray} newPostText = {state.profilePage.newPostText} postData = {state.profilePage.posts} store = {props.store} addPost = {addPost} counterPosts = {counterPosts} onPostChange = {onPostChange}/>
   )
}

export default  MyPostsContainer;