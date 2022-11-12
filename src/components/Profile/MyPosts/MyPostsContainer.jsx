import {addLikeCreator, addPostActionCreator, Counter, updateTextActionCreator} from "../../../Redux/Profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        xray: state.profilePage.countPosts,
        counts: state.profilePage.countPosts,
        newPostText: state.profilePage.newPostText,
        postData: state.profilePage.posts,
        likes: state.profilePage.likes,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (counts, likes) => {
            dispatch(addPostActionCreator(counts, likes))
        },
        counterPosts: (counts) => {
            dispatch(Counter(counts))
        },
        onPostChange: (text) => {
            dispatch(updateTextActionCreator(text))
        },
        addLike: (like, id) => {
            dispatch(addLikeCreator(like, id))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

/*const MyPostsContainer = (props) => {
    /// Переменные (Данные из ProfileReducer)
    let state = store.getState().profilePage;
    let xray = state.countPosts;
    let counts = state.countPosts;
    let newPostText = state.newPostText;
    let postData = state.posts;

    /// Методы (action.creators из ProfileReducer)
    let addPost = (counts, likes) => {
        let action = addPostActionCreator(counts, likes)
        store.dispatch(action)
    }
    let counterPosts = (counts) => {
        let action = Counter(counts)
        store.dispatch(action)
    }
    let onPostChange = (text) => {
        let action = updateTextActionCreator(text);
        store.dispatch(action)
    }
    let addLike = (like) => {
        let action = addLikeCreator(like)
        store.dispatch(action)
    }



   return (
       <MyPosts addLike = {addLike} counts = {counts} xray = {xray} newPostText = {newPostText} postData = {postData} addPost = {addPost} counterPosts = {counterPosts} onPostChange = {onPostChange}/>
   )
}*/