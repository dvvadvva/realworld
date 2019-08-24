import { articles } from './dataAPI'
import { LOAD_ARTICLES, SET_ACT_PAGE, TEST_ACT } from '../asets/const/const';

export const loadArticles = () => (dispatch, getState) => {
    articles.list(getState().articlesData.limit, getState().articlesData.offset)
        .then(e => {
            //console.log(e.data);
            dispatch(setArticles(e.data.articles, e.data.articlesCount))
        })
        .catch((e) => { })
}

export const setArticles = (articles, articlesCount = 0) => ({ type: LOAD_ARTICLES, articles: articles, articlesCount: articlesCount })

export const test = () => ({ type: TEST_ACT})

export const setActivePage = (numberPage) => ( { type: SET_ACT_PAGE, numberPage: numberPage })