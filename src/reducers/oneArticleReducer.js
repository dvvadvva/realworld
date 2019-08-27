import { LOAD_ONE_ARTICLE } from "../asets/const/const";

let initialize = {
    slug: '',
    title: '',
    body: '',
    tagList: [],
    description: '',
    author: {}
};

export let oneArticleReducer = (state = initialize, action) => {
    switch (action.type) {
        case LOAD_ONE_ARTICLE: {
            return { ...state, body: action.articleData.body, title: action.articleData.title }
        }
        default: {
            return state
        }
    }
}