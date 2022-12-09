// @ts-ignore
import {profileAPI} from "../../API/API";
// @ts-ignore
import {updateObjectInArray} from "../../Utils/ObjectHelper";
import {PhotosType, PostType, ProfileType} from "../../Types/Types";
import {ThunkAction} from "redux-thunk";
// @ts-ignore
import {InferActionsTypes, RootState} from "../ReduxStore.tsx";
//action.types
const AddPost = 'addPost';
const PostCount = 'postCount';
const AddLike = 'addLike';
const SetUserProfile = 'SetUserProfile'
const GetLoading = 'GetLoading'
const SetUserStatus = 'SetUserStatus'
const DeletePost = 'DeletePost'
const SetImage = 'SetImage'
//types
export type InitialProfileStateType = typeof initialState;


//initialState
let initialState = {
    posts: [] as Array<PostType>,
    countPosts: 0,
    profile: null as ProfileType | null,
    isLoading: true,
    status: "",
}


export const profileReducer = (state = initialState, action: ActionsTypes):InitialProfileStateType => {
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
                // @ts-ignore
                profile: {...state.profile, photos: action.file},
            }
        }
        default:
            return state;
    }

}
/// actionCreators
export type ActionsTypes = InferActionsTypes<typeof actionsCreators>;
export const actionsCreators = {
    addPost : (counts: number, likes: number, newPostText: string) => {
        return {
            type: AddPost,
            idCount: counts,
            likes: likes,
            newPostText
        }
    },
    Counter : (counts: number) => {
        return {
            type: PostCount,
            countPost: counts
        }
    },


    addLike : (counts:number, newId: number)=> {
        return {
            type: AddLike,
            like: counts,
            newId: newId,
        }
    },

    setUserProfile: (profile: ProfileType) => ({
        type: SetUserProfile,
        profile
    }),
    getLoading : (isLoading: boolean) => {
        return {
            type: GetLoading,
            isLoading
        }
    },
    setUserStatus : (status: string) => {
        return {
            type: SetUserStatus,
            status
        }
    },

    deletePost : (postId: number) => {
        return {
            type: DeletePost,
            postId
        }
    },


    savePhotoSuccess : (file: PhotosType) => {
        return {
            type: SetImage,
            file,
        }
    }
}


///thunks
export let addPostThunk = (counts: number, likes: number, newPostText: string): ThunkAction<void, RootState, unknown, ActionsTypes> => {
    return (dispatch) => {
        dispatch(actionsCreators.addPost(counts, likes, newPostText))
        dispatch(actionsCreators.Counter(counts))
    }
}

export let getProfile = (id: number, isLoading: boolean): ThunkAction<Promise<void>, RootState, unknown, ActionsTypes> => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(id)
        dispatch(actionsCreators.setUserProfile(data));
        dispatch(actionsCreators.getLoading(isLoading))
    }
}

export let getStatus = (id: number): ThunkAction<Promise<void>, RootState, unknown, ActionsTypes> => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(id)
        dispatch(actionsCreators.setUserStatus(data));
    }
}

export let updateStatus = (status: string): ThunkAction<Promise<void>, RootState, unknown, ActionsTypes> => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(actionsCreators.setUserStatus(status));
        }
    }
}
export let savePhoto = (file: PhotosType): ThunkAction<Promise<void>, RootState, unknown, ActionsTypes> => {
    return async (dispatch) => {
        let data = await profileAPI.savePhoto(file)
        if (data.resultCode === 0) {
            dispatch(actionsCreators.savePhotoSuccess(data.data.photos));
        }
    }
}

export let setProfile = (profile: ProfileType): ThunkAction<Promise<void>, RootState, unknown, ActionsTypes> => {
    return async (dispatch, getState) => {
        const userId = getState().auth.id;
        let data = await profileAPI.updateProfile(profile)

        if (data.resultCode === 0) {
            await dispatch(getProfile(userId, false));
        }
    }
}