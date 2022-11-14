const AddPost = 'addPost';
const PostCount = 'postCount';
const AddLike = 'addLike';
const UpdateText = 'updateText';
const SetUserProfile = 'SetUserProfile '

let initialState = {
    posts: [],
    countPosts: 0,
    newPostText: '',
    profile: null,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case AddPost : {
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
        case PostCount: {
            return {
                ...state,
                countPosts: action.countPost,
            };
        }
        case AddLike : {
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
        case UpdateText : {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SetUserProfile: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        default:
            return state;
    }

}

export let addPost = (counts, likes) => {
    return {
        type: AddPost,
        idCount: counts,
        likes: likes
    }
}
export let Counter = (counts) => {
    return {
        type: PostCount,
        countPost: counts
    }
}
export let updateText = (postsValue) => {
    return {
        type: UpdateText,
        newText: postsValue
    }
}
export let addLike = (counts, newId) => {
    return {
        type: AddLike,
        like: counts,
        newId: newId,
    }
}
export let setUserProfile = (profile) =>({
    type: SetUserProfile,
    profile
})