import { loginReducer } from './loginReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';
import { articlesReducer } from './articlesReducer';
import { tagsReducer } from './popularTagsReducer';


let reducer = combineReducers(
    {
        authData: loginReducer,
        articlesData: articlesReducer,
        form: formReducer,
        tags: tagsReducer
    })

export let store = createStore(reducer, applyMiddleware(thunk))