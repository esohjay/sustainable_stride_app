import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
import HomeStack from "./navigation/HomeStack";

const Stack = createNativeStackNavigator();

export default function App() {
  useDeviceContext(tw);
  return (
    <>
      <StatusBar style="auto" />
      <AuthProvider>
        <NavigationContainer>
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
        </NavigationContainer>
      </AuthProvider>
    </>
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
