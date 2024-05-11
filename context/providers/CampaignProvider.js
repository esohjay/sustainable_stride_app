import React, { useContext, useReducer, createContext } from "react";

import { CampaignReducer } from "../reducers/campaign_reducer";

const CampaignContext = createContext();

const initialState = {
  campaignAdded: false,
  campaignFetched: false,
  campaign: null,
  campaignList: null,
  campaignError: null,
  addingCampaign: false,
  fetchingCampaign: false,
  joinedCampaignList: null,
  joinedCampaignFetched: false,
  fetchingJoinedCampaign: false,
  joined: false,
  joining: false,
  left: false,
  leaving: false,
};
const CampaignProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CampaignReducer, initialState);
  return (
    <CampaignContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CampaignContext.Provider>
  );
};

export const useCampaignContext = () => {
  return useContext(CampaignContext);
};

export { CampaignContext, CampaignProvider };
