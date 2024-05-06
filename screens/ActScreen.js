import React, { useMemo, useRef, useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import tw from "../lib/tailwind";
import { CustomScrollView } from "../context/providers/ScrollContext";
import ActionStat from "../components/ActionStat";
import { ProgressBar } from "../components/ProgressBar";
import { Button } from "../components/UI/Button";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import MyActionCard from "../components/MyActionCard";
import ActionCard from "../components/ActionCard";
import ActionsList from "../components/ActionsList";
import { onSnapshot, doc } from "firebase/firestore";
import { useAuthContext } from "../context/providers/AuthProvider";
import { db } from "../lib/firebaseConfig";

function ActScreen({ navigation }) {
  const { state } = useAuthContext();
  const [actions, setActions] = useState(null);
  const snapPoints = useMemo(() => ["35%", "70%", "95%"], []);
  const bottomSheetRef = useRef(null);
  function handlePresentModal() {
    bottomSheetRef.current?.present();
  }
  console.log(state.user.id);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, "actionLog", state.user.id),
      (doc) => {
        setActions(doc.data());
        // console.log(doc.data(), "actionn");
      }
    );
    return () => unsubscribe();
  }, []);
  // console.log(actions, "out");
  return (
    <CustomScrollView style={tw`bg-gray-50  `} screen="act">
      <View style={tw`p-5`}>
        <View
          style={tw`flex w-full flex-row gap-x-2 justify-between flex-wrap mb-5`}
        >
          <ActionStat
            text={"Actions taken"}
            icon={"earth"}
            bgColor={"#007200"}
            value={actions?.actions?.length}
          />
          <ActionStat
            text={"Points earned"}
            icon={"trophy"}
            bgColor={"#0d47a1"}
            value={actions?.pointsEarned}
          />
          <ActionStat
            text={"Carbon saved"}
            icon={"cloud"}
            bgColor={"#f5b700"}
            value={`${actions?.carbonSaved}kg`}
          />
        </View>
        <View>
          <ProgressBar progress={30} />
          <View style={tw`flex flex-row justify-between items-center`}>
            <Text style={tw`text-xs font-medium text-dark`}>
              Achieve 50 more points to leavel up!
            </Text>
            <Text style={tw`text-xs font-medium text-green-500`}>150/200</Text>
          </View>
        </View>

        <View style={tw`flex items-start gap-y-3 py-5`}>
          <Text style={tw`text-lg font-bold text-mainColor`}>
            Recent action
          </Text>
          <MyActionCard />
          <Button
            text={"See my actions"}
            variant="light"
            onPress={handlePresentModal}
          />
        </View>
        <View style={tw`h-[1px] bg-gray-200 w-full`}></View>
        <View style={tw`pt-5 pb-2 flex justify-between flex-row items-center`}>
          <Text style={tw`text-lg font-bold text-mainColor`}>Actions</Text>
          <Text
            style={[tw`text-secondaryAlt text-base font-normal`]}
            onPress={() => navigation.navigate("AllActions")}
          >
            See all
          </Text>
        </View>
        <ActionsList />
        <View style={tw`py-3 flex items-center`}>
          <Button
            text={"See all actions"}
            style={tw`w-2/3`}
            onPress={() => navigation.navigate("AllActions")}
          />
        </View>
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 25 }}
          style={tw`shadow-lg bg-white rounded-3xl`}
        >
          <View style={tw`p-5`}>
            <MyActionCard />
            <MyActionCard />
            <MyActionCard />
            <MyActionCard />
            <MyActionCard />
          </View>
        </BottomSheetModal>
      </View>
    </CustomScrollView>
  );
}

export default ActScreen;
