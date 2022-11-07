import React, {useEffect, useState} from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {User} from "../../Dialogs/Users/User";

const MyPosts = (props) => {
    const [count, setCount] = useState(3);
    const textInput = React.createRef();
    const clicker = () => {
        let likes = 0;
        let postsValue = textInput.current.value;
        let counts = count + 1;
        setCount(counts);
        if (postsValue !== ''){
            props.countPost(counts);
            props.addPost(postsValue, counts , likes)
        }
        textInput.current.value='';

    }
    let xray = props.counts;

    let messageElements = props.state.map(el => <Post addLike = {props.addLike} addPost = {props.addPost} likes={el.likesCount} message= {el.message} id={el.id}/>)

    return (
            <div className={styles.posts}>
               My posts {xray}
                <div className={styles.container}>
                    <div className={styles.textAreaCont}>
                        <textarea id={'text'}  className={styles.textArea}
                                ref={textInput}>
                        </textarea>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button onClick={clicker} type={"submit"} className={styles.button}>Send</button>
                    </div>
                    <div>
                        {messageElements}
                    </div>
                </div>

            </div>

    );
}

export default  MyPosts;