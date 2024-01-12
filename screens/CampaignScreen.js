import { View, Text } from "react-native";
import tw from "../lib/tailwind";
import { CustomScrollView } from "../context/providers/ScrollContext";
import { Button } from "../components/UI/Button";
import TeamCard from "../components/TeamCard";

function CampaignScreen() {
  return (
    <CustomScrollView style={tw`bg-gray-50  `} screen="campaign">
      <View style={tw`p-5`}>
        <Text style={tw`font-normal text-sm mb-2`}>
          Join and explore campaigns to improve your positive impact!
        </Text>
        <View style={tw`flex flex-row items-start`}>
          <Button text={"Start a Campaign"} icon={"add-circle"} />
        </View>
        <View style={tw`py-5`}>
          <Text style={tw`text-xl text-mainColor font-bold mb-3`}>
            Your teams
          </Text>
          <View style={tw`flex gap-y-3 `}>
            {/* Change to flatlist */}
            {[...Array(2)].map((_, i) => (
              <TeamCard
                key={i}
                name={"Earth lover"}
                description={
                  'On iOS this includes a label next to the button, which shows the title of the previous screen when the title fits in the available space, otherwise it says "Back".'
                }
                membersCount={180}
                showBtn={false}
                imgPath={require("../assets/login.png")}
              />
            ))}
          </View>
        </View>
        <View style={tw`py-5`}>
          <Text style={tw`text-xl text-mainColor font-bold mb-3`}>
            Campaigns
          </Text>
          <View style={tw`flex gap-y-3 `}>
            {/* Change to flatlist */}
            {[...Array(5)].map((_, i) => (
              <TeamCard
                key={i}
                name={"Earth lover"}
                description={
                  'On iOS this includes a label next to the button, which shows the title of the previous screen when the title fits in the available space, otherwise it says "Back".'
                }
                membersCount={Math.floor(Math.random() * 1000 + 1)}
                showBtn={true}
                imgPath={require("../assets/track_emmission.png")}
              />
            ))}
          </View>
        </View>
      </View>
    </CustomScrollView>
  );
}

export default CampaignScreen;
