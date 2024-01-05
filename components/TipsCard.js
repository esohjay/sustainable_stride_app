import { View, Text } from "react-native";
import tw from "../lib/tailwind";
import { Badge } from "./Badge";
import { Ionicons } from "@expo/vector-icons";

function TipsCard({ title, category, description }) {
  return (
    <View style={tw`shadow bg-white p-3 rounded-lg w-[300px]`}>
      <Text style={tw`font-semibold text-lg mb-2 text-dark`}>{title}</Text>
      <View style={tw`flex flex-row justify-start mb-3`}>
        <Badge text={category} variant="success" />
      </View>
      <Text style={tw`text-mainColor font-normal mb-3`}>{description}</Text>
      <View style={tw`flex flex-row justify-between items-center`}>
        <Ionicons name={"bookmark-outline"} size={24} color="#7d4f50" />
        <Text style={tw`text-dark`}>
          <Text style={tw`text-base leading-10`}> 10.5kgC0</Text>
          <Text style={tw`text-xs leading-3`}>2</Text>
        </Text>
      </View>
    </View>
  );
}

export default TipsCard;
