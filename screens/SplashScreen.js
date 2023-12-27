import React, { useState } from "react";
import { useAuthContext } from "../context/providers/AuthProvider";
import tw from "../lib/tailwind";
import { View, Image } from "react-native";

import { auth } from "../lib/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthActions } from "../context/actions/auth_actions";

const SplashScreen = ({ navigation }) => {
  const { setUser } = useAuthActions();
  const { state } = useAuthContext();
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      navigation.replace("HomeScreen");
    } else {
      // User is signed out
      navigation.replace("Landing");
    }
  });

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
