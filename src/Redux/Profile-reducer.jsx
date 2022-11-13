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
    countPosts: 3,
    newPostText: '',
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case addPost : {
            let newPost = {
                id: action.idCount,
                message: state.newPostText,
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
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.id === action.newId){
                        return {...p, likesCount: action.like}
                    }
                    return p;
                })
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