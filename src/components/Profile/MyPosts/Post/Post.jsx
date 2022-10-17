import React from "react";
import styles from './Post.module.css';
import Like from "./Like/Like";

const Post = (props) => {
    return (
        <div className={styles.item}>

            <div className={styles.textBlock}>
                <div style={{marginRight: 20}}><img alt={'f'} src={"https://i.pinimg.com/originals/6b/08/76/6b087603862a127ea290e0a47ed932bf.jpg"}/></div>
                <div style={{width: 500 , wordWrap: "inherit" , wordBreak: 'break-word'}}> <p className={styles.p}>{props.messsage}</p></div>
            </div>
            <Like />
        </div>

    );
}

export default  Post;