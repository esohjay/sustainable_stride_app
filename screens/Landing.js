import { View, Text, Image } from "react-native";
import tw from "../lib/tailwind";
import LandingCardList from "../components/LandingCardList";
import { Button } from "../components/UI/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Landing({ navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={tw`pt-[${insets.top}] pb-[${insets.bottom}] bg-gray-50 h-full`}
    >
      <View style={tw`flex justify-center items-center`}>
        <View style={tw`w-full h-20 mb-3 bg-transparent`}>
          <Image
            style={tw`w-full h-full max-w-full max-h-full bg-transparent`}
            resizeMode="contain"
            source={require("../assets/logo.png")}
          />
        </View>
        <LandingCardList />
        <View style={tw`my-5`}>
          <Button
            text={"Get started"}
            textStyle={tw`px-10 py-4`}
            onPress={() => navigation.navigate("Register")}
          />
          <Text
            onPress={() => navigation.navigate("Login")}
            style={tw`text-mainColor underline text-center font-semibold py-3`}
          >
            Already have an account? Log in
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Landing;
