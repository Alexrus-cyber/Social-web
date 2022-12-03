// @ts-ignore
import {profileAPI} from "../../API/API";
// @ts-ignore
import {updateObjectInArray} from "../../Utils/ObjectHelper";
import {PhotosType, PostType, ProfileType} from "../../Types/Types";
import {ThunkAction} from "redux-thunk";
// @ts-ignore
import {RootState} from "../ReduxStore.tsx";
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
export type InitialStateType = typeof initialState;
type ActionsType = AddPostType | CounterType | AddLikeType | SetUserProfileType | GetLoadingType | SetUserStatusType |DeletePostType  | SavePhotoSuccessType;

type AddPostType = {
    type: typeof AddPost;
    idCount: number,
    likes: number,
    newPostText: string,
}

type CounterType = {
    type: typeof PostCount;
    countPost: number;
}
type AddLikeType = {
    type: typeof AddLike,
    like: number,
    newId: number,
}
type SetUserProfileType = {
    type: typeof SetUserProfile,
    profile: ProfileType
}
type GetLoadingType = {
    type: typeof GetLoading;
    isLoading: boolean;
}
type SetUserStatusType = {
    type: typeof SetUserStatus;
    status: string,
}

type DeletePostType = {
    type: typeof DeletePost;
    postId: number;
}
type SavePhotoSuccessType = {
    type: typeof SetImage;
    file: PhotosType
}


//initialState
let initialState = {
    posts: [] as Array<PostType>,
    countPosts: 0,
    profile: null as ProfileType | null,
    isLoading: true,
    status: "",
}


export const profileReducer = (state = initialState, action: ActionsType):InitialStateType => {
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


export const addPost = (counts: number, likes: number, newPostText: string): AddPostType => {
    return {
        type: AddPost,
        idCount: counts,
        likes: likes,
        newPostText
    }
}
export const Counter = (counts: number): CounterType => {
    return {
        type: PostCount,
        countPost: counts
    }
}


export const addLike = (counts:number, newId: number): AddLikeType => {
    return {
        type: AddLike,
        like: counts,
        newId: newId,
    }
}

export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
    type: SetUserProfile,
    profile
})


export const getLoading = (isLoading: boolean): GetLoadingType => {
    return {
        type: GetLoading,
        isLoading
    }
}


export const setUserStatus = (status: string): SetUserStatusType => {
    return {
        type: SetUserStatus,
        status
    }
}

export const deletePost = (postId: number): DeletePostType => {
    return {
        type: DeletePost,
        postId
    }
}


export const savePhotoSuccess = (file: PhotosType):SavePhotoSuccessType => {
    return {
        type: SetImage,
        file,
    }
}

///thunks
export let addPostThunk = (counts: number, likes: number, newPostText: string): ThunkAction<void, RootState, unknown, ActionsType> => {
    return (dispatch) => {
        dispatch(addPost(counts, likes, newPostText))
        dispatch(Counter(counts))
    }
}

export let getProfile = (id: number, isLoading: boolean): ThunkAction<Promise<void>, RootState, unknown, ActionsType> => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(id)
        dispatch(setUserProfile(data));
        dispatch(getLoading(isLoading))
    }
}

export let getStatus = (id: number): ThunkAction<Promise<void>, RootState, unknown, ActionsType> => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(id)
        dispatch(setUserStatus(data));
    }
}

export let updateStatus = (status: string): ThunkAction<Promise<void>, RootState, unknown, ActionsType> => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    }
}
export let savePhoto = (file: PhotosType): ThunkAction<Promise<void>, RootState, unknown, ActionsType> => {
    return async (dispatch) => {
        let data = await profileAPI.savePhoto(file)
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos));
        }
    }
}

export let setProfile = (profile: ProfileType): ThunkAction<Promise<void>, RootState, unknown, ActionsType> => {
    return async (dispatch, getState: any) => {
        const userId = getState().auth.id;
        let data = await profileAPI.updateProfile(profile)

        if (data.resultCode === 0) {
            await dispatch(getProfile(userId, false));
        }
    }
}