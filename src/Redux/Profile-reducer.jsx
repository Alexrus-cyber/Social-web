import {profileAPI} from "../API/API";

const AddPost = 'addPost';
const PostCount = 'postCount';
const AddLike = 'addLike';
const UpdateText = 'updateText';
const SetUserProfile = 'SetUserProfile'
const GetLoading = 'GetLoading'
const SetUserStatus = 'SetUserStatus'

let initialState = {
    posts: [],
    countPosts: 0,
    newPostText: '',
    profile: null,
    isLoading: true,
    status: "",
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
                profile: action.profile
            }
        }
        case GetLoading: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case SetUserStatus: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }

}
/// actionCreators
export const addPost = (counts, likes) => {
    return {
        type: AddPost,
        idCount: counts,
        likes: likes
    }
}
export const Counter = (counts) => {
    return {
        type: PostCount,
        countPost: counts
    }
}
export const updateText = (postsValue) => {
    return {
        type: UpdateText,
        newText: postsValue
    }
}
export const addLike = (counts, newId) => {
    return {
        type: AddLike,
        like: counts,
        newId: newId,
    }
}
export const setUserProfile = (profile) =>({
    type: SetUserProfile,
    profile
})
export const getLoading = (isLoading) =>{
    return {
        type: GetLoading,
        isLoading
    }
}
export const setUserStatus = (status) => {
    return {
        type: SetUserStatus,
        status
    }
}

///thunks
export let getProfile = (id) => {
    return (dispatch) => {
        profileAPI.getProfile(id).then(data => {
            dispatch(setUserProfile(data));

        })
    }
}

export let getStatus = (id) => {
    return (dispatch) => {
        profileAPI.getStatus(id).then(data => {
            dispatch(setUserStatus(data))
        })
}
}

export let updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0){
                dispatch(setUserStatus(status));
            }
        })
    }
}