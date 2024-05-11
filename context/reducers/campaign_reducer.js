import {
  CREATE_CAMPAIGN_FAIL,
  CREATE_CAMPAIGN_REQUEST,
  CREATE_CAMPAIGN_SUCCESS,
  GET_CAMPAIGN_FAIL,
  GET_CAMPAIGN_REQUEST,
  GET_CAMPAIGN_SUCCESS,
  JOIN_CAMPAIGN_FAIL,
  JOIN_CAMPAIGN_REQUEST,
  JOIN_CAMPAIGN_SUCCESS,
  LEAVE_CAMPAIGN_FAIL,
  LEAVE_CAMPAIGN_REQUEST,
  LEAVE_CAMPAIGN_SUCCESS,
  CREATE_CAMPAIGN_RESET,
  RESET_CAMPAIGN,
  GET_JOINED_CAMPAIGN_FAIL,
  GET_JOINED_CAMPAIGN_REQUEST,
  GET_JOINED_CAMPAIGN_SUCCESS,
} from "../constants/campaign_constant";

export const CampaignReducer = (state, action) => {
  switch (action.type) {
    case CREATE_CAMPAIGN_REQUEST:
      return { ...state, addingCampaign: true };
    case CREATE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        addingCampaign: false,
        campaignAdded: true,
        campaign: action.payload,
      };
    case CREATE_CAMPAIGN_FAIL:
      return { ...state, addingCampaign: false, campaignError: action.payload };
    case GET_CAMPAIGN_REQUEST:
      return { ...state, fetchingCampaign: true };
    case GET_CAMPAIGN_SUCCESS:
      return {
        ...state,
        fetchingCampaign: false,
        campaignFetched: true,
        campaignList: action.payload,
      };
    case GET_CAMPAIGN_FAIL:
      return {
        ...state,
        fetchingCampaign: false,
        campaignError: action.payload,
      };
    case GET_JOINED_CAMPAIGN_REQUEST:
      return { ...state, fetchingJoinedCampaign: true };
    case GET_JOINED_CAMPAIGN_SUCCESS:
      return {
        ...state,
        fetchingJoinedCampaign: false,
        joinedCampaignFetched: true,
        joinedCampaignList: action.payload,
      };
    case GET_JOINED_CAMPAIGN_FAIL:
      return {
        ...state,
        fetchingJoinedCampaign: false,
        campaignError: action.payload,
      };
    case JOIN_CAMPAIGN_REQUEST:
      return { ...state, joining: true };
    case JOIN_CAMPAIGN_SUCCESS:
      return {
        ...state,
        joining: false,
        joined: true,
      };
    case JOIN_CAMPAIGN_FAIL:
      return {
        ...state,
        joining: false,
        campaignError: action.payload,
      };
    case LEAVE_CAMPAIGN_REQUEST:
      return { ...state, leaving: true };
    case LEAVE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        leaving: false,
        left: true,
      };
    case LEAVE_CAMPAIGN_FAIL:
      return {
        ...state,
        leaving: false,
        campaignError: action.payload,
      };
    case CREATE_CAMPAIGN_RESET:
      return {
        ...state,
        campaignAdded: false,
      };
    case RESET_CAMPAIGN:
      return {
        ...state,
        campaignAdded: false,
        campaign: null,
        campaignError: null,
        addingCampaign: false,
        joined: false,
        left: false,
      };
    default:
      return state;
  }
};
