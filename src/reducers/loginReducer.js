import {SET_AUTH} from '../asets/const/const'

let initialize  = {
    payLoad: {email: '', username: ''},
    isAuth: false
};

export let loginReducer = (state=initialize, action)=>{
    switch (action.type){
        case SET_AUTH: {
            return {...state, isAuth: action.isAuth, payLoad: {...action.payLoad}}
        }
        default: {
            return state
        }
    }
}