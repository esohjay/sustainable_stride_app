import { View, Text } from "react-native";
import tw from "../lib/tailwind";
import LandingCardList from "../components/LandingCardList";
import { Button } from "../components/UI/Button";

function Register() {
  return (
    <View style={tw`bg-altColor h-full`}>
      <View style={tw`flex pt-5 justify-center items-center`}>
        <Text style={tw`text-mainColor text-3xl font-extrabold`}>
          Sustainability Stride
        </Text>
      </View>
    </View>
  );
}

export default Register;
