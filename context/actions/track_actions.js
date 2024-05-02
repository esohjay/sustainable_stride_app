import {
  ADD_ACTIVITY_FAIL,
  ADD_ACTIVITY_REQUEST,
  CREATE_SURVEY_RESET,
  ADD_ACTIVITY_SUCCESS,
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
      console.log(error);
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
      console.log(error);
      dispatch({ type: ADD_ACTIVITY_FAIL, payload: message });
    }
  };
  return {
    addActivity,
    addTravelActivity,
  };
};
