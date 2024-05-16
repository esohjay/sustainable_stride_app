import React, { useEffect, useState } from "react";
import { onSnapshot, doc, orderBy, query } from "firebase/firestore";
import { useAuthContext } from "../context/providers/AuthProvider";
import { db } from "../lib/firebaseConfig";
import { useSurveyContext } from "../context/providers/SurveyProvider";
import {
  GET_SURVEY_SUCCESS,
  GET_SURVEY_REQUEST,
} from "../context/constants/survey_constant";

export default function useGetSurvey() {
  const { dispatch, state: surveyState } = useSurveyContext();
  const { state } = useAuthContext();
  useEffect(() => {
    dispatch({ type: GET_SURVEY_REQUEST });
    const q = doc(db, "profile", state.user.id, "survey", state.user.id);

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      dispatch({ type: GET_SURVEY_SUCCESS, payload: querySnapshot.data() });
    });
    return () => unsubscribe();
  }, []);
  return {
    survey: surveyState?.survey,
    loadingState: surveyState?.fetchingSurvey,
  };
}
