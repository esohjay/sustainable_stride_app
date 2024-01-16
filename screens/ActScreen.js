import React, { useMemo, useRef } from "react";
import { View, Text, FlatList } from "react-native";
import tw from "../lib/tailwind";
import { CustomScrollView } from "../context/providers/ScrollContext";
import ActionStat from "../components/ActionStat";
import { ProgressBar } from "../components/ProgressBar";
import { Button } from "../components/UI/Button";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import MyActionCard from "../components/MyActionCard";
import ActionCard from "../components/ActionCard";

function ActScreen({ navigation }) {
  const snapPoints = useMemo(() => ["35%", "70%", "95%"], []);
  const bottomSheetRef = useRef(null);
  function handlePresentModal() {
    bottomSheetRef.current?.present();
  }
  const sliderData = [
    {
      description:
        "Calculate your houdehold carbon emission by answering few questions.",
      title: "Change to LED buld",
      category: "Electricity",
      sdg: "SDG 6",
      id: "2",
    },
    {
      description:
        "A splash screen, also known as a launch screen, is the first screen a user sees when they open your app.",
      title: "Switch to reusable razor",
      category: "Electricity",
      sdg: "SDG 4",
      id: "3",
    },
    {
      description:
        "Scrolls to the item at the specified index such that it is positioned in the viewable area",
      title: "Recycle waste",
      category: "Household",
      sdg: "SDG 10",
      id: "4",
    },
    {
      description:
        "Start or join campaigns that reduces carbon emissions in your area.",
      title: "Take bus",
      category: "Transport",
      sdg: "SDG 8",
      id: "1",
    },
  ];
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
            value={12}
          />
          <ActionStat
            text={"Points earned"}
            icon={"trophy"}
            bgColor={"#0d47a1"}
            value={150}
          />
          <ActionStat
            text={"Carbon saved"}
            icon={"cloud"}
            bgColor={"#f5b700"}
            value={"20kg"}
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
        <View style={tw`py-5 flex justify-between flex-row items-center`}>
          <Text style={tw`text-lg font-bold text-mainColor`}>Actions</Text>
          <Text
            style={[tw`text-secondaryAlt text-base font-normal`]}
            onPress={() => navigation.navigate("AllActions")}
          >
            See all
          </Text>
        </View>
        <View style={tw`flex  items-center gap-y-3`}>
          <FlatList
            horizontal
            data={sliderData}
            ItemSeparatorComponent={() => (
              <View style={{ height: 10, width: 8 }}></View>
            )}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ActionCard data={item} />}
            keyExtractor={(item) => item.id}
          />
          <Button
            text={"See all actions"}
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
