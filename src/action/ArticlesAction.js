import { articles } from "./dataAPI";
import {
  LOAD_ARTICLES,
  SET_ACT_PAGE,
  TEST_ACT,
  SET_FAVOR,
  SET_FAVORCOUNT
} from "../asets/const/const";

export const loadArticles = () => async (dispatch, getState) => {
  let e = await articles.list(
    getState().articlesData.limit,
    getState().articlesData.offset
  );
  dispatch(setArticles(e.data.articles, e.data.articlesCount));
};

export const followArticle = slug => async (dispatch, getState) => {
  let resFind = getState().articlesData.articles.filter(e => e.slug === slug);
  if (resFind[0].favorited) {
    let e = await articles.unfavor(slug);
    dispatch(setFavorCount(slug, e.data.article.favoritesCount));
  } else {
    let e = await articles.favor(slug);
    dispatch(setFavorCount(slug, e.data.article.favoritesCount));
  }
  dispatch(setFavor(slug));
};

export const setArticles = (articles, articlesCount = 0) => ({
  type: LOAD_ARTICLES,
  articles: articles,
  articlesCount: articlesCount
});

export const test = () => ({ type: TEST_ACT });

export const setActivePage = numberPage => ({
  type: SET_ACT_PAGE,
  numberPage: numberPage
});

export const setFavor = slug => ({ type: SET_FAVOR, slug: slug });

export const setFavorCount = (slug, favCount) => ({
  type: SET_FAVORCOUNT,
  slug: slug,
  favCount: favCount
});
