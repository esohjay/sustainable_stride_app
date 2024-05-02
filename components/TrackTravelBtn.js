import React from "react";
import { View } from "react-native";
import { Button } from "./UI/Button";
import tw from "../lib/tailwind";

export default function TrackTravelBtn({ mode, currentMode, setMode }) {
  return (
    <View>
      <Button
        variant={currentMode === mode ? "light" : "default"}
        height="30"
        textStyle={tw`text-sm`}
        text={mode}
        onPress={() => setMode(mode)}
      />
    </View>
  );
}
