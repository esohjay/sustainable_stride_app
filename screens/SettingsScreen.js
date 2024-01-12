import { useState } from "react";
import { View, Text, Pressable, Switch } from "react-native";
import tw from "../lib/tailwind";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CustomScrollView } from "../context/providers/ScrollContext";
import { Button } from "../components/UI/Button";
import { useAuthContext } from "../context/providers/AuthProvider";
import { Ionicons } from "@expo/vector-icons";
import SupportList from "../components/SupportList";

function SettingsScreen({ navigation }) {
  const { state } = useAuthContext();
  const [switchState, setSwitchState] = useState(false);
  const onSwitchChange = () => {
    setSwitchState(!switchState);
  };
  return (
    <CustomScrollView style={tw`bg-gray-50  `} screen="settings">
      <View style={tw`p-5`}>
        <View style={tw`pb-6 border-b border-b-altColor`}>
          <Text style={tw`text-lg font-semibold text-mainColor`}>Profile</Text>
          <Text style={tw`text-xs font-medium text-mainColor mb-3`}>
            View and update update your profile.
          </Text>
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <View
              style={tw`flex flex-row justify-between items-center p-3 bg-white shadow rounded-lg`}
            >
              <View>
                <Text style={tw`text-base text-mainColor font-bold mb-1`}>
                  Olusoji Daramola
                </Text>
                <Text style={tw`text-sm text-dark font-medium mb-1`}>
                  {state?.user?.email}
                </Text>
              </View>
              <Ionicons name={"chevron-forward"} size={30} color="#7d4f50" />
            </View>
          </Pressable>
        </View>
        <View style={tw`pb-6 pt-4 border-b border-b-altColor`}>
          <Text style={tw`text-lg font-semibold text-mainColor`}>
            Preference
          </Text>
          <Text style={tw`text-xs font-medium text-mainColor mb-3`}>
            Set your preferences
          </Text>
          <Pressable onPress={() => console.log(state)}>
            <View
              style={tw`flex flex-row justify-between items-center p-3 bg-white shadow rounded-lg`}
            >
              <Text style={tw`text-base text-mainColor font-bold`}>
                Location
              </Text>
              <Ionicons name={"chevron-forward"} size={30} color="#7d4f50" />
            </View>
          </Pressable>

          <View
            style={tw`flex flex-row justify-between items-center mt-3 p-3 bg-white shadow rounded-lg`}
          >
            <Text style={tw`text-base text-mainColor font-bold`}>
              Notification
            </Text>
            <Switch
              onValueChange={onSwitchChange}
              value={switchState}
              trackColor={{ false: "#767577", true: "#7d4f50" }}
              // thumbColor={switchState ? "#ffffff" : "#eae0d5"}
            />
          </View>
        </View>
        <View style={tw`p-5 mt-4 bg-white rounded-lg shadow flex gap-y-6`}>
          <SupportList text={"About"} icon={"information-circle"} />
          <SupportList text={"Share with friend"} icon={"people"} />
          <SupportList text={"Send us feedback"} icon={"chatbox-ellipses"} />
          <SupportList text={"Help"} icon={"help-circle"} />
          <SupportList text={"Logout"} icon={"log-out"} />
        </View>
      </View>
    </CustomScrollView>
  );
}

export default SettingsScreen;
