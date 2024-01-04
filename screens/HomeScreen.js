import { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import Header from "../components/Header";
import { useAuthContext } from "../context/providers/AuthProvider";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CustomScrollView } from "../context/providers/ScrollContext";
import tw from "../lib/tailwind";
import { useAuthActions } from "../context/actions/auth_actions";
import { Button } from "../components/UI/Button";

function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { logOut } = useAuthActions();
  const { state } = useAuthContext();

  // console.log(state);
  return (
    <CustomScrollView style={tw`bg-gray-50 p-5`}>
      <View style={tw`py-5`}>
        <View
          style={tw`flex flex-row gap-3 w-full p-5 items-center shadow bg-white rounded-lg`}
        >
          <View style={tw`h-20 mb-3 bg-transparent w-3/12`}>
            <Image
              style={tw`w-full h-full max-w-full max-h-full bg-transparent`}
              resizeMode="contain"
              source={require("../assets/Analyze-amico.png")}
            />
          </View>
          <View style={tw` w-9/12`}>
            <Text style={tw`font-semibold text-lg text-mainColor mb-1`}>
              Estimate footprint
            </Text>
            <Text style={tw`text-dark mb-1 font-normal`}>
              Take a quick survey to estimate how much carbon you emit.
            </Text>
            <Text style={tw`font-bold text-lg text-mainColor`}>Start now</Text>
          </View>
        </View>
      </View>
      <View style={tw`py-5`}>
        <View style={tw`flex flex-row items-center justify-between w-full`}>
          <Text style={tw`text-mainColor font-bold text-xl`}>Tips</Text>
          <Text style={[tw`text-secondaryAlt text-base`]}>See all</Text>
        </View>
      </View>
    </CustomScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "white",
    padding: 15,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  headerShadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default HomeScreen;
