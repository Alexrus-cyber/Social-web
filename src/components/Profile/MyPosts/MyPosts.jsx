import React, {useCallback, useState} from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength, Required} from "../../../Utils/Validators/Validators";
import {TextAreaForm} from "../../Common/FormCreators";

const MyPosts = React.memo((props) => {
    const [count, setCount] = useState(props.counts);
    const onSubmit = useCallback((values) => {
            let likes = 0;
            let counts = count + 1;
            setCount(counts);
            props.addPost(counts, likes, values.newPostText);
    },[count,props])


    let postElements = props.postData.map(el => <Post profile = {props.profile} addLike={props.addLike} key={el.id} likesCount={el.likesCount}
                                                      message={el.message} id={el.id}/>)

    return (
        <div>
            {props.id === props.myId ?
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div className={styles.posts}>
                            <div>
                                My posts {props.counts}
                                <div className={styles.container}><ReduxPostForm onSubmit = {onSubmit}/>
                                    <div>
                                        {postElements}
                                    </div>
                                </div>
                            </div>
                    </div>
                </div> :
                <div style={{display: "flex", justifyContent: "flex-end", width: 740, marginLeft: 38, marginBottom: 20}}>
                    <div className={styles.posts}>
                            <div className={styles.posts}>
                                <div>
                                    {postElements}
                                </div>
                            </div>
                    </div>
                </div>

            }
        </div>

  /*  <div style={{display: "flex", justifyContent: "center"}}>
        <div className={styles.posts}>
            {props.id === props.myId ?
                <div>
                    My posts {props.counts}
                    <div className={styles.container}><ReduxPostForm onSubmit = {onSubmit}/>
                        <div>
                            {postElements}
                        </div>
                    </div>
                </div>
                :
                    <div className={styles.posts}>
                        <div>
                                {postElements}
                        </div>
                </div>}

        </div>
    </div>*/


    );
})
const maxLength20 = maxLength(1000);

const NewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div >
                <Field name={'newPostText'} placeholder={'Создайте свой уникальный пост'} validate={[maxLength20, Required]} component={TextAreaForm}></Field>
            </div>
            <div className={styles.buttonContainer}>
                <button type={"submit"} onSubmit={props.onSubmit} className={styles.button}>Оптравить</button>
            </div>
        </form>
    )
}

const ReduxPostForm = reduxForm({form: 'profileNewPost'})(NewPostForm);

export default MyPosts;