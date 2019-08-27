import { articles } from './dataAPI'
import { LOAD_ARTICLES, SET_ACT_PAGE, TEST_ACT, SET_FAVOR, SET_FAVORCOUNT } from '../asets/const/const';

export const loadArticles = () => (dispatch, getState) => {
    articles.list(getState().articlesData.limit, getState().articlesData.offset)
        .then(e => {
            dispatch(setArticles(e.data.articles, e.data.articlesCount))
        })
        .catch((e) => { })
}

export const followArticle = (slug) => (dispatch, getState) => {
    let resFind = getState().articlesData.articles.filter((e) => { return (e.slug === slug) })
    if (resFind[0].favorited) {
        articles.unfavor(slug).then((e) => { dispatch(setFavorCount(slug, e.data.article.favoritesCount)) })
    } else {
        articles.favor(slug).then((e) => { dispatch(setFavorCount(slug, e.data.article.favoritesCount)) })
    }
    dispatch(setFavor(slug));
}

export const setArticles = (articles, articlesCount = 0) => ({ type: LOAD_ARTICLES, articles: articles, articlesCount: articlesCount })

export const test = () => ({ type: TEST_ACT })

export const setActivePage = (numberPage) => ({ type: SET_ACT_PAGE, numberPage: numberPage })

export const setFavor = (slug) => ({ type: SET_FAVOR, slug: slug })

export const setFavorCount = (slug, favCount) => ({ type: SET_FAVORCOUNT, slug: slug, favCount: favCount })