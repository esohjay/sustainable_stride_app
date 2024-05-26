import {
  CREATE_SURVEY_FAIL,
  CREATE_SURVEY_REQUEST,
  CREATE_SURVEY_RESET,
  CREATE_SURVEY_SUCCESS,
  UPDATE_SURVEY_SUCCESS,
} from "../constants/survey_constant";

import { useSurveyContext } from "../providers/SurveyProvider";
import { auth } from "../../lib/firebaseConfig";

export const useSurveyActions = () => {
  const { dispatch } = useSurveyContext();
  const handleError = (error) => {
    console.log(error);
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    return message;
  };
  const createSurvey = async (surveyData) => {
    try {
      dispatch({ type: CREATE_SURVEY_REQUEST });
      const token = await auth?.currentUser?.getIdToken();
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/survey`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(surveyData),
        }
      );
      const data = await response.json();
      // const data = await response;
      dispatch({ type: CREATE_SURVEY_SUCCESS, payload: data });
    } catch (error) {
      const message = handleError(error);
      console.log(error);
      dispatch({ type: CREATE_SURVEY_FAIL, payload: message });
    }
  };
  const updateSurvey = async (surveyData) => {
    dispatch({ type: UPDATE_SURVEY_SUCCESS, payload: surveyData });
  };
  return {
    createSurvey,
    updateSurvey,
  };
};
