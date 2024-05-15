import { useEffect, useCallback } from "react";
import { View, Text, Image, StyleSheet, Linking, Alert } from "react-native";
import { useAuthContext } from "../context/providers/AuthProvider";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CustomScrollView } from "../context/providers/ScrollContext";
// import { CustomScrollView } from "../components/CustomScrollView";
import tw from "../lib/tailwind";
import { useAuthActions } from "../context/actions/auth_actions";
import AchievementStat from "../components/AchievementStat";
import ActionsList from "../components/ActionsList";
import CampaignList from "../components/CampaignList";
import { Button } from "../components/UI/Button";
import { Foundation } from "@expo/vector-icons";
import useShareHandler from "../lib/useShareHandler";

function HomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const onShare = useShareHandler();
  const { getProfile } = useAuthActions();
  const { state } = useAuthContext();
  const { profile } = state;
  useEffect(() => {
    if (!profile) {
      getProfile();
    }
  }, [profile]);
  const handleOpenLink = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(
      "https://greenspace-explorer.vercel.app/"
    );

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL("https://greenspace-explorer.vercel.app/");
    } else {
      Alert.alert(
        `Don't know how to open this URL: https://greenspace-explorer.vercel.app/`
      );
    }
  }, []);

  return (
    <CustomScrollView
      style={tw`bg-gray-50 p-5 pb-[${insets.bottom}]`}
      screen="home"
    >
      <View style={tw`py-3`}>
        {profile && profile.totalEmission ? (
          <View style={tw`mb-7`}>
            <View style={tw`w-full h-44 rounded-lg relative bg-white shadow`}>
              <Image
                style={tw`h-full max-h-full absolute top-0 left-0 rounded-lg flex max-w-full w-full`}
                resizeMode="cover"
                source={{
                  uri: "https://cdn.pixabay.com/photo/2018/04/04/13/38/nature-3289812_1280.jpg",
                }}
              />
              <View
                style={tw`h-full w-full flex items-center p-3 rounded-lg bg-black bg-opacity-60`}
              >
                <Text style={tw`text-primaryLight font-bold text-2xl  `}>
                  {(profile.totalEmission / 1000).toFixed(2)} tonnes
                </Text>
                <Text style={tw`text-primaryLight font-bold text-sm mb-3 `}>
                  (Estimated footprint)
                </Text>
                <Text
                  style={tw`text-altColor font-semibold mb-3 text-center w-3/4`}
                >
                  View more details about your carbon footprint
                </Text>
                <Button
                  text={"View"}
                  icon={"paw"}
                  variant="light"
                  onPress={() => navigation.navigate("Estimate")}
                />
              </View>
            </View>
          </View>
        ) : (
          <View
            style={tw`flex flex-row gap-3 w-full p-5 items-center shadow bg-white rounded-lg`}
          >
            <View style={tw`h-20 mb-3 bg-transparent w-3/12`}>
              <Image
                style={tw`w-full h-full max-w-full max-h-full bg-transparent`}
                resizeMode="contain"
                source={require("../assets/Analyze-amico.png")}
              />
            </View>
            <View style={tw` w-9/12`}>
              <Text style={tw`font-semibold text-lg text-mainColor mb-1`}>
                Estimate footprint
              </Text>
              <Text style={tw`text-dark mb-3 font-normal`}>
                Take a quick survey to estimate how much carbon you emit yearly.
              </Text>
              <View style={tw`flex items-start`}>
                <Button
                  text={"Start now"}
                  icon={"paw"}
                  onPress={() => navigation.navigate("Survey")}
                />
              </View>
            </View>
          </View>
        )}
      </View>
      <View style={tw`py-3`}>
        <Text style={tw`text-mainColor font-bold mb-5 text-xl`}>Campaigns</Text>
        <CampaignList />
        <View style={tw`h-[1px] bg-altColor w-full my-3`}></View>
        <Text style={tw`text-dark font-medium mb-1`}>
          Want to start a campaign?
        </Text>
        <Text
          onPress={() => navigation.navigate("Campaign")}
          style={tw`text-base font-semibold text-dark`}
        >
          Start campaign
        </Text>
      </View>
      {/* <View style={tw`relative py-3`}>
        <Text style={tw`text-mainColor font-bold mb-5 text-xl`}>
          My achievements{" "}
        </Text>
        <View style={tw`relative px-3 py-5 shadow bg-white rounded-lg`}>
          <View
            style={tw`h-20 mb-3 bg-transparent w-20 absolute right-0 top-0`}
          >
            <Image
              style={tw`w-full h-full max-w-full max-h-full bg-transparent`}
              resizeMode="contain"
              source={require("../assets/achievement.png")}
            />
          </View>
          <Text style={tw`text-dark font-semibold mb-1 text-base`}>
            My impact
          </Text>
          <View style={tw`h-1 w-2/5 bg-altColor mb-2`}></View>
          <Text style={tw`w-3/4 font-normal mb-5`}>
            Yo {state?.user?.name || profile?.firstName}! This is what you have
            achieved 🏆 with CarbonLog so far.
          </Text>
          <Text style={tw`text-dark font-semibold mb-3 text-base`}>
            Achievements
          </Text>
          <View style={tw`flex flex-row justify-between mb-5 w-full`}>
            <AchievementStat stat={0} type={"KgCO2e"} icon={"cloudy"} />
            <AchievementStat stat={0} type={"Actions"} icon={"medal"} />
          </View>
          <View style={tw`flex flex-row justify-between mb-5 w-full`}>
            <AchievementStat stat={0} type={"Points"} icon={"aperture"} />
            <AchievementStat stat={0} type={"Tracking"} icon={"speedometer"} />
          </View>
          <Text style={tw`text-dark font-semibold mb-2 text-base`}>Badges</Text>
          <View style={tw`flex flex-row items-center gap-x-6`}>
            <View
              style={tw`h-12 bg-transparent w-12 rounded-full border-2 border-secondaryAlt`}
            >
              <Image
                style={tw`w-full h-full max-w-full max-h-full bg-transparent`}
                resizeMode="contain"
                source={require("../assets/quality.png")}
              />
            </View>
            <Text style={tw`text-dark font-normal w-3/4`}>
              Keep using the app to unlock badges!
            </Text>
          </View>
        </View>
      </View> */}
      <View style={tw`py-2`}>
        <View
          style={tw`flex flex-row items-center justify-between mb-1 w-full`}
        >
          <Text style={tw`text-mainColor font-bold text-xl`}>Actions</Text>
          <Text style={[tw`text-secondaryAlt text-base font-normal`]}>
            See all
          </Text>
        </View>
        <ActionsList />
      </View>
      <View style={tw`mb-7`}>
        <View style={tw`w-full h-44 rounded-lg relative bg-white shadow`}>
          <Image
            style={tw`h-full max-h-full absolute top-0 left-0 rounded-lg flex max-w-full w-full`}
            resizeMode="cover"
            source={{
              uri: "https://cdn.pixabay.com/photo/2017/09/20/06/27/bridge-2767545_1280.jpg",
            }}
          />
          <View
            style={tw`h-full w-full flex items-center p-3 rounded-lg bg-black bg-opacity-60`}
          >
            <Text style={tw`text-primaryLight font-bold text-2xl mb-3 `}>
              Did you know?
            </Text>
            <Text
              style={tw`text-altColor font-semibold mb-3 text-center w-3/4`}
            >
              Regular visits to greenspaces improves your mental health.
            </Text>
            <Button
              text={"Explore"}
              icon={"rocket"}
              variant="light"
              onPress={handleOpenLink}
            />
          </View>
        </View>
      </View>
      <View style={tw`pb-10`}>
        <View style={tw`bg-white shadow rounded-lg p-5 `}>
          <Text style={tw`text-xl font-bold mb-2 text-mainColor`}>
            More is better
          </Text>
          <Text style={tw` font-medium mb-2 text-mainColor`}>
            Make a big impact by helping others reduce their carbon emission.
          </Text>
          <Button text={"Invite friends"} onPress={onShare} />
        </View>
      </View>
    </CustomScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "white",
    padding: 15,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  headerShadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default HomeScreen;
