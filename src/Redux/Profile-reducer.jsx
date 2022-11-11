const addPost = 'addPost';
const postCount = 'postCount';
const addLike = 'addLike';
const updateText = 'updateText';

let initialState = {
        posts: [
            {id: 1, message: 'Даниил Громыко' , likesCount : 1,},
            {id: 2, message: 'Яван Миллер' , likesCount : 2, },
            {id: 3, message: 'Андрей Солодышкин',  likesCount : 3,},
        ],
        countPosts: 3 ,
        newPostText: '',
    }

export const profileReducer = (state = initialState, action) => {
    switch (action.type){

        case addPost :
            let newPost = {
            id: action.idCount,
            message: state.newPostText,
            likesCount: action.likes,
        };
            state.posts.unshift(newPost)
            state.newPostText = ''
            console.log(newPost)
            return state;

        case postCount:
            state.countPosts = action.countPost
            return state;

        case addLike :
            let likes = {
                likesCount: action.like,
            }
            state.likesCount = likes;
            console.log(action.newId);
            console.log(likes)
            return  state;

        case updateText :
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }

}
export let addPostActionCreator = (counts, likes) =>{
    return {
        type: addPost,
        idCount: counts,
        likes: likes
    }
}
export let Counter = (counts) =>{
    return {
        type: postCount,
        countPost: counts
    }
}
export let updateTextActionCreator = (postsValue) => {
    return {
        type: updateText,
        newText: postsValue
    }
}
export let addLikeCreator = (counts, newId) => {
    return {
        type: addLike,
        like: counts ,
        newId : newId,
    }
}