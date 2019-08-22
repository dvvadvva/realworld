import { LOAD_TAGS } from "../asets/const/const";

let initialize  = {
    listTags: []
};

export let tagsReducer = (state=initialize, action)=>{
    
    switch (action.type){
        case LOAD_TAGS: {
            return {...state, listTags: action.listTags}
        }
        default: {
            return state
        }
    }
}