import {applyMiddleware, combineReducers, compose, createStore} from "redux";
// @ts-ignore
import {profileReducer} from "./Reducers/ProfileReducer.ts";
// @ts-ignore
import {dialogsReducer} from "./Reducers/DialogsReducer.ts";
// @ts-ignore
import findUsersReducer from "./Reducers/FindUsersReducer.ts";
// @ts-ignore
import {authReducer} from "./Reducers/AuthReducer.ts";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";
// @ts-ignore
import {appReducer} from './Reducers/AppReducer.ts';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    findUserPage: findUsersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

// @ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)))
  ;
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
// @ts-ignore
window.store = store;
export default store;