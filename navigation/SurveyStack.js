import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Household from "../screens/Survey/household/Household";
import Energy from "../screens/Survey/energy/Energy";

const Stack = createNativeStackNavigator();
function SurveyStack() {
  return (
    <Stack.Navigator initialRouteName="Household">
      <Stack.Screen
        name="Household"
        component={Household}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Energy"
        component={Energy}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default SurveyStack;
