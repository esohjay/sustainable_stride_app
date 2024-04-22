import React from "react";
import { View, Pressable, Text, Image } from "react-native";
import tw from "../../lib/tailwind";
import { useAuthActions } from "../../context/actions/auth_actions";
import { useAuthContext } from "../../context/providers/AuthProvider";
import { useNavigation } from "@react-navigation/native";

function HomeHeader() {
  const { logOut } = useAuthActions();
  const { state } = useAuthContext();
  const navigation = useNavigation();
  return (
    <View style={tw` flex flex-row justify-between items-center`}>
      <Text style={tw`font-extrabold text-2xl text-mainColor `}>
        Hello {state && state.user.name ? state.user.name : "👋"}
      </Text>

      <Pressable
        style={tw`h-full`}
        onPress={() => navigation.navigate("Profile")}
      >
        <View style={tw`w-12 h-12 rounded-full mb-3 bg-transparent`}>
          <Image
            style={tw`w-full h-full max-w-full rounded-full max-h-full bg-transparent`}
            resizeMode="cover"
            source={require("../../assets/avatar.png")}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default HomeHeader;
