import React, { useContext, useReducer, createContext, useState } from "react";

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
  activityDeleted: false,
  deletingActivity: false,
};
const TrackProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TrackReducer, initialState);
  const [toBeDelete, setToBeDeleted] = useState(null);
  return (
    <TrackContext.Provider
      value={{
        state,
        dispatch,
        toBeDelete,
        setToBeDeleted,
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
