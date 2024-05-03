import React from "react";
import { View, Text } from "react-native";
import tw from "../lib/tailwind";
import { formatText } from "../lib/formatTrackText";

export default function ActivityCard({ data }) {
  const { activity, amount, emission, value, mode, unit } = data;
  return (
    <View style={{ flex: 1 }}>
      {activity ? (
        <View
          style={tw`flex flex-row justify-between gap-x-5 bg-white shadow  rounded-md p-3`}
        >
          <View style={tw`flex gap-y-2`}>
            <Text style={tw`capitalize font-semibold text-base text-mainColor`}>
              {formatText(activity)}
            </Text>
            <Text style={tw`font-medium text-mainColor text-sm`}>
              £{amount}
            </Text>
          </View>
          <View>
            <Text style={tw`font-semibold text-sm text-dark`}>
              {emission.toFixed(2)}
              kg
            </Text>
            <Text style={tw`text-dark font-medium -my-1`}>
              <Text style={tw`text-sm `}>of C0</Text>
              <Text style={tw`text-xs leading-3`}>2e</Text>
            </Text>
          </View>
        </View>
      ) : (
        <View
          style={tw`flex flex-row justify-between gap-x-5 bg-white shadow  rounded-md p-3`}
        >
          <View style={tw`flex gap-y-2`}>
            <Text style={tw`capitalize font-semibold text-base text-mainColor`}>
              {mode === "publicTransport" ? "Public transport" : mode}
            </Text>
            <Text style={tw`font-medium text-mainColor text-sm`}>
              {value === "longHaul"
                ? "Long haul"
                : value === "shortHaul"
                ? "Short haul"
                : value}
              {unit === "mile" ? "miles" : unit}
            </Text>
          </View>
          <View>
            <Text style={tw`font-semibold text-sm text-dark`}>
              {emission.toFixed(2)}
              kg
            </Text>
            <Text style={tw`text-dark font-medium -my-1`}>
              <Text style={tw`text-sm `}>of C0</Text>
              <Text style={tw`text-xs leading-3`}>2e</Text>
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
