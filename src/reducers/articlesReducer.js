import {
  LOAD_ARTICLES,
  SET_ACT_PAGE,
  SET_FAVOR,
  SET_FAVORCOUNT
} from "../asets/const/const";
export const GOTO_NEXT_PAGE = "articelsReducer # goto next page";
export const GOTO_PREV_PAGE = "articelsReducer # goto prev page";
export const GOTO_NEXT_PARTPAGE = "articelsReducer # goto next part page";
export const GOTO_PREV_PARTPAGE = "articelsReducer # goto prev part page";

let initialize = {
  articles: [],
  limit: 10,
  sizePageList: 15,
  allCount: 0,
  allPageCount: 0,
  offset: 0,
  currentPage: 1,
  firstPageInList: 1
};

export let articlesReducer = (state = initialize, action) => {
  switch (action.type) {
    case LOAD_ARTICLES: {
      let newAllCount =
        action.articlesCount === 0
          ? action.articles.indexOf()
          : action.articlesCount;
      return {
        ...state,
        articles: action.articles,
        allCount: newAllCount,
        allPageCount: Math.ceil(newAllCount / state.limit)
      };
    }
    case GOTO_NEXT_PARTPAGE: {
      let newOffset =
        (state.firstPageInList + state.sizePageList - 1) * state.limit;
      if (newOffset >= state.allCount) {
        return { ...state };
      } else {
        let newFirstPage = state.firstPageInList + state.sizePageList;
        return {
          ...state,
          offset: newOffset,
          currentPage: newFirstPage,
          firstPageInList: newFirstPage
        };
      }
    }
    case GOTO_NEXT_PAGE: {
      let newPageNumber =
        state.currentPage * state.limit < state.allCount
          ? state.currentPage + 1
          : state.currentPage;
      return {
        ...state,
        offset: (newPageNumber - 1) * state.limit,
        currentPage: newPageNumber
      };
    }
    case GOTO_PREV_PAGE: {
      let newPageNumber =
        state.currentPage > state.firstPageInList
          ? state.currentPage - 1
          : state.currentPage;
      return {
        ...state,
        offset: (newPageNumber - 1) * state.limit,
        currentPage: newPageNumber
      };
    }
    case GOTO_PREV_PARTPAGE: {
        let newOffset =
        (state.firstPageInList - state.sizePageList - 1) * state.limit;
      if (newOffset >= 0) {
        let newFirstPage = state.firstPageInList - state.sizePageList;
        return {
          ...state,
          offset: newOffset,
          currentPage: newFirstPage,
          firstPageInList: newFirstPage
        };        
      } else {
        return { ...state };
      }
    }
    case SET_ACT_PAGE: {
      return {
        ...state,
        offset: (action.numberPage - 1) * state.limit,
        currentPage: action.numberPage
      };
    }
    case SET_FAVOR: {
      return {
        ...state,
        articles: state.articles.map(e => ({
          ...e,
          favorited: e.slug === action.slug ? !e.favorited : e.favorited
        }))
      };
    }
    case SET_FAVORCOUNT: {
      return {
        ...state,
        articles: state.articles.map(e => ({
          ...e,
          favoritesCount:
            e.slug === action.slug ? action.favCount : e.favoritesCount
        }))
      };
    }

    default: {
      return state;
    }
  }
};
