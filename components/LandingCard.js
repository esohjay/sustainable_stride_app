import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import tw from "../lib/tailwind";

const WIDTH = Dimensions.get("screen").width;

function LandingCard({ header, text, imgPath }) {
  return (
    <View style={tw`bg-transparent flex items-center w-[${WIDTH}px]`}>
      <View style={tw`flex justify-center w-full items-center px-12 pt-7`}>
        <View style={tw`w-full h-64 mb-3 bg-transparent`}>
          <Image
            style={tw`w-full h-full max-w-full max-h-full bg-transparent`}
            resizeMode="contain"
            source={imgPath}
          />
        </View>
        <Text style={tw`text-mainColor text-2xl font-bold mb-1`}>{header}</Text>
        <Text style={tw`text-center text-dark text-base font-medium`}>
          {text}
        </Text>
      </View>
    </View>
  );
}

export default LandingCard;
