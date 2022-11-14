import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addLike, addPost, Counter, updateText} from "../../../Redux/Profile-reducer";


let mapStateToProps = (state) => {
    return {
        xray: state.profilePage.countPosts,
        counts: state.profilePage.countPosts,
        newPostText: state.profilePage.newPostText,
        postData: state.profilePage.posts,
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    Counter,
    updateText,
    addLike,
})(MyPosts)

export default MyPostsContainer;
