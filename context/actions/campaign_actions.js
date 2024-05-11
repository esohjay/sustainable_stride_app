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
  GET_JOINED_CAMPAIGN_FAIL,
  GET_JOINED_CAMPAIGN_REQUEST,
  GET_JOINED_CAMPAIGN_SUCCESS,
} from "../constants/campaign_constant";

import { useCampaignContext } from "../providers/CampaignProvider";
import { auth } from "../../lib/firebaseConfig";

export const useCampaignActions = () => {
  const { dispatch } = useCampaignContext();
  const handleError = (error) => {
    console.log(error);
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    return message;
  };
  const createCampaign = async (campaignData) => {
    try {
      dispatch({ type: CREATE_CAMPAIGN_REQUEST });
      const token = await auth?.currentUser?.getIdToken();
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/campaign`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(campaignData),
        }
      );
      const data = await response.json();
      // const data = await response;
      dispatch({ type: CREATE_CAMPAIGN_SUCCESS, payload: data });
    } catch (error) {
      const message = handleError(error);
      console.log(error);
      dispatch({ type: CREATE_CAMPAIGN_FAIL, payload: message });
    }
  };
  const joinCampaign = async (campaignData) => {
    try {
      dispatch({ type: JOIN_CAMPAIGN_REQUEST });
      const token = await auth?.currentUser?.getIdToken();
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/campaign/${campaignData.id}/join`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(campaignData),
        }
      );
      const data = await response.json();
      // const data = await response;
      dispatch({ type: JOIN_CAMPAIGN_SUCCESS, payload: data });
    } catch (error) {
      const message = handleError(error);
      console.log(error);
      dispatch({ type: JOIN_CAMPAIGN_FAIL, payload: message });
    }
  };
  const leaveCampaign = async (campaignData) => {
    try {
      dispatch({ type: LEAVE_CAMPAIGN_REQUEST });
      const token = await auth?.currentUser?.getIdToken();
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/campaign/${campaignData.id}/LEAVE`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(campaignData),
        }
      );
      const data = await response.json();
      // const data = await response;
      dispatch({ type: LEAVE_CAMPAIGN_SUCCESS, payload: data });
    } catch (error) {
      const message = handleError(error);
      console.log(error);
      dispatch({ type: LEAVE_CAMPAIGN_FAIL, payload: message });
    }
  };
  const getCampaigns = async () => {
    try {
      dispatch({ type: GET_CAMPAIGN_REQUEST });
      const token = await auth?.currentUser?.getIdToken();
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/campaign`,
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
      dispatch({ type: GET_CAMPAIGN_SUCCESS, payload: data });
    } catch (error) {
      const message = handleError(error);
      console.log(error);
      dispatch({ type: GET_CAMPAIGN_FAIL, payload: message });
    }
  };
  const getJoinedCampaigns = async () => {
    try {
      dispatch({ type: GET_JOINED_CAMPAIGN_REQUEST });
      const token = await auth?.currentUser?.getIdToken();
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/campaign/joined-campaign`,
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
      dispatch({ type: GET_JOINED_CAMPAIGN_SUCCESS, payload: data });
    } catch (error) {
      const message = handleError(error);
      console.log(error);
      dispatch({ type: GET_JOINED_CAMPAIGN_FAIL, payload: message });
    }
  };
  return {
    createCampaign,
    getCampaigns,
    leaveCampaign,
    joinCampaign,
    getJoinedCampaigns,
  };
};
