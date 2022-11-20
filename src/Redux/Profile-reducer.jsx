import {profileAPI} from "../API/API";

const AddPost = 'addPost';
const PostCount = 'postCount';
const AddLike = 'addLike';
const SetUserProfile = 'SetUserProfile'
const GetLoading = 'GetLoading'
const SetUserStatus = 'SetUserStatus'

let initialState = {
    posts: [],
    countPosts: 0,
    profile: null,
    isLoading: true,
    status: "",
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case AddPost : {
            let newPost = {
                id: action.idCount,
                message: action.newPostText,
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
export const addPost = (counts, likes,newPostText) => {
    return {
        type: AddPost,
        idCount: counts,
        likes: likes,
        newPostText
    }
}
export const Counter = (counts) => {
    return {
        type: PostCount,
        countPost: counts
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
export let addPostThunk = (counts,likes,newPostText) => {
    return (dispatch) => {
        dispatch(addPost(counts,likes,newPostText))
        dispatch(Counter(counts))
    }
}

export let getProfile = (id, isLoading) => {
    return (dispatch) => {
        profileAPI.getProfile(id).then(data => {
            dispatch(setUserProfile(data));
            dispatch(getLoading(isLoading))
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