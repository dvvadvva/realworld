import { auth } from './dataAPI'
import { SET_AUTH } from '../asets/const/const';

export let onLogin = (payLoad) => (dispatch) => { }

export let reqAuth = () => (dispatch) => {
    auth.req()
        .then((e) => {
            dispatch(setAuth(true, { username: e.data.user.username, email: e.data.user.email }
            ))
        })
        .catch((e) => { dispatch(setAuth(false, { username: '', email: '' })) })
}

export const setAuth = (valAuth, payLoad = undefined) => ({ type: SET_AUTH, isAuth: valAuth, payLoad })

export const loginAction = (payLoad) => (dispatch) => {
    auth.login(payLoad.username, payLoad.password)
        .then(e => {
            localStorage.setItem('jwt', e.data.user.token);
            dispatch(setAuth(true, { username: e.data.user.username, email: e.data.user.email }))
        })
        .catch((e)=>{})
}
