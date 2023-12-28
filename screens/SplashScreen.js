import React from "react";
import tw from "../lib/tailwind";
import { View, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={tw`h-full flex justify-center items-center bg-altColor p-5`}>
      <View style={tw`w-full h-24 mb-3 bg-transparent`}>
        <Image
          style={tw`w-full h-full max-w-full max-h-full bg-transparent`}
          resizeMode="contain"
          source={require("../assets/logo.png")}
        />
      </View>
      {/* <ActivityIndicator
          animating={animating}
          color="#FFFFFF"
          size="large"
          style={styles.activityIndicator}
        /> */}
    </View>
  );
};

export default SplashScreen;
