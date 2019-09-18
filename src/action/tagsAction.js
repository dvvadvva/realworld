import { tags } from "./dataAPI";
import { LOAD_TAGS } from "../asets/const/const";

export const loadTags = () => async (dispatch, getState) => {
  let e = await tags.listTags();
  dispatch(setTags(e.data.tags));
};

export const setTags = tags => ({ type: LOAD_TAGS, listTags: tags });