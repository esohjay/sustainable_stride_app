import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
  SIGN_UP_FAIL,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_OUT,
  SIGN_OUT_FAIL,
  CREATE_PROFILE_FAIL,
  CREATE_PROFILE_REQUEST,
  CREATE_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  DELETE_PROFILE_FAIL,
  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE_SUCCESS,
} from "../constants/auth_constants";

import { useAuthContext } from "../providers/AuthProvider";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../lib/firebaseConfig";

export const useAuthActions = () => {
  const { dispatch } = useAuthContext();
  const setUser = (user) => {
    dispatch({ type: SIGN_IN_SUCCESS, payload: user });
  };

  const handleError = (error) => {
    console.log(error);
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    return message;
  };
  const createProfile = async (fullName) => {
    console.log(fullName);
    try {
      dispatch({ type: CREATE_PROFILE_REQUEST });
      const token = await auth?.currentUser?.getIdToken();
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/user`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(fullName),
        }
      );
      const data = await response.json();
      // const data = await response;
      dispatch({ type: CREATE_PROFILE_SUCCESS, payload: data });
    } catch (error) {
      const message = handleError(error);
      console.log(error);
      dispatch({ type: CREATE_PROFILE_FAIL, payload: message });
    }
  };
  const getProfile = async () => {
    try {
      dispatch({ type: GET_PROFILE_REQUEST });
      const token = await auth?.currentUser?.getIdToken();
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/user`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      dispatch({ type: GET_PROFILE_SUCCESS, payload: data });
    } catch (error) {
      const message = handleError(error);
      dispatch({ type: GET_PROFILE_FAIL, payload: message });
    }
  };
  const updateProfile = async (userData) => {
    try {
      dispatch({ type: UPDATE_PROFILE_REQUEST });
      const token = await auth?.currentUser?.getIdToken();
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/user/edit`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(userData),
        }
      );
      const data = await response.json();
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
    } catch (error) {
      const message = handleError(error);
      dispatch({ type: UPDATE_PROFILE_FAIL, payload: message });
    }
  };
  const updatePassword = async (password) => {
    try {
      dispatch({ type: UPDATE_PROFILE_REQUEST });
      const token = await auth?.currentUser?.getIdToken();
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/user/edit-password`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(password),
        }
      );
      const data = await response.json();
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
    } catch (error) {
      const message = handleError(error);
      dispatch({ type: UPDATE_PROFILE_FAIL, payload: message });
    }
  };
  const delteProfile = async () => {
    try {
      dispatch({ type: UPDATE_PROFILE_REQUEST });
      const token = await auth?.currentUser?.getIdToken();
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/user`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({}),
        }
      );
      const data = await response.json();
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
    } catch (error) {
      const message = handleError(error);
      dispatch({ type: UPDATE_PROFILE_FAIL, payload: message });
    }
  };

  const signUp = async ({ email, password, fullName }) => {
    dispatch({ type: SIGN_UP_REQUEST });

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: {
          id: user.uid,
          email: user.email,
          name: user.displayName,
          phone: user.phoneNumber,
        },
      });

      await createProfile({ fullName });
    } catch (error) {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = handleError(error);
      dispatch({ type: SIGN_UP_FAIL, payload: errorMessage });
    }
  };

  const signIn = async ({ email, password }) => {
    dispatch({ type: SIGN_IN_REQUEST });
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        dispatch({
          type: SIGN_IN_SUCCESS,
          payload: {
            id: user.uid,
            email: user.email,
            name: user.displayName,
            phone: user.phoneNumber,
          },
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        dispatch({ type: SIGN_IN_FAIL, payload: errorMessage });
        // ..
      });
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch({ type: SIGN_OUT });
      })
      .catch((error) => {
        // An error happened.
        dispatch({ type: SIGN_OUT_FAIL, payload: error });
      });
  };

  return {
    getProfile,
    setUser,
    signIn,
    signUp,
    logOut,
    createProfile,
    delteProfile,
    updatePassword,
    updateProfile,
  };
};
