import React, { useEffect } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { useAuthContext } from "../context/providers/AuthProvider";
import { db } from "../lib/firebaseConfig";
import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
} from "../context/constants/auth_constants";

export default function useGetProfile() {
  const { state, dispatch } = useAuthContext();
  useEffect(() => {
    if (state?.user?.id) {
      dispatch({ type: GET_PROFILE_REQUEST });
      const q = doc(db, "profile", state.user.id);

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        dispatch({ type: GET_PROFILE_SUCCESS, payload: querySnapshot.data() });
      });
      return () => unsubscribe();
    }
  }, [state?.user?.id]);
  return {
    profile: state?.profile,
    loadingState: state?.loading,
  };
}
