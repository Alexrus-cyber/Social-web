import {updateObjectInArray} from "../../Utils/ObjectHelper";
import {PhotosType, PostType, ProfileType} from "../../Types/Types";
import {ThunkAction} from "redux-thunk";
import {AppThunk, InferActionsTypes, RootState} from "../ReduxStore";
import {profileAPI} from "../../API/ProfileAPI";
import {ResultCodesEnum} from "../../API/API";

//types
export type InitialProfileStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actionsCreators>;

//initialState
let initialState = {
    posts: [] as Array<PostType>,
    countPosts: 0,
    profile: {} as ProfileType,
    isLoading: true,
    status: "",
}


export const profileReducer = (state = initialState, action: ActionsTypes):InitialProfileStateType => {
    switch (action.type) {
        case "AddPost" : {
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
        case "PostCount": {
            return {
                ...state,
                countPosts: action.countPost,
            };
        }
        case "AddLike" : {
            return {
                ...state,
                posts: updateObjectInArray(state.posts, action.newId, "id", {likesCount: action.like})
            };
        }
        case "SetUserProfile": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "GetLoading": {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case "SetUserStatus": {
            return {
                ...state,
                status: action.status
            }
        }
        case "DeletePost": {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case "SetImage": {
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

export const actionsCreators = {
    addPost : (counts: number, likes: number, newPostText: string) => {
        return {
            type: "AddPost",
            idCount: counts,
            likes: likes,
            newPostText
        }as const
    },
    Counter : (counts: number) => {
        return {
            type: "PostCount",
            countPost: counts
        }as const
    },


    addLike : (counts:number, newId: number)=> {
        return {
            type: "AddLike",
            like: counts,
            newId: newId,
        }as const
    },

    setUserProfile: (profile: ProfileType) => ({
        type: "SetUserProfile",
        profile
    } as const),
    getLoading : (isLoading: boolean) => {
        return {
            type: "GetLoading",
            isLoading
        }as const
    },
    setUserStatus : (status: string) => {
        return {
            type: "SetUserStatus",
            status
        }as const
    },

    deletePost : (postId: number) => {
        return {
            type: "DeletePost",
            postId
        }as const
    },


    savePhotoSuccess : (file: PhotosType) => {
        return {
            type: "SetImage",
            file,
        }as const
    }
}


///thunks
export let addPostThunk = (counts: number, likes: number, newPostText: string): ThunkAction<void, RootState, unknown, ActionsTypes> => {
    return (dispatch) => {
        dispatch(actionsCreators.addPost(counts, likes, newPostText))
        dispatch(actionsCreators.Counter(counts))
    }
}

export let getProfile = (id: number, isLoading: boolean): AppThunk<ActionsTypes> => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(id)
        dispatch(actionsCreators.setUserProfile(data));
        dispatch(actionsCreators.getLoading(isLoading))
    }
}

export let getStatus = (id: number): AppThunk<ActionsTypes>  => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(id)
        dispatch(actionsCreators.setUserStatus(data));
    }
}

export let updateStatus = (status: string):AppThunk<ActionsTypes>  => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(actionsCreators.setUserStatus(status));
        }
    }
}
export let savePhoto = (file: PhotosType): AppThunk<ActionsTypes>  => {
    return async (dispatch) => {
        let data = await profileAPI.savePhoto(file)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(actionsCreators.savePhotoSuccess(data.data.photos));
        }
    }
}

export let setProfile = (profile: ProfileType): AppThunk<ActionsTypes> => {
    return async (dispatch, getState) => {
        const userId = getState().auth.id;
        let data = await profileAPI.updateProfile(profile)

        if (data.resultCode === 0) {
            await dispatch(getProfile(userId, false));
        }
    }
}