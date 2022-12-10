import React, {useCallback, useState} from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, Required} from "../../../Utils/Validators/Validators";
import {TextAreaForm} from "../../Common/FormCreators";
import {PostType, ProfileType} from "../../../Types/Types";

type PropsType = {
    myId: number
    id: string | undefined
    counts: number
    profile: ProfileType
    postData: Array<PostType>
    addPost: (counts: number, likes: number, newPostText: string) => void
    addLike: (counts: number, newId: number) => void
}

const MyPosts = React.memo<PropsType>((props) => {
    const [count, setCount] = useState<number>(props.counts);
    const onSubmit = useCallback((formData: PostFormPropsType) => {
        let likes = 0;
        let counts = count + 1;
        setCount(counts);
        props.addPost(counts, likes, formData.newPostText);
    },[count, props])


    let postElements = props.postData.map(el => <Post profile={props.profile} addLike={props.addLike} key={el.id}
                                                      likesCount={el.likesCount}
                                                      message={el.message} id={el.id}/>)

    return (
        <div>
            {Number(props.id) === props.myId ?
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div className={styles.posts}>
                        <div>
                            My posts {props.counts}
                            <div className={styles.container}>
                                <ReduxPostForm onSubmit={onSubmit} newPostText={""}/>
                                <div>
                                    {postElements}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                <div
                    style={{display: "flex", justifyContent: "flex-end", width: 740, marginLeft: 38, marginBottom: 20}}>
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


    );
})
const maxLength20 = maxLength(1000);

type PostFormPropsType = {
    newPostText: string;

}
type PostFormOwn = {
    newPostText: string;

}

const NewPostForm: React.FC<InjectedFormProps<PostFormPropsType, PostFormPropsType> & PostFormOwn> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'newPostText'} placeholder={'Создайте свой уникальный пост'}
                       validate={[maxLength20, Required]} component={TextAreaForm}></Field>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button}>Оптравить</button>
            </div>
        </form>
    )
}

const ReduxPostForm = reduxForm<PostFormPropsType, PostFormOwn>({form: 'profileNewPost'})(NewPostForm);

export default MyPosts;