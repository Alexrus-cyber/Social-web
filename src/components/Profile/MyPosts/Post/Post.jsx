import React from "react";
import styles from './Post.module.css';
import Like from "./Like/Like";

const Post = (props) => {

    return (
        <div className={styles.item}>
            <div className={styles.textBlock}>
                <div style={{marginRight: 20}}><img alt={'f'} src={props.profile.photos.large}/></div>
                <div style={{width: 700 , wordWrap: "inherit" , wordBreak: 'break-word'}}> <p className={styles.p}>{props.message}</p></div>
            </div>
            <Like addLike = {props.addLike}  dispatch = {props.dispatch} message= {props.message} id={props.id} likes = {props.likesCount}/>
        </div>

    );
}

export default  Post;