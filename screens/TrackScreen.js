import { View, Text } from "react-native";
import tw from "../lib/tailwind";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CustomScrollView } from "../context/providers/ScrollContext";

function TrackScreen() {
  const insets = useSafeAreaInsets();
  return (
    <CustomScrollView
      style={tw`bg-gray-50 p-5 pb-[${insets.bottom}]`}
      screen="track"
    >
      <Text>TrackScreen</Text>
    </CustomScrollView>
  );
}

export default TrackScreen;
