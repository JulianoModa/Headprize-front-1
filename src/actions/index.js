import { SET_USER, SET_MOBILE, LOGOUT } from './actionTypes';

export const setUser = (user) => ({
  type: SET_USER,
  user: user
});

export const Logout = () => ({
  type: LOGOUT
});


export const setMobile = (mobile) => ({
  type: SET_MOBILE,
  mobile
});
