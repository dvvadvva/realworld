import { loginReducer } from './loginReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';
import { articlesReducer } from './articlesReducer';
import { tagsReducer } from './popularTagsReducer';
import { oneArticleReducer } from './oneArticleReducer';


let reducer = combineReducers(
    {
        authData: loginReducer,
        articlesData: articlesReducer,
        form: formReducer,
        tags: tagsReducer,
        article: oneArticleReducer
    })

export let store = createStore(reducer, applyMiddleware(thunk))