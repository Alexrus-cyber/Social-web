import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reducer";
import findUsersReducer from "./FindUsers-reducer";
import {authReducer} from "./Auth-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    findUserPage: findUsersReducer,
    auth: authReducer,
});
let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store;
export default store;