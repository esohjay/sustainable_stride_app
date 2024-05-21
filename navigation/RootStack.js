import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import tw from "../lib/tailwind";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "../context/providers/AuthProvider";
import AuthStack from "./AuthStack";
import SplashScreen from "../screens/SplashScreen";
import EstimateScreen from "../screens/EstimateScreen";
import AuthenticatedStack from "./AuthenticatedStack";
import { useAuthActions } from "../context/actions/auth_actions";
import { auth } from "../lib/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Header from "../components/Headers/Header";
import EstimateHeader from "../components/Headers/EstimateHeader";
import Chat from "../screens/Chat";
import AllCampaignsScreen from "../screens/AllCampaignsScreen";
import SearchCampaign from "../screens/SearchCampaignScreen";
import CampaignDetails from "../screens/CampaignDetails";
import ProfileHeader from "../components/Headers/ProfileHeader";
import BackButton from "../components/BackButton";
import ProfileScreen from "../screens/ProfileScreen";
import AllActionsScreen from "../screens/AllActionsScreen";
import SurveyScreen from "../screens/SurveryScreen";
import SurveyHeader from "../components/Headers/SurveyHeader";
import SurveyStack from "./SurveyStack";
import About from "../screens/AboutScreen";
import ActDetails from "../screens/ActDetails";
import SearchAction from "../screens/SearchActionsScreen";
import useGetProfile from "../lib/useGetProfile";
// import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  MontserratAlternates_100Thin,
  MontserratAlternates_200ExtraLight,
  MontserratAlternates_300Light,
  MontserratAlternates_400Regular,
  MontserratAlternates_500Medium,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_700Bold,
  MontserratAlternates_800ExtraBold,
  MontserratAlternates_900Black,
} from "@expo-google-fonts/montserrat-alternates";

const Stack = createNativeStackNavigator();
// SplashScreen.preventAutoHideAsync();
function RootStack() {
  const [isLoading, setIsLoading] = useState(true);
  const { profile } = useGetProfile();
  const { state } = useAuthContext();
  const { setUser, getProfile } = useAuthActions();
  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_100Thin,

    MontserratAlternates_200ExtraLight,

    MontserratAlternates_300Light,

    MontserratAlternates_400Regular,

    MontserratAlternates_500Medium,

    MontserratAlternates_600SemiBold,

    MontserratAlternates_700Bold,

    MontserratAlternates_800ExtraBold,

    MontserratAlternates_900Black,
  });

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser({
          id: user.uid,
          email: user.email,
          name: user.displayName,
          phone: user.phoneNumber,
        });
        // getProfile();
        // setIsLoading(false);
        // console.log(process.env.EXPO_PUBLIC_BACKEND_URL);
        // navigation.replace("HomeScreen");
      } else {
        setIsLoading(false);
      }
    });
  }, []);
  useEffect(() => {
    if (state.user && state.profileFetched) {
      setIsLoading(false);
    }
  }, [state.user, state.profileFetched]);
  if (!fontsLoaded && !fontError) {
    return null;
  }
  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        /> */}
        {state.isAuthenticated ? (
          <Stack.Group>
            <Stack.Screen
              name="HomeScreen"
              component={AuthenticatedStack}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="SearchCampaign"
              component={SearchCampaignScreen}
              options={{
                header: () => (
                  <Header screen="searchCampaign">
                    <SearchCampaignHeader />
                  </Header>
                ),
              }}
            /> */}
            <Stack.Screen
              name="Estimate"
              component={EstimateScreen}
              options={{
                header: () => (
                  <Header screen="estimate">
                    <EstimateHeader />
                  </Header>
                ),
              }}
            />
            <Stack.Screen
              name="Survey"
              component={SurveyStack}
              options={{
                header: () => (
                  <Header screen="survey">
                    <SurveyHeader />
                  </Header>
                ),
              }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                // header: () => (
                //   <Header screen="profile">
                //     <ProfileHeader />
                //   </Header>
                // ),
                headerTintColor: "#7d4f50",
                headerTitleStyle: {
                  fontWeight: "800",
                },
                headerLeft: () => <BackButton />,
              }}
            />
            <Stack.Screen
              name="About"
              component={About}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ActionDetails"
              component={ActDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CampaignDetails"
              component={CampaignDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchAction"
              component={SearchAction}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AllActions"
              component={AllActionsScreen}
              options={{
                headerTintColor: "#7d4f50",
                headerTitleStyle: {
                  fontWeight: "800",
                },
                headerLeft: () => <BackButton />,
                headerTitle: () => (
                  <Text style={tw`font-extrabold text-xl text-mainColor `}>
                    All actions
                  </Text>
                ),
              }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{
                headerTintColor: "#7d4f50",
                headerTitleStyle: {
                  fontWeight: "800",
                },
                headerLeft: () => <BackButton />,
              }}
            />
            <Stack.Screen
              name="SearchCampaign"
              component={SearchCampaign}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AllCampaigns"
              component={AllCampaignsScreen}
              options={{
                headerTintColor: "#7d4f50",
                headerTitleStyle: {
                  fontWeight: "800",
                },
                headerLeft: () => <BackButton />,
                headerTitle: () => (
                  <Text style={tw`font-extrabold text-xl text-mainColor `}>
                    All campaigns
                  </Text>
                ),
              }}
            />
          </Stack.Group>
        ) : (
          <Stack.Screen
            name="AuthScreen"
            component={AuthStack}
            options={{
              headerShown: false,
              animationTypeForReplace: state.isSignout ? "pop" : "push",
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
