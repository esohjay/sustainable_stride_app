import React, { useMemo, useRef } from "react";
import { View, Text, Image } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import tw from "../lib/tailwind";
import { CustomScrollView } from "../context/providers/ScrollContext";
import { Button } from "../components/UI/Button";
import { useAuthContext } from "../context/providers/AuthProvider";
import { Ionicons } from "@expo/vector-icons";
import AchievementStat from "../components/AchievementStat";

export default function ProfileScreen() {
  const { state } = useAuthContext();
  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);

  const bottomSheetRef = useRef < BottomSheet > null;
  return (
    <CustomScrollView style={tw`bg-gray-50  `} screen="profile">
      <View style={tw`p-5`}>
        <View
          style={tw`flex flex-row items-start p-3 bg-white rounded-lg shadow gap-x-3`}
        >
          <View style={tw`flex items-center gap-y-1  w-[25%]`}>
            <View style={tw`w-24 h-24 rounded-full bg-transparent`}>
              <Image
                style={tw`w-full h-full rounded-full max-w-full max-h-full bg-transparent`}
                resizeMode="cover"
                source={require("../assets/avatar.png")}
              />
            </View>
            <Button
              text={"Change"}
              variant="light"
              textStyle={tw`text-[10px]`}
              height="30"
            />
          </View>
          <View style={tw`w-[65%]`}>
            <Text style={tw`text-lg text-mainColor font-bold mb-1`}>
              Olusoji Daramola
            </Text>
            <View style={tw`flex flex-row gap-x-2`}>
              <Ionicons name={"mail"} size={20} color="#7d4f50" />
              <Text style={tw`text-sm text-dark font-medium mb-1`}>
                {state?.user?.email}
              </Text>
            </View>
            <View style={tw`flex flex-row gap-x-2`}>
              <Ionicons name={"location"} size={20} color="#7d4f50" />
              <Text style={tw`text-sm text-dark font-medium mb-1`}>
                Flat 6, 80 Bradford street. Bolton
              </Text>
            </View>
          </View>
        </View>
        <View style={tw`bg-white shadow rounded-lg p-3 mt-4`}>
          <View style={tw`flex flex-row justify-between mb-5 w-full`}>
            <AchievementStat stat={0} type={"KgCO2e"} icon={"cloudy"} />
            <AchievementStat stat={0} type={"Actions"} icon={"medal"} />
          </View>
          <View style={tw`flex flex-row justify-between mb-5 w-full`}>
            <AchievementStat stat={0} type={"Points"} icon={"aperture"} />
            <AchievementStat stat={0} type={"Tracking"} icon={"speedometer"} />
          </View>
          <Text style={tw`text-dark font-semibold mb-2 text-base`}>Badges</Text>
          <View style={tw`flex flex-row items-center gap-x-6`}>
            <View
              style={tw`h-12 bg-transparent w-12 rounded-full border-2 border-secondaryAlt`}
            >
              <Image
                style={tw`w-full h-full max-w-full max-h-full bg-transparent`}
                resizeMode="contain"
                source={require("../assets/quality.png")}
              />
            </View>
            <Text style={tw`text-dark font-normal w-3/4`}>
              Keep using the app to unlock badges!
            </Text>
          </View>
        </View>
        <View style={tw`py-4`}>
          <Button text={"Delete account"} />
        </View>
      </View>
    </CustomScrollView>
  );
}
