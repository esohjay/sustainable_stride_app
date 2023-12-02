import {
  ADD_TRACK_FAIL,
  ADD_TRACK_REQUEST,
  ADD_TRACK_SUCCESS,
} from "../constants/track_constants";

export const TrackReducer = (state, action) => {
  switch (action.type) {
    case ADD_TRACK_REQUEST:
      return { ...state, loading: true };
    case ADD_TRACK_SUCCESS:
      return {
        ...state,
        loadingTrack: false,
        successTrack: true,
        trackData: action.payload,
      };
    case ADD_TRACK_FAIL:
      return { ...state, loading: false, error: action.payload };
    // case ADD_DATA_RESET:
    //   return { ...state, success: false };
    default:
      return state;
  }
};
