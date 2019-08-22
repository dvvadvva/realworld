import { LOAD_ARTICLES, SET_ACT_PAGE } from "../asets/const/const";

let initialize  = {
    articles: [],
    limit: 4,
    allCount: 0,
    offset: 0,
    currentPage: 1
};

export let articlesReducer = (state=initialize, action)=>{
    switch (action.type){
        case LOAD_ARTICLES: {
            return {...state, articles: action.articles, allCount: (action.articlesCount===0 ? action.articles.indexOf() : action.articlesCount)}
        }
        case SET_ACT_PAGE: {
            return {...state, offset: (action.numberPage-1)*state.limit, currentPage: action.numberPage}
        }
        default: {
            return state
        }
    }
}