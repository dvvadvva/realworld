import { createSelector } from "reselect";

export const getArticlesSimple = (state) => {
    return state.articlesData.articles
}

export const getArticles = createSelector(
    getArticlesSimple,
    (articles) => { return articles }
)