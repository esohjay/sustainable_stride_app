import { View, Text } from "react-native";
import tw from "../lib/tailwind";
import { Badge } from "./Badge";
import { Ionicons } from "@expo/vector-icons";

function ActionCard({ title, category, description, sdg }) {
  const val = Math.random() * 100 + 1;
  return (
    <View style={tw`shadow bg-white p-3 rounded-lg w-[300px]`}>
      <Text style={tw`font-semibold text-lg mb-2 text-dark`}>{title}</Text>
      <View style={tw`flex flex-row justify-start gap-x-2 mb-3`}>
        <Badge text={category} variant="success" />
        <Badge text={sdg} variant="blue" />
      </View>
      <Text style={tw`text-mainColor font-normal mb-3`}>{description}</Text>
      <View style={tw`flex flex-row justify-between items-center`}>
        <View
          style={tw`flex flex-row gap-x-1 py-1 items-center px-2 bg-[#0d47a1] rounded-full`}
        >
          <Ionicons name={"trophy"} size={16} color="#ffffff" />
          <Text style={tw`text-white font-semibold`}>
            {Math.floor(Math.random() * 20 + 1)} points
          </Text>
        </View>
        <View
          style={tw`flex flex-row gap-x-1 py-1 items-center px-2 bg-[#f5b700] rounded-full`}
        >
          <Ionicons name={"cloud-download"} size={16} color="#ffffff" />
          <Text style={tw`text-white`}>
            <Text style={tw`text-sm `}> {val.toFixed(1)}kgC0</Text>
            <Text style={tw`text-xs `}>2</Text>
          </Text>
          {/* <Text style={tw`text-white font-semibold`}>
            {val.toFixed(1)}kg saved
          </Text> */}
        </View>
      </View>
    </View>
  );
}

export default ActionCard;
