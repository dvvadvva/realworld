import { loginReducer } from './loginReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';


let reducer = combineReducers(
    {
        authData: loginReducer,
        form: formReducer,
    })

export let store = createStore(reducer, applyMiddleware(thunk))