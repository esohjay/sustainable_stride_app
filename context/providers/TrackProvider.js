import React, { useContext, useReducer, createContext } from "react";

import { TrackReducer } from "../reducers/track_reducer";

const TrackContext = createContext();

const initialState = {
  activityAdded: false,
  activityFetched: false,
  activity: null,
  activityList: null,
  activityError: null,
  addingActivity: false,
  fetchingActivity: false,
};
const TrackProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TrackReducer, initialState);
  return (
    <TrackContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TrackContext.Provider>
  );
};

export const useTrackContext = () => {
  return useContext(TrackContext);
};

export { TrackContext, TrackProvider };
