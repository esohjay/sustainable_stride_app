import React, {
  useContext,
  useReducer,
  createContext,
  useState,
  useEffect,
} from "react";

import { authReducer } from "../reducers/auth_reducer";

const AuthContext = createContext();

const initialState = {
  loading: false,
  success: false,
  profileCreated: false,
  profileFetched: false,
  error: null,
  profileError: null,
  user: null,
  profile: null,
  isAuthenticated: false,
  isSignOut: false,
  updated: false,
  updating: false,
  deleted: false,
  deleting: false,
};
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
