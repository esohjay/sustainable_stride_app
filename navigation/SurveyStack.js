import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Household from "../screens/Survey/household/Household";
import Energy from "../screens/Survey/energy/Energy";
import Flight from "../screens/Survey/flight/Flight";
import Car from "../screens/Survey/car/Car";
import Bike from "../screens/Survey/bike/Bike";
import PublicTransport from "../screens/Survey/public_transport/PublicTransport";
import Diet from "../screens/Survey/diet/Diet";
import Goods from "../screens/Survey/goods/Goods";
import Services from "../screens/Survey/services/Services";

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
      <Stack.Screen
        name="Flight"
        component={Flight}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Car"
        component={Car}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bike"
        component={Bike}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PublicTransport"
        component={PublicTransport}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Diet"
        component={Diet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Goods"
        component={Goods}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Services"
        component={Services}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default SurveyStack;
