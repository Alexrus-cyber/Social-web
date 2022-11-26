import {profileAPI} from "../API/API";
import {updateObjectInArray} from "../Utils/ObjectHelper";

const AddPost = 'addPost';
const PostCount = 'postCount';
const AddLike = 'addLike';
const SetUserProfile = 'SetUserProfile'
const GetLoading = 'GetLoading'
const SetUserStatus = 'SetUserStatus'
const DeletePost = 'DeletePost'
const SetImage = 'SetImage'
const SetProfile = 'SetProfile'

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
                posts: updateObjectInArray(state.posts, action.newId, "id", {likesCount: action.like})
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
        case DeletePost: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SetImage: {
            return {
                ...state,
                profile: {...state.profile, photos: action.file},
            }
        }
        case SetProfile: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        default:
            return state;
    }

}
/// actionCreators
export const addPost = (counts, likes, newPostText) => {
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
export const setUserProfile = (profile) => ({
    type: SetUserProfile,
    profile
})
export const getLoading = (isLoading) => {
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
export const deletePost = (postId) => {
    return {
        type: DeletePost,
        postId
    }
}
export const savePhotoSuccess = (file) => {
    return {
        type: SetImage,
        file,
    }
}
export const saveProfile = (profile) =>{
    return {
        type: SetProfile,
        profile
    }
}


///thunks
export let addPostThunk = (counts, likes, newPostText) => {
    return (dispatch) => {
        dispatch(addPost(counts, likes, newPostText))
        dispatch(Counter(counts))
    }
}

export let getProfile = (id, isLoading) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(id)
        dispatch(setUserProfile(data));
        dispatch(getLoading(isLoading))
    }
}

export let getStatus = (id) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(id)
        dispatch(setUserStatus(data));
    }
}

export let updateStatus = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    }
}
export let savePhoto = (file) => {
    return async (dispatch) => {
        let data = await profileAPI.savePhoto(file)
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos));
        }
    }
}

export let setProfile = (profile) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId;
        let data = await profileAPI.updateProfile(profile)

        if (data.resultCode === 0) {
            dispatch(getProfile(userId, false));
        }
    }
}