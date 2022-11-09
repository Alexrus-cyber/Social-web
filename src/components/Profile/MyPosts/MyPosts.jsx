import React, {useEffect, useState} from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {User} from "../../Dialogs/Users/User";
import {addPostActionCreator, Counter} from "../../../Redux/State";



const MyPosts = (props) => {
    const [count, setCount] = useState(3);

    const textInput = React.createRef();

    const clicker = () => {
        let likes = 0;
        let postsValue = textInput.current.value;
        let counts = count + 1;
        setCount(counts);
        if (postsValue !== ''){
            props.dispatch (addPostActionCreator(counts,postsValue,likes))
            props.dispatch (Counter(counts))
        }
        textInput.current.value='';

    }

    let xray = props.counts;

    let messageElements = props.state.map(el => <Post dispatch = {props.dispatch}  likes={el.likesCount} message= {el.message} id={el.id}/>)

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