import {Action} from "redux";
// @ts-ignore
import {profileReducer} from "./Reducers/ProfileReducer.ts";
// @ts-ignore
import {dialogsReducer} from "./Reducers/DialogsReducer.ts";
// @ts-ignore
import findUsersReducer from "./Reducers/FindUsersReducer.ts";
// @ts-ignore
import {authReducer} from "./Reducers/AuthReducer.ts";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from "redux-form";
// @ts-ignore
import {appReducer} from './Reducers/AppReducer.ts';
import {configureStore, MiddlewareArray} from "@reduxjs/toolkit";
import logger from 'redux-logger'

const store = configureStore({
    reducer: {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        findUserPage: findUsersReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer,
    },
    middleware: new MiddlewareArray().concat(thunkMiddleware, logger),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: any) => any}> = ReturnType<PropertiesTypes<T>>

// @ts-ignore
window.store = store;
export default store;