import {
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_UP_FAIL,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../constants/auth_constants";

export const authReducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        success: true,
        isAuthenticated: true,
        user: action.payload,
      };
    case SIGN_IN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case SIGN_UP_REQUEST:
      return { ...state, loading: true };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        success: true,
        isAuthenticated: true,
        user: action.payload,
      };
    case SIGN_UP_FAIL:
      return { ...state, loading: false, error: action.payload };
    case SIGN_OUT:
      return { ...state, success: true, isAuthenticated: false, user: null };
    default:
      return state;
  }
};
