import MyPosts from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {addLike, addPostThunk} from "../../../Redux/Profile-reducer";
import {useCallback} from "react";


const MyPostsContainerFunc = () => {
    let dispatch = useDispatch()
    let {countPosts, posts ,profile} = useSelector(state => state.profilePage)

    const AddPost = useCallback((counts, likes, newPostText) => { ///Изменение страцницы
        dispatch(addPostThunk(counts, likes, newPostText)); ///Используем thunk, выполняеться асинхронно. Появляеться промежуточный уровень между store и reducer.
    }, [dispatch])

    const AddLike = useCallback((counts, newId) => { ///Изменение страцницы
        dispatch(addLike(counts,newId)); ///Используем thunk, выполняеться асинхронно. Появляеться промежуточный уровень между store и reducer.
    }, [dispatch])

    return (
        <MyPosts counts={countPosts} profile = {profile} postData = {posts} addPost = {AddPost} addLike = {AddLike} />
    )
}


export default MyPostsContainerFunc;
