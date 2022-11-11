import {addLikeCreator, addPostActionCreator, Counter, updateTextActionCreator} from "../../../Redux/Profile-reducer";
import MyPosts from "./MyPosts";




const MyPostsContainer = (props) => {
    /// Переменные (Данные из ProfileReducer)
    let state = props.store.getState().profilePage;
    let xray = state.countPosts;
    let counts = state.countPosts;
    let newPostText = state.newPostText;
    let postData = state.posts;

    /// Методы (action.creators из ProfileReducer)
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



   return (
       <MyPosts addLike = {addLike} counts = {counts} xray = {xray} newPostText = {newPostText} postData = {postData} store = {props.store} addPost = {addPost} counterPosts = {counterPosts} onPostChange = {onPostChange}/>
   )
}

export default  MyPostsContainer;