import {
  ADD_ACTION_FAIL,
  ADD_ACTION_REQUEST,
  ADD_ACTION_SUCCESS,
  GET_ALL_ACTION_FAIL,
  GET_ALL_ACTION_REQUEST,
  GET_ALL_ACTION_SUCCESS,
  GET_LOGGED_ACTION_FAIL,
  GET_LOGGED_ACTION_REQUEST,
  GET_LOGGED_ACTION_SUCCESS,
} from "../constants/action_constants";

import { useActionContext } from "../providers/ActionProvider";
import { auth } from "../../lib/firebaseConfig";

export const useActionActions = () => {
  const { dispatch } = useActionContext();
  const handleError = (error) => {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    return message;
  };
  const logAction = async (actionData) => {
    try {
      dispatch({ type: ADD_ACTION_REQUEST });
      const token = await auth?.currentUser?.getIdToken();
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/action/log`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(actionData),
        }
      );
      const data = await response.json();
      // const data = await response;
      dispatch({ type: ADD_ACTION_SUCCESS, payload: data });
    } catch (error) {
      const message = handleError(error);
      console.log(error);
      dispatch({ type: ADD_ACTION_FAIL, payload: message });
    }
  };

  const getActions = async () => {
    try {
      dispatch({ type: GET_ALL_ACTION_REQUEST });
      const token = await auth?.currentUser?.getIdToken();
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/action`,
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
      dispatch({ type: GET_ALL_ACTION_SUCCESS, payload: data });
    } catch (error) {
      const message = handleError(error);
      console.log(error);
      dispatch({ type: GET_ALL_ACTION_FAIL, payload: message });
    }
  };
  const getLoggedActions = async () => {
    try {
      dispatch({ type: GET_LOGGED_ACTION_REQUEST });
      const token = await auth?.currentUser?.getIdToken();
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/action/loggedAction`,
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
      dispatch({ type: GET_LOGGED_ACTION_SUCCESS, payload: data });
    } catch (error) {
      const message = handleError(error);
      console.log(error);
      dispatch({ type: GET_LOGGED_ACTION_FAIL, payload: message });
    }
  };
  return {
    logAction,
    getLoggedActions,
    getActions,
  };
};
