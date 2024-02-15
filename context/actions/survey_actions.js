import {
  ADD_DATA_FAIL,
  ADD_DATA_REQUEST,
  ADD_DATA_SUCCESS,
} from "../constants/survey_constant";

import { useAppContext } from "../store";

export const useSurveryActions = () => {
  const { dispatch } = useAppContext();
  const createUser = () => {
    dispatch({ type: ADD_DATA_REQUEST });
    dispatch({ type: ADD_DATA_SUCCESS, payload: { work: "Survey" } });

    // try {
    //   const { data } = await axios.post(
    //     `${publicRuntimeConfig.backendUrl}/v1/users`,
    //     info,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${publicRuntimeConfig.token}`,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   dispatch({ type: CREATE_USER_SUCCESS, payload: data });
    // } catch (error) {
    //   const message =
    //     error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message;

    //   dispatch({ type: CREATE_USER_FAIL, payload: message });
    // }
  };
  // const updateUser = async (userId, info) => {
  //   dispatch({ type: UPDATE_USER_REQUEST });
  //   try {
  //     const { data } = await axios.put(
  //       `${publicRuntimeConfig.backendUrl}/v1/users/${userId}`,
  //       info,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${publicRuntimeConfig.token}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
  //   } catch (error) {
  //     const message =
  //       error.response && error.response.data.message
  //         ? error.response.data.message
  //         : error.message;

  //     dispatch({ type: UPDATE_USER_FAIL, payload: message });
  //   }
  // };
  // const updateSurvey = async (id, info) => {
  //   dispatch({ type: UPDATE_SURVEY_REQUEST });
  //   try {
  //     const { data } = await axios.put(`/api/${id}`, info);
  //     dispatch({ type: UPDATE_SURVEY_SUCCESS, payload: data });
  //   } catch (error) {
  //     const message =
  //       error.response && error.response.data.message
  //         ? error.response.data.message
  //         : error.message;

  //     dispatch({ type: UPDATE_SURVEY_FAIL, payload: message });
  //   }
  // };

  return {
    createUser,
    // updateSurvey,
    // updateUser,
  };
};
