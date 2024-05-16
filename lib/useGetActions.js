import React, { useEffect, useState } from "react";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";
import { useAuthContext } from "../context/providers/AuthProvider";
import { db } from "../lib/firebaseConfig";
import { getPointTarget } from "../lib/helperFn";

export default function useGetActions() {
  const { state } = useAuthContext();
  const [actions, setActions] = useState([]);
  const [pointDetails, setPointDetails] = useState(null);
  const [actionSummary, setActionSummary] = useState({
    pointsEarned: 0,
    carbonSaved: 0,
    actionTaken: 0,
    treeCount: 0,
  });
  useEffect(() => {
    const q = query(
      collection(db, "profile", state.user.id, "action-log"),
      orderBy("timestamp")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedMessages = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setActions(fetchedMessages);
    });
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    if (actions) {
      const carbonPerTree = 22;
      let carbonSaved = 0;
      let pointsEarned = 0;
      const actionTaken = actions.length;
      for (let action of actions) {
        pointsEarned += action.pointsEarned;
        carbonSaved += action.carbonSaved;
      }
      const treeCount = Math.round(carbonSaved / carbonPerTree);
      setActionSummary({
        carbonSaved,
        pointsEarned,
        actionTaken,
        treeCount,
      });
    }
  }, [actions]);
  useEffect(() => {
    if (actionSummary) {
      setPointDetails(getPointTarget(actionSummary.pointsEarned));
    }
  }, [actionSummary]);
  return { actionSummary, actions, pointDetails };
}
