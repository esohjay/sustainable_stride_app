import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "../context/providers/AuthProvider";
import AuthStack from "./AuthStack";
import SplashScreen from "../screens/SplashScreen";
import AuthenticatedStack from "./AuthenticatedStack";
import { useAuthActions } from "../context/actions/auth_actions";
import { auth } from "../lib/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const Stack = createNativeStackNavigator();
function RootStack() {
  const [isLoading, setIsLoading] = useState(true);
  const { state } = useAuthContext();
  const { setUser } = useAuthActions();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
        // navigation.replace("HomeScreen");
      } else {
        setIsLoading(false);
      }
    });
  }, []);
  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        /> */}
        {state.isAuthenticated ? (
          <Stack.Screen
            name="HomeScreen"
            component={AuthenticatedStack}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="AuthScreen"
            component={AuthStack}
            options={{
              headerShown: false,
              animationTypeForReplace: state.isSignout ? "pop" : "push",
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
