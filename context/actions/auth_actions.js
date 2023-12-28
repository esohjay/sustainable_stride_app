import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
  SIGN_UP_FAIL,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_OUT,
  SIGN_OUT_FAIL,
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
  const signUp = async ({ email, password }) => {
    dispatch({ type: SIGN_UP_REQUEST });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        dispatch({ type: SIGN_UP_SUCCESS, payload: user });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        dispatch({ type: SIGN_UP_FAIL, payload: errorMessage });
        // ..
      });
  };
  const signIn = async ({ email, password }) => {
    dispatch({ type: SIGN_IN_REQUEST });
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        dispatch({ type: SIGN_IN_SUCCESS, payload: user });
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
  //   const createTrack = () => {
  //     dispatch({ type: ADD_DATA_REQUEST });
  //     dispatch({ type: ADD_DATA_SUCCESS, payload: { work: "Track" } });

  //     // try {
  //     //   const { data } = await axios.post(
  //     //     `${publicRuntimeConfig.backendUrl}/v1/users`,
  //     //     info,
  //     //     {
  //     //       headers: {
  //     //         Authorization: `Bearer ${publicRuntimeConfig.token}`,
  //     //         "Content-Type": "application/json",
  //     //       },
  //     //     }
  //     //   );
  //     //   dispatch({ type: CREATE_USER_SUCCESS, payload: data });
  //     // } catch (error) {
  //     //   const message =
  //     //     error.response && error.response.data.message
  //     //       ? error.response.data.message
  //     //       : error.message;

  //     //   dispatch({ type: CREATE_USER_FAIL, payload: message });
  //     // }
  //   };
  //   const updateUser = async (userId, info) => {
  //     dispatch({ type: UPDATE_USER_REQUEST });
  //     try {
  //       const { data } = await axios.put(
  //         `${publicRuntimeConfig.backendUrl}/v1/users/${userId}`,
  //         info,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${publicRuntimeConfig.token}`,
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
  //     } catch (error) {
  //       const message =
  //         error.response && error.response.data.message
  //           ? error.response.data.message
  //           : error.message;

  //       dispatch({ type: UPDATE_USER_FAIL, payload: message });
  //     }
  //   };
  //   const updateSurvey = async (id, info) => {
  //     dispatch({ type: UPDATE_SURVEY_REQUEST });
  //     try {
  //       const { data } = await axios.put(`/api/${id}`, info);
  //       dispatch({ type: UPDATE_SURVEY_SUCCESS, payload: data });
  //     } catch (error) {
  //       const message =
  //         error.response && error.response.data.message
  //           ? error.response.data.message
  //           : error.message;

  //       dispatch({ type: UPDATE_SURVEY_FAIL, payload: message });
  //     }
  //   };

  return {
    // createTrack,
    // updateSurvey,
    // updateUser,
    setUser,
    signIn,
    signUp,
    logOut,
  };
};
