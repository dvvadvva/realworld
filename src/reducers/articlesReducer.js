
let initialize  = {
    articles: {}
};

export let articlesReducer = (state=initialize, action)=>{
    switch (action.type){
        case 'some event': {
            return state
        }
        default: {
            return state
        }
    }
}