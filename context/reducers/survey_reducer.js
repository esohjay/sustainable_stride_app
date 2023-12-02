import {
  ADD_DATA_FAIL,
  ADD_DATA_REQUEST,
  ADD_DATA_RESET,
  ADD_DATA_SUCCESS,
} from "../constants/survey_constant";

export const SurveyReducer = (state, action) => {
  switch (action.type) {
    case ADD_DATA_REQUEST:
      return { ...state, loading: true };
    case ADD_DATA_SUCCESS:
      return {
        ...state,
        loadingSurvey: false,
        surveySuccess: true,
        data: action.payload,
      };
    case ADD_DATA_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ADD_DATA_RESET:
      return { ...state, success: false };
    default:
      return state;
  }
};
