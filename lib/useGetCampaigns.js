import React, { useEffect, useState } from "react";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";
import { useAuthContext } from "../context/providers/AuthProvider";
import { db } from "../lib/firebaseConfig";
import { useCampaignContext } from "../context/providers/CampaignProvider";
import {
  GET_CAMPAIGN_REQUEST,
  GET_CAMPAIGN_SUCCESS,
} from "../context/constants/campaign_constant";

export default function useGetCampaigns() {
  const { dispatch, state } = useCampaignContext();
  useEffect(() => {
    dispatch({ type: GET_CAMPAIGN_REQUEST });
    const q = query(collection(db, "campaign"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const result = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch({ type: GET_CAMPAIGN_SUCCESS, payload: result });
    });

    return () => unsubscribe();
  }, []);
  return {
    campaign: state?.campaignList,
    loadingState: state?.fetchingCampaign,
  };
}
