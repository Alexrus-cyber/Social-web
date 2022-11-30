// @ts-ignore
import {addPost, profileReducer, deletePost} from "../Reducers/ProfileReducer.ts";
type stateType ={
    posts: object
}
let state: stateType = {
    posts: [
        {id: 1, message: "Hello world!", likesCount: 5}
    ]
}
test('length of post should be incremented', () => {
    // 1. Исходные данные для теста
    let action = addPost(5, 5, "Hello world!");
    // 2. action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
})

test('after deleting of messages should be decrement', () => {
    // 1. Исходные данные для теста
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.posts.length).toBe(0);
})

test('message correct', () => {
    // 1. Исходные данные для теста
    let action = addPost(5, 5, "Hello world!");
    // 2. action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.posts[0].message).toBe("Hello world!");
})
test('after deleting shouldn`t be decrement if id is incorrect', () => {
    // 1. Исходные данные для теста
    let action = deletePost(1000);
    // 2. action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.posts.length).toBe(1);
})


