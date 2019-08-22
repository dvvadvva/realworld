import { tags } from './dataAPI'
import { LOAD_TAGS } from '../asets/const/const';

export const loadTags = () => (dispatch, getState) => {
    tags.listTags()
        .then(e => {
            //console.log(e.tags)
            dispatch(setTags(e.data.tags))
        })
        .catch((e)=>{})
}

export const setTags = (tags) => ({ type: LOAD_TAGS, listTags: tags})