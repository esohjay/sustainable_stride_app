import { View, Text } from "react-native";
import tw from "../lib/tailwind";
import LandingCardList from "../components/LandingCardList";
import { Button } from "../components/UI/Button";

function Landing() {
  return (
    <View style={tw`bg-altColor h-full`}>
      <View style={tw`flex pt-20 justify-center items-center`}>
        <Text style={tw`text-mainColor text-3xl font-extrabold`}>
          Sustainability Stride
        </Text>
        <LandingCardList />
        <View style={tw`my-5`}>
          <Button text={"Get started"} textStyle={tw`px-10 py-4`} />
        </View>
      </View>
    </View>
  );
}

export default Landing;
