import { View, Text, Image, Pressable } from "react-native";
import { useAuthContext } from "../context/providers/AuthProvider";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import tw from "../lib/tailwind";
import { useAuthActions } from "../context/actions/auth_actions";

function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { logOut } = useAuthActions();
  const { state } = useAuthContext();
  // console.log(state);
  return (
    <View
      style={tw`pt-[${insets.top}] pb-[${insets.bottom}] px-4 bg-gray-100 h-full`}
    >
      <View style={tw`py-3 flex flex-row justify-between items-center`}>
        <Text style={tw`font-bold text-2xl text-mainColor`}>
          Hello {state && state.user.name ? state.user.name : "there"}!
        </Text>

        <Pressable onPress={logOut}>
          <View style={tw`w-12 h-12 rounded-full mb-3 bg-transparent`}>
            <Image
              style={tw`w-full h-full max-w-full rounded-full max-h-full bg-transparent`}
              resizeMode="contain"
              source={require("../assets/avatar.png")}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export default HomeScreen;
