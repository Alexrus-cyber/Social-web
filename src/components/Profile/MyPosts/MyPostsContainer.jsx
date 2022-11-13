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
