import React from "react";
import { View, Text, Alert, Pressable, ActivityIndicator } from "react-native";
import tw from "../lib/tailwind";
import { formatText } from "../lib/formatTrackText";
import { MaterialIcons } from "@expo/vector-icons";
import { useTrackActions } from "../context/actions/track_actions";
import { useTrackContext } from "../context/providers/TrackProvider";

export default function ActivityCard({ data, category }) {
  const { deleteActivity } = useTrackActions();
  const { setToBeDeleted, state, toBeDelete } = useTrackContext();
  const { activity, amount, emission, value, mode, unit, id } = data;
  const handleDelete = () => {
    setToBeDeleted({ ...data, category });
    deleteActivity({ ...data, category });
  };
  const createAlert = () =>
    Alert.alert(
      "Delete activity?",
      "This activity will be deleted permanently.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Delete", onPress: handleDelete },
      ]
    );
  return (
    <View style={{ flex: 1 }}>
      {activity ? (
        <View
          style={tw`flex flex-row justify-between gap-x-5  bg-white shadow  rounded-md p-3`}
        >
          <View style={tw`flex gap-y-5`}>
            <Text style={tw`capitalize font-semibold text-base text-mainColor`}>
              {formatText(activity)}
            </Text>
            <Text style={tw`font-medium text-mainColor text-sm`}>
              £{amount}
            </Text>
          </View>
          <View style={tw`flex gap-y-3 items-end`}>
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
            <Pressable
              onPress={createAlert}
              disabled={state.deletingActivity || state.activityDeleted}
            >
              {(state.deletingActivity || state.activityDeleted) &&
              id === toBeDelete.id ? (
                <ActivityIndicator
                  animating={true}
                  color="#7d4f50"
                  size="small"
                />
              ) : (
                <MaterialIcons name="delete-outline" size={18} color="red" />
              )}
            </Pressable>
          </View>
        </View>
      ) : (
        <View
          style={tw`flex flex-row justify-between gap-x-5 bg-white shadow  rounded-md p-3`}
        >
          <View style={tw`flex gap-y-5`}>
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
          <View style={tw`flex gap-y-3 items-end`}>
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
            <Pressable
              onPress={createAlert}
              disabled={state.deletingActivity || state.activityDeleted}
            >
              {(state.deletingActivity || state.activityDeleted) &&
              id === toBeDelete.id ? (
                <ActivityIndicator
                  animating={true}
                  color="#7d4f50"
                  size="small"
                />
              ) : (
                <MaterialIcons name="delete-outline" size={18} color="red" />
              )}
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}
