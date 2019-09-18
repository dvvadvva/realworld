import { LOAD_ONE_ARTICLE } from "../asets/const/const";
import { articles } from "./dataAPI";

export let getOneArticle = slug => async dispatch => {
  let e = await articles.article(slug);
  dispatch(loadOneArticle(e.data.article));
};

export const loadOneArticle = articleData => ({
  type: LOAD_ONE_ARTICLE,
  articleData: articleData
});
