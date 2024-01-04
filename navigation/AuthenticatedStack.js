import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { setActiveRoute } from "../lib/setActiveRoute";
import HomeScreen from "../screens/HomeScreen";
import ActScreen from "../screens/ActScreen";
import EstimateScreen from "../screens/EstimateScreen";
import CampaignScreen from "../screens/CampaignScreen";
import TrackScreen from "../screens/TrackScreen";
import { useAuthContext } from "../context/providers/AuthProvider";
import Header from "../components/Header";
import HomeHeader from "../components/HomeHeader";
import tw from "../lib/tailwind";

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
              <Header>
                <HomeHeader />
              </Header>
            ),
          }}
        />
        <Tab.Screen name="Estimate" component={EstimateScreen} />
        <Tab.Screen name="Track" component={TrackScreen} />
        <Tab.Screen name="Act" component={ActScreen} />
        <Tab.Screen name="Campaign" component={CampaignScreen} />
      </Tab.Navigator>
    </>
  );
}

export default AuthenticatedStack;
