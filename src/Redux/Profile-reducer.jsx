const addPost = 'addPost';
const postCount = 'postCount';
const addLike = 'addLike';
const updateText = 'updateText';

let initialState = {
    posts: [
        {id: 1, message: 'Даниил Громыко', likesCount: 1,},
        {id: 2, message: 'Яван Миллер', likesCount: 2,},
        {id: 3, message: 'Андрей Солодышкин', likesCount: 3,},
    ],
    likes: 1,
    countPosts: 3,
    newPostText: '',
}

export const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case addPost : {
            let newPost = {
                id: action.idCount,
                message: stateCopy.newPostText,
                likesCount: action.likes,
            };
            console.log(newPost)
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: '',
            };
        }

        case postCount: {
            return {
                ...state,
                countPosts: action.countPost,
            };
        }


        case addLike : {
            console.log(action.newId);
            console.log(action.like)
            return {
                ...state,
                likes: action.like
            };
        }

        case updateText : {
            return {
                ...state,
                newPostText: action.newText,
            };
        }

        default:
            return state;
    }

}
export let addPostActionCreator = (counts, likes) => {
    return {
        type: addPost,
        idCount: counts,
        likes: likes
    }
}
export let Counter = (counts) => {
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
        like: counts,
        newId: newId,
    }
}