import React, { useMemo, useRef, useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
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

export default function ProfileScreen({ navigation }) {
  const { state } = useAuthContext();
  const snapPoints = useMemo(() => ["65%"], []);
  const nameSnapPoints = useMemo(() => ["35%"], []);
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
    // setTimeout(() => {
    //   setIsOpen(true);
    // }, 100);
  }

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
            <Pressable
              style={tw`flex items-center flex-row mb-1 gap-x-1`}
              onPress={handlePresentNameModal}
            >
              <Text style={tw`text-lg text-mainColor font-bold `}>
                Olusoji Daramola
              </Text>
              <Ionicons name={"create-outline"} size={20} color="#7d4f50" />
            </Pressable>
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
            <UpdateEmail />

            {/* password */}
            <UpdatePassword />
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
            <UpdateName />
          </View>
        </BottomSheetModal>
      </View>
    </CustomScrollView>
  );
}
