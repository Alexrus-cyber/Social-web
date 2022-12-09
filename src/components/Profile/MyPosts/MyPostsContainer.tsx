// @ts-ignore
import MyPosts from "./MyPosts";
import {actionsCreators, addPostThunk} from "../../../Redux/Reducers/ProfileReducer";
import {useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../../Hooks/Hooks";

type PropsType = {
    myId: number;
    id: string | undefined
}

const MyPostsContainerFunc = (props: PropsType) => {
    let dispatch = useAppDispatch()
    let {countPosts, posts ,profile} = useAppSelector(state => state.profilePage)

    const AddPost = useCallback((counts: number, likes: number, newPostText: string) => { ///Изменение страцницы
        dispatch(addPostThunk(counts, likes, newPostText)); ///Используем thunk, выполняеться асинхронно. Появляеться промежуточный уровень между store и reducer.
    }, [dispatch])

    const AddLike = useCallback((counts: number, newId: number) => { ///Изменение страцницы
        dispatch(actionsCreators.addLike(counts,newId)); ///Используем thunk, выполняеться асинхронно. Появляеться промежуточный уровень между store и reducer.
    }, [dispatch])

    return (
        <MyPosts myId = {props.myId} id = {props.id} counts={countPosts} profile = {profile} postData = {posts} addPost = {AddPost} addLike = {AddLike} />
    )
}


export default MyPostsContainerFunc;
