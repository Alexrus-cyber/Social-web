import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reducer";
import findUsersReducer from "./FindUsers-reducer";
import {authReducer} from "./Auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./App-Reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    findUserPage: findUsersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});
let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store;
export default store;