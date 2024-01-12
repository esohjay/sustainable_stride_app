import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { setActiveRoute } from "../lib/setActiveRoute";
import HomeScreen from "../screens/HomeScreen";
import ActScreen from "../screens/ActScreen";
import CampaignScreen from "../screens/CampaignScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TrackScreen from "../screens/TrackScreen";
import { useAuthContext } from "../context/providers/AuthProvider";
import Header from "../components/Headers/Header";
import HomeHeader from "../components/Headers/HomeHeader";
import TrackHeader from "../components/Headers/TrackHeader";
import CampaignHeader from "../components/Headers/CampaignHeader";
import SettingsHeader from "../components/Headers/SettingsHeader";

const Tab = createBottomTabNavigator();
function AuthenticatedStack() {
  const { state } = useAuthContext();
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = setActiveRoute(route.name, focused);

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#7d4f50",
          tabBarInactiveTintColor: "#533e2d",

          tabBarLabelStyle: {},
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
            header: () => (
              <Header screen="home">
                <HomeHeader />
              </Header>
            ),
          }}
        />

        <Tab.Screen
          name="Track"
          component={TrackScreen}
          options={{
            header: () => (
              <Header screen="track">
                <TrackHeader />
              </Header>
            ),
          }}
        />
        <Tab.Screen name="Act" component={ActScreen} />
        <Tab.Screen
          name="Campaign"
          component={CampaignScreen}
          options={{
            header: () => (
              <Header screen="campaign">
                <CampaignHeader />
              </Header>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            header: () => (
              <Header screen="settings">
                <SettingsHeader />
              </Header>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default AuthenticatedStack;
