import {
  CREATE_SURVEY_FAIL,
  CREATE_SURVEY_REQUEST,
  CREATE_SURVEY_RESET,
  CREATE_SURVEY_SUCCESS,
} from "../constants/survey_constant";

export const SurveyReducer = (state, action) => {
  switch (action.type) {
    case CREATE_SURVEY_REQUEST:
      return { ...state, loading: true };
    case CREATE_SURVEY_SUCCESS:
      return {
        ...state,
        loading: false,
        surveySaved: true,
        footprint: action.payload,
      };
    case CREATE_SURVEY_FAIL:
      return { ...state, loading: false, error: action.payload };
    case CREATE_SURVEY_RESET:
      return { ...state, surveySaved: false };
    default:
      return state;
  }
};
