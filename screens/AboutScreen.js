import React, { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import tw from "../lib/tailwind";
import BackButton from "../components/BackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function About({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={tw`bg-white  min-h-screen`}>
      <View
        style={tw`relative pt-[${insets.top}] pb-[${insets.bottom}] px-5 bg-white rounded-b-3xl shadow-md`}
      >
        <BackButton />
        <View style={tw`py-7 flex gap-y-3`}>
          <Text style={tw`font-normal text-dark text-base text-justify`}>
            Carbon Log empowers users to understand and reduce their carbon
            footprint. The app offers four key features:
          </Text>
          <View style={tw`flex  gap-x-2 items-start w-full `}>
            <View style={tw`flex gap-x-2 flex-row items-center`}>
              <Ionicons name="checkmark-circle" size={20} color="#7d4f50" />
              <Text style={tw`text-base font-semibold text-mainColor`}>
                Calculate Overall Emissions
              </Text>
            </View>
            <Text style={tw`ml-7 text-sm text-dark font-normal text-justify`}>
              Complete a short questionnaire to estimate your annual carbon
              emissions and you can update it to reflect new habits, motivating
              continuous improvement.
            </Text>
          </View>
          <View style={tw`flex  gap-x-2 items-start w-full `}>
            <View style={tw`flex gap-x-2 flex-row items-center`}>
              <Ionicons name="checkmark-circle" size={20} color="#7d4f50" />
              <Text style={tw`text-base font-semibold text-mainColor`}>
                Track Emissions
              </Text>
            </View>
            <Text style={tw`ml-7 text-sm text-dark font-normal text-justify`}>
              Log daily activities to see their carbon impact and resource
              usage, encouraging more eco-friendly choices.
            </Text>
          </View>
          <View style={tw`flex  gap-x-2 items-start w-full `}>
            <View style={tw`flex gap-x-2 flex-row items-center`}>
              <Ionicons name="checkmark-circle" size={20} color="#7d4f50" />
              <Text style={tw`text-base font-semibold text-mainColor`}>
                Take Action
              </Text>
            </View>
            <Text style={tw`ml-7 text-sm text-dark font-normal text-justify`}>
              Access tips on easy to implement sustainable practices in your
              daily life. Log actions and see the carbon savings, highlighting
              the positive impact of your choices.
            </Text>
          </View>
          <View style={tw`flex  gap-x-2 items-start w-full `}>
            <View style={tw`flex gap-x-2 flex-row items-center`}>
              <Ionicons name="checkmark-circle" size={20} color="#7d4f50" />
              <Text style={tw`text-base font-semibold text-mainColor`}>
                Start or join campaigns
              </Text>
            </View>
            <Text style={tw`ml-7 text-sm text-dark font-normal text-justify`}>
              Start or join campaigns where you can discuss and share tips with
              like minds on how to save our environment.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
