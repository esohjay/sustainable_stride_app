import {
  ADD_ACTIVITY_FAIL,
  ADD_ACTIVITY_REQUEST,
  ADD_ACTIVITY_SUCCESS,
  GET_ACTIVITY_FAIL,
  GET_ACTIVITY_REQUEST,
  GET_ACTIVITY_SUCCESS,
  DELETE_ACTIVITY_FAIL,
  DELETE_ACTIVITY_REQUEST,
  DELETE_ACTIVITY_SUCCESS,
} from "../constants/track_constants";

import { useTrackContext } from "../providers/TrackProvider";
import { auth } from "../../lib/firebaseConfig";

export const useTrackActions = () => {
  const { dispatch } = useTrackContext();
  const handleError = (error) => {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    return message;
  };
  const addActivity = async (activityData) => {
    try {
      dispatch({ type: ADD_ACTIVITY_REQUEST });
      const token = await auth?.currentUser?.getIdToken();
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/track`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(activityData),
        }
      );
      const data = await response.json();
      // const data = await response;
      dispatch({ type: ADD_ACTIVITY_SUCCESS, payload: data });
    } catch (error) {
      const message = handleError(error);
      dispatch({ type: ADD_ACTIVITY_FAIL, payload: message });
    }
  };
  const addTravelActivity = async (activityData) => {
    try {
      dispatch({ type: ADD_ACTIVITY_REQUEST });
      const token = await auth?.currentUser?.getIdToken();
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/track/travel`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(activityData),
        }
      );
      const data = await response.json();
      // const data = await response;
      dispatch({ type: ADD_ACTIVITY_SUCCESS, payload: data });
    } catch (error) {
      const message = handleError(error);
      dispatch({ type: ADD_ACTIVITY_FAIL, payload: message });
    }
  };
  const getActivity = async () => {
    try {
      dispatch({ type: GET_ACTIVITY_REQUEST });
      const token = await auth?.currentUser?.getIdToken();
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/track`,
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
      dispatch({ type: GET_ACTIVITY_SUCCESS, payload: data });
    } catch (error) {
      const message = handleError(error);
      dispatch({ type: GET_ACTIVITY_FAIL, payload: message });
    }
  };
  const deleteActivity = async (activityData) => {
    try {
      dispatch({ type: DELETE_ACTIVITY_REQUEST });
      const token = await auth?.currentUser?.getIdToken();
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/track`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(activityData),
        }
      );
      // const data = await response.json();
      dispatch({ type: DELETE_ACTIVITY_SUCCESS });
    } catch (error) {
      const message = handleError(error);
      dispatch({ type: DELETE_ACTIVITY_FAIL, payload: message });
    }
  };
  return {
    addActivity,
    addTravelActivity,
    getActivity,
    deleteActivity,
  };
};
