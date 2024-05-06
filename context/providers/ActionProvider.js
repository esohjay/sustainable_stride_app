import React, { useContext, useReducer, createContext } from "react";

import { ActionReducer } from "../reducers/action_reducer";

const ActionContext = createContext();

const initialState = {
  actionAdded: false,
  actionFetched: false,
  action: null,
  loggedAction: null,
  actionList: null,
  actionError: null,
  addingAction: false,
  fetchingAction: false,
};
const ActionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ActionReducer, initialState);
  return (
    <ActionContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ActionContext.Provider>
  );
};

export const useActionContext = () => {
  return useContext(ActionContext);
};

export { ActionContext, ActionProvider };
