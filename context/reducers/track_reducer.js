import {
  ADD_ACTIVITY_FAIL,
  ADD_ACTIVITY_REQUEST,
  ADD_ACTIVITY_SUCCESS,
  GET_ACTIVITY_FAIL,
  GET_ACTIVITY_REQUEST,
  GET_ACTIVITY_SUCCESS,
  RESET_ACTIVITY,
} from "../constants/track_constants";

export const TrackReducer = (state, action) => {
  switch (action.type) {
    case ADD_ACTIVITY_REQUEST:
      return { ...state, addingActivity: true };
    case ADD_ACTIVITY_SUCCESS:
      return {
        ...state,
        addingActivity: false,
        activityAdded: true,
        activity: action.payload,
      };
    case ADD_ACTIVITY_FAIL:
      return { ...state, addingActivity: false, activityError: action.payload };
    case GET_ACTIVITY_REQUEST:
      return { ...state, fetchingActivity: true };
    case GET_ACTIVITY_SUCCESS:
      return {
        ...state,
        fetchingActivity: false,
        activityFetched: true,
        activityList: action.payload,
      };
    case GET_ACTIVITY_FAIL:
      return {
        ...state,
        fetchingActivity: false,
        activityError: action.payload,
      };
    case RESET_ACTIVITY:
      return {
        ...state,
        activityAdded: false,
        // activity: null,
        activityError: null,
        addingActivity: false,
      };
    default:
      return state;
  }
};
