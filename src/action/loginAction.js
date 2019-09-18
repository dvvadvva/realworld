import { auth } from "./dataAPI";
import { SET_AUTH } from "../asets/const/const";
/* 
export let onLogin = payLoad => dispatch => {};
 */
export let reqAuth = () => async dispatch => {
  try {
    let e = await auth.req();
    dispatch(
      setAuth(true, {
        username: e.data.user.username,
        email: e.data.user.email
      })
    );
  } catch (err) {
    dispatch(setAuth(false, { username: "", email: "" }));
  }
};

export const setAuth = (valAuth, payLoad = undefined) => ({
  type: SET_AUTH,
  isAuth: valAuth,
  payLoad
});

export const loginAction = payLoad => async dispatch => {
  let e = await auth.login(payLoad.username, payLoad.password);
  localStorage.setItem("jwt", e.data.user.token);
  dispatch(
    setAuth(true, {
      username: e.data.user.username,
      email: e.data.user.email
    })
  );
};
