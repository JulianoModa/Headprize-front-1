import { SET_USER, SET_MOBILE, LOGOUT } from '../actions/actionTypes';
import { USUARIO_LOCAL_STIRNG } from "../constant.js";

const initialState = localStorage.getItem(USUARIO_LOCAL_STIRNG) == null ? {
  user: {},
  role: 0,
  logged: false,
  mobile: false
} : {
  user: JSON.parse(localStorage.getItem(USUARIO_LOCAL_STIRNG)),
  role: JSON.parse(localStorage.getItem(USUARIO_LOCAL_STIRNG)).tipo,
  logged: true,
  mobile: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        role: action.user.tipo,
        logged: true,
        user: action.user
      };
    case LOGOUT:
        return {
          ...state,
          user: {},
          role: 0,
          logged: false,
        };
    default:
      return state;
  }
}
export const mobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOBILE:
      return {
        ...state,
        mobile: action.mobile
      };
    default:
      return state;
  }
}
