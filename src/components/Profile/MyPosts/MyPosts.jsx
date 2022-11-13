import React, { useState} from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    const [count, setCount] = useState(props.counts);

    const textInput = React.createRef();

    const clicker = () => {
        let postsValue = textInput.current.value;
        let likes = 0;
        let counts = count + 1;
        setCount(counts);
        if (postsValue !== '') {
            props.addPost(counts, likes)
            props.counterPosts(counts)
        }


    }
    let onPostChange = () => {
        let postsValue = textInput.current.value;
        props.onPostChange(postsValue)
    }

    let postElements = props.postData.map(el => <Post addLike={props.addLike} key={el.id} likesCount={el.likesCount}
                                                      message={el.message} id={el.id}/>)

    return (
        <div className={styles.posts}>
            My posts {props.xray}
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

export default MyPosts;