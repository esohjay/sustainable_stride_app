import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../screens/Landing";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Landing">
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
  );
}

export default AuthStack;
