import React, { useMemo, useRef, useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import tw from "../lib/tailwind";
import { CustomScrollView } from "../context/providers/ScrollContext";
import ActionStat from "../components/ActionStat";
import { ProgressBar } from "../components/ProgressBar";
import { Button } from "../components/UI/Button";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import MyActionCard from "../components/MyActionCard";
import ActionsList from "../components/ActionsList";
import useGetActions from "../lib/useGetActions";

function ActScreen({ navigation }) {
  const { actionSummary, actions, pointDetails } = useGetActions();
  const snapPoints = useMemo(() => ["35%", "70%", "95%"], []);
  const bottomSheetRef = useRef(null);
  function handlePresentModal() {
    bottomSheetRef.current?.present();
  }

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
            value={actionSummary.actionTaken}
          />
          <ActionStat
            text={"Points earned"}
            icon={"trophy"}
            bgColor={"#0d47a1"}
            value={actionSummary.pointsEarned}
          />
          <ActionStat
            text={"Carbon saved"}
            icon={"cloud"}
            bgColor={"#f5b700"}
            value={`${actionSummary.carbonSaved}kg`}
          />
        </View>
        {pointDetails && (
          <View>
            <ProgressBar progress={pointDetails.percentage} />
            <View style={tw`flex flex-row justify-between items-center`}>
              <Text style={tw`text-xs font-medium text-dark`}>
                Achieve {pointDetails.remainder} more points to leavel up!
              </Text>
              <Text style={tw`text-xs font-medium text-green-500`}>
                {actionSummary.pointsEarned}/{pointDetails.target}
              </Text>
            </View>
          </View>
        )}

        <View style={tw`flex items-start gap-y-3 py-5`}>
          <Text style={tw`text-lg font-bold text-mainColor`}>
            Recent action
          </Text>
          {actions.length > 0 && <MyActionCard data={actions[0]} />}
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
          style={tw`shadow-lg bg-white rounded-3xl flex-1 flex`}
        >
          <View style={tw`p-5 flex-1 flex`}>
            <FlatList
              data={actions.length && actions}
              // extraData={refresh}
              ItemSeparatorComponent={() => (
                <View style={{ height: 10, width: 8 }}></View>
              )}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return <MyActionCard data={item} />;
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
        </BottomSheetModal>
      </View>
    </CustomScrollView>
  );
}

export default ActScreen;
