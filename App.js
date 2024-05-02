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
import { SurveyProvider } from "./context/providers/SurveyProvider";
import { TrackProvider } from "./context/providers/TrackProvider";
import HomeStack from "./navigation/AuthenticatedStack";
import RootStack from "./navigation/RootStack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const Stack = createNativeStackNavigator();

export default function App() {
  useDeviceContext(tw);
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <SurveyProvider>
          <TrackProvider>
            <ScrollContextProvider>
              <GestureHandlerRootView style={{ flex: 1 }}>
                <BottomSheetModalProvider>
                  <StatusBar style="dark" />
                  <RootStack />
                </BottomSheetModalProvider>
              </GestureHandlerRootView>
            </ScrollContextProvider>
          </TrackProvider>
        </SurveyProvider>
      </AuthProvider>
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
