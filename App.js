import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useSurveryActions } from "./context/actions/survey_actions";
import { useTrackActions } from "./context/actions/track_actions";
import { useAppContext } from "./context/store";
import ExpensesContextProvider from "./context/store";

export default function App() {
  return (
    <ExpensesContextProvider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ExpensesContextProvider>
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
