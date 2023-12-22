import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tw from "./lib/tailwind";
import { useDeviceContext } from "twrnc";
import Landing from "./screens/Landing";

import { useSurveryActions } from "./context/actions/survey_actions";
import { useTrackActions } from "./context/actions/track_actions";
import { useAppContext } from "./context/store";
import ExpensesContextProvider from "./context/store";

const Stack = createNativeStackNavigator();

export default function App() {
  useDeviceContext(tw);
  return (
    <>
      <StatusBar style="auto" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
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
