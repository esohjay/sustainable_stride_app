import React from "react";
import { View, Pressable, Text, Image } from "react-native";
import tw from "../../lib/tailwind";
import { useAuthActions } from "../../context/actions/auth_actions";
import { useAuthContext } from "../../context/providers/AuthProvider";
import { useNavigation } from "@react-navigation/native";
import TextAbbrevavtion from "../TextAbbrevavtion";

function HomeHeader() {
  const { logOut } = useAuthActions();
  const { state } = useAuthContext();
  console.log(state);
  const navigation = useNavigation();
  return (
    <View style={tw` flex flex-row justify-between items-center py-2`}>
      <Text style={tw`font-extrabold text-2xl text-mainColor `}>
        Hello{" "}
        {state && state.profile?.firstName ? state.profile?.firstName : "👋"}
      </Text>

      <Pressable
        style={tw`h-full`}
        onPress={() => navigation.navigate("Profile")}
      >
        {/* <View style={tw`w-12 h-12 rounded-full mb-3 bg-transparent`}>
          <Image
            style={tw`w-full h-full max-w-full rounded-full max-h-full bg-transparent`}
            resizeMode="cover"
            source={require("../../assets/avatar.png")}
          />
        </View> */}
        {state?.profile?.fullName && (
          <TextAbbrevavtion
            text={state?.profile?.fullName}
            size={tw`h-11 w-11`}
            textSize={tw`text-xl`}
          />
        )}
      </Pressable>
    </View>
  );
}

export default HomeHeader;
