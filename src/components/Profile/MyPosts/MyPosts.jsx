import React, {useEffect, useState} from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {User} from "../../Dialogs/Users/User";
import {addPostActionCreator, Counter, updateTextActionCreator} from "../../../Redux/Profile-reducer";




const MyPosts = (props) => {
    const [count, setCount] = useState(props.counts);

    const textInput = React.createRef();

    const clicker = () => {
        let likes = 0;
        let postsValue = textInput.current.value;
        let counts = count + 1;
        setCount(counts);
        if (postsValue !== ''){
            props.dispatch (addPostActionCreator(counts,props.like))
            props.dispatch (Counter(counts))
        }


    }

    let onPostChange = () => {
        let postsValue = textInput.current.value;
        props.dispatch(updateTextActionCreator(postsValue))
    }
    let xray = props.counts;

    let postElements = props.state.map(el => <Post dispatch = {props.dispatch}  likes={el.likesCount} message= {el.message} id={el.id}/>)

    return (
            <div className={styles.posts}>
               My posts {xray}
                <div className={styles.container}>
                    <div className={styles.textAreaCont}>
                        <textarea onChange={onPostChange} value={props.newPostText} className={styles.textArea}
                                ref={textInput}>
                        </textarea>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button onClick={clicker} type={"submit"} className={styles.button}>Send</button>
                    </div>
                    <div>
                        {postElements}
                    </div>
                </div>

            </div>

    );
}

export default  MyPosts;