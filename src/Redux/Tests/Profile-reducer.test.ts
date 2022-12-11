
import {actionsCreators, profileReducer} from "../Reducers/ProfileReducer";
import {PostType, ProfileType} from "../../Types/Types";
type stateType ={
    posts: Array<PostType>,
    countPosts: number,
    profile:ProfileType,
    isLoading: boolean,
    status: string,
}
let state: stateType = {
    posts: [
        {id: 1, message: "Hello world!", likesCount: 5}
    ],
    countPosts: 0,
    profile: {} as ProfileType,
    isLoading: true,
    status: "",
}
test('length of post should be incremented', () => {
    // 1. Исходные данные для теста
    let action = actionsCreators.addPost(5, 5, "Hello world!");
    // 2. action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
})

test('after deleting of messages should be decrement', () => {
    // 1. Исходные данные для теста
    let action = actionsCreators.deletePost(1);
    // 2. action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.posts.length).toBe(0);
})

test('message correct', () => {
    // 1. Исходные данные для теста
    let action = actionsCreators.addPost(5, 5, "Hello world!");
    // 2. action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.posts[0].message).toBe("Hello world!");
})
test('after deleting shouldn`t be decrement if id is incorrect', () => {
    // 1. Исходные данные для теста
    let action = actionsCreators.deletePost(1000);
    // 2. action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.posts.length).toBe(1);
})


