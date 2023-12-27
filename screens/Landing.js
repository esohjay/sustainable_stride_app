import { View, Text, Image } from "react-native";
import tw from "../lib/tailwind";
import LandingCardList from "../components/LandingCardList";
import { Button } from "../components/UI/Button";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebaseConfig";
import { useAuthContext } from "../context/providers/AuthProvider";

function Landing({ navigation }) {
  const { state } = useAuthContext();
  console.log(state);
  // const auth = getAuth();

  // console.log(auth.currentUser);
  // console.log(auth.currentUser);
  return (
    <View style={tw`bg-gray-100 h-full`}>
      <View style={tw`flex pt-20 justify-center items-center`}>
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
