import { View, Text, Pressable } from "react-native";
import tw from "../lib/tailwind";
import { Badge } from "./Badge";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function ActionCard({ data, isFullWidth = false }) {
  console.log(data, "iii");
  const navigation = useNavigation();
  const { title, category, description, sdg, id, emission, point } = data;
  return (
    <Pressable
      onPress={() => navigation.navigate("ActionDetails", { actionId: id })}
      style={tw`shadow bg-white p-3 rounded-lg  ${
        isFullWidth ? "w-full" : "w-[300px]"
      }`}
    >
      <Text style={tw`font-semibold text-lg mb-2 text-dark`}>{title}</Text>
      <View style={tw`flex flex-row justify-start gap-x-2 mb-3`}>
        <Badge text={category} variant="success" textStyle={tw`capitalize`} />
        <View style={tw`flex gap-x-1 flex-row items-center `}>
          {sdg.map((goal, i) => {
            if (i === 2) {
              return;
            }
            return <Badge key={i} text={`SDG ${goal}`} variant="blue" />;
          })}
        </View>
      </View>
      <Text style={tw`text-mainColor font-normal mb-3`}>
        {description.substring(0, 65)}...
      </Text>
      <View style={tw`flex flex-row justify-between items-center`}>
        <View
          style={tw`flex flex-row gap-x-1 py-1 items-center px-2 bg-[#0d47a1] rounded-full`}
        >
          <Ionicons name={"trophy"} size={16} color="#ffffff" />
          <Text style={tw`text-white font-semibold`}>{point} points</Text>
        </View>
        <View
          style={tw`flex flex-row gap-x-1 py-1 items-center px-2 bg-[#f5b700] rounded-full`}
        >
          <Ionicons name={"cloud-download"} size={16} color="#ffffff" />
          <Text style={tw`text-white`}>
            <Text style={tw`text-sm `}> {emission}kgC0</Text>
            <Text style={tw`text-xs `}>2</Text>
          </Text>
          {/* <Text style={tw`text-white font-semibold`}>
            {val.toFixed(1)}kg saved
          </Text> */}
        </View>
      </View>
    </Pressable>
  );
}

export default ActionCard;
