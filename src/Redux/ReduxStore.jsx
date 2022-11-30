import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./Reducers/ProfileReducer.ts";
import {dialogsReducer} from "./Reducers/DialogsReducer.ts";
import findUsersReducer from "./Reducers/FindUsersReducer.ts";
import {authReducer} from "./Reducers/AuthReducer.ts";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./Reducers/AppReducer.ts";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    findUserPage: findUsersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)));

window.store = store;
export default store;