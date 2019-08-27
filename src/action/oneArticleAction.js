import { LOAD_ONE_ARTICLE } from '../asets/const/const';
import { articles} from './dataAPI'

export let getOneArticle = (slug) => (dispatch) => {
    articles.article(slug)
        .then((e) => {
            dispatch(loadOneArticle(e.data.article))
        })
}

export const loadOneArticle = (articleData) => ({ type: LOAD_ONE_ARTICLE, articleData: articleData })

