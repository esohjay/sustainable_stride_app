import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ScrollContextProvider from "./context/providers/ScrollContext";
import tw from "./lib/tailwind";
import { useDeviceContext } from "twrnc";
import Landing from "./screens/Landing";
import Register from "./screens/Register";
import Login from "./screens/Login";
import SplashScreen from "./screens/SplashScreen";

import { useSurveryActions } from "./context/actions/survey_actions";
import { useTrackActions } from "./context/actions/track_actions";
import { useAppContext } from "./context/store";
import ExpensesContextProvider from "./context/store";
import { AuthProvider } from "./context/providers/AuthProvider";
import HomeStack from "./navigation/AuthenticatedStack";
import RootStack from "./navigation/RootStack";

const Stack = createNativeStackNavigator();

export default function App() {
  useDeviceContext(tw);
  return (
    <SafeAreaProvider>
      <ScrollContextProvider>
        <StatusBar style="dark" />
        <AuthProvider>
          <RootStack />
          {/* <NavigationContainer>
          <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeStack}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
              // options={{
              //   headerShown: true,
              //   headerStyle: { backgroundColor: "rgb(243 244 246)" },
              //   title: "",
              //   headerTintColor: "#533e2d",
              //   headerShadowVisible: false,
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer> */}
        </AuthProvider>
      </ScrollContextProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
