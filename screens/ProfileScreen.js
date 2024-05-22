import React, { useMemo, useRef, useEffect, useState } from "react";
import { View, Text, Image, Pressable, Alert } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import tw from "../lib/tailwind";
import { CustomScrollView } from "../context/providers/ScrollContext";
import { Button } from "../components/UI/Button";
import { useAuthContext } from "../context/providers/AuthProvider";
import { Ionicons } from "@expo/vector-icons";
import AchievementStat from "../components/AchievementStat";
import UpdateEmail from "../components/UpdateEmail";
import UpdatePassword from "../components/UpdatePassword";
import UpdateName from "../components/UpdateName";
import TextAbbrevavtion from "../components/TextAbbrevavtion";
import useGetActions from "../lib/useGetActions";
import useOpenLink from "../lib/useOpenLink";
import { useAuthActions } from "../context/actions/auth_actions";

export default function ProfileScreen({ navigation }) {
  const { state } = useAuthContext();
  const handleOpenLink = useOpenLink();
  const { delteProfile } = useAuthActions();
  const { actionSummary, pointDetails } = useGetActions();
  const snapPoints = useMemo(() => ["55%"], []);
  const nameSnapPoints = useMemo(() => ["40%"], []);
  const [isOpen, setIsOpen] = useState(false);
  const bottomSheetRef = useRef(null);
  const bottomSheetNameRef = useRef(null);
  function handlePresentModal() {
    bottomSheetRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }
  function handlePresentNameModal() {
    bottomSheetNameRef.current?.present();
  }

  const createAlert = () =>
    Alert.alert(
      "Delete account?",
      "All records will be deleted. This action is irreversible.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Delete", onPress: delteProfile },
      ]
    );
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text
          onPress={handlePresentModal}
          style={tw`text-base font-semibold text-mainColor`}
        >
          Edit profile
        </Text>
      ),
    });
  }, [navigation]);
  useEffect(() => {
    if (state?.deleted) {
      navigation.navigate("Register");
    }
  }, [state?.deleted]);
  return (
    <CustomScrollView style={tw`bg-gray-50  `} screen="profile">
      <View style={tw`p-5 flex gap-3`}>
        <View
          style={tw`flex flex-row items-start p-3 bg-white rounded-lg shadow gap-x-3`}
        >
          <View style={tw`flex items-center gap-y-1  w-[20%]`}>
            <TextAbbrevavtion text={state?.profile?.fullName} />
          </View>
          <View style={tw`w-[70%] flex gap-1`}>
            <Text style={tw`text-lg text-mainColor font-bold `}>
              {state?.profile?.fullName}
            </Text>

            <View style={tw`flex flex-row gap-x-2`}>
              <Ionicons name={"mail"} size={20} color="#7d4f50" />
              <Text style={tw`text-sm text-dark font-medium mb-1`}>
                {state?.profile?.email}
              </Text>
            </View>
            <Pressable
              style={tw`flex items-center flex-row mb-1 gap-x-1`}
              onPress={handlePresentNameModal}
            >
              <Ionicons name={"create-outline"} size={20} color="#7d4f50" />
              <Text style={tw`text-sm text-dark font-medium`}>
                Update password
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={tw`bg-white shadow rounded-lg p-3 mt-4`}>
          <View style={tw`flex flex-row gap-x-3 justify-between mb-5 w-full`}>
            <AchievementStat
              stat={actionSummary?.carbonSaved}
              type={"KgCO2e saved"}
              icon={"cloudy"}
            />
            <AchievementStat
              stat={actionSummary?.actionTaken}
              type={"Actions"}
              icon={"medal"}
            />
          </View>
          <View style={tw`flex flex-row gap-x-3 justify-between mb-5 w-full`}>
            <AchievementStat
              stat={actionSummary.pointsEarned}
              type={"Points"}
              icon={"aperture"}
            />
            <AchievementStat
              stat={pointDetails?.level}
              type={"Level"}
              icon={"diamond"}
            />
          </View>
        </View>
        <View
          style={tw`w-full h-40 relative flex flex-row justify-between bg-white rounded-lg shadow`}
        >
          <View
            style={tw`absolute p-4 flex items-center gap-3 h-full bg-transparent top-0 left-0 w-full bg-white bg-opacity-30 z-10`}
          >
            <Text style={tw`text-sm font-medium text-center text-mainColor`}>
              According to{" "}
              <Text
                onPress={() =>
                  handleOpenLink(
                    "https://www.eea.europa.eu/articles/forests-health-and-climate-change"
                  )
                }
                style={tw`font-bold underline`}
              >
                EEA
              </Text>
              , a mature tree can absorb 22KgCO2 per year. Your saved emission
              of{" "}
              <Text style={tw`font-bold`}>
                {actionSummary?.carbonSaved}KgCO2e
              </Text>{" "}
              would equate to
            </Text>

            <Text style={tw`font-thick text-base text-green-800`}>
              {actionSummary?.treeCount < 1
                ? "Less than 1 tree"
                : actionSummary?.treeCount === 1
                ? "1 tree"
                : `${actionSummary?.treeCount} trees`}
            </Text>
          </View>
          <View style={tw`w-1/3 h-20 mb-3 bg-transparent self-end`}>
            <Image
              style={tw`w-full h-full max-w-full max-h-full bg-transparent`}
              resizeMode="contain"
              source={require("../assets/left-tree.png")}
            />
          </View>
          <View style={tw`w-1/3 h-20 mb-3 bg-transparent self-end`}>
            <Image
              style={tw`w-full h-full max-w-full max-h-full bg-transparent`}
              resizeMode="contain"
              source={require("../assets/right-tree.png")}
            />
          </View>
        </View>
        <View style={tw`py-4`}>
          <Button
            text={"Delete account"}
            isLoading={state?.deleting}
            onPress={createAlert}
          />
        </View>
        <BottomSheetModal
          ref={bottomSheetRef}
          // index={1}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 25 }}
          onDismiss={() => setIsOpen(false)}
          style={tw`shadow-lg bg-white rounded-3xl`}
        >
          <View style={tw`px-5`}>
            {/* email */}
            {/* <UpdateEmail /> */}
            <UpdateName />
          </View>
        </BottomSheetModal>
        <BottomSheetModal
          ref={bottomSheetNameRef}
          // index={1}
          snapPoints={nameSnapPoints}
          backgroundStyle={{ borderRadius: 25 }}
          onDismiss={() => setIsOpen(false)}
          style={tw`shadow-lg bg-white rounded-3xl`}
        >
          <View style={tw`px-5`}>
            {/* password */}
            <UpdatePassword />
          </View>
        </BottomSheetModal>
      </View>
    </CustomScrollView>
  );
}
