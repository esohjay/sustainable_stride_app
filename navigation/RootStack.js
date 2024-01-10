import React, { useEffect, useState, useCallback } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "../context/providers/AuthProvider";
import AuthStack from "./AuthStack";
import SplashScreen from "../screens/SplashScreen";
import EstimateScreen from "../screens/EstimateScreen";
import AuthenticatedStack from "./AuthenticatedStack";
import { useAuthActions } from "../context/actions/auth_actions";
import { auth } from "../lib/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Header from "../components/Headers/Header";
import EstimateHeader from "../components/Headers/EstimateHeader";
// import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  MontserratAlternates_100Thin,
  MontserratAlternates_200ExtraLight,
  MontserratAlternates_300Light,
  MontserratAlternates_400Regular,
  MontserratAlternates_500Medium,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_700Bold,
  MontserratAlternates_800ExtraBold,
  MontserratAlternates_900Black,
} from "@expo-google-fonts/montserrat-alternates";

const Stack = createNativeStackNavigator();
// SplashScreen.preventAutoHideAsync();
function RootStack() {
  const [isLoading, setIsLoading] = useState(true);
  const { state } = useAuthContext();
  const { setUser } = useAuthActions();
  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_100Thin,

    MontserratAlternates_200ExtraLight,

    MontserratAlternates_300Light,

    MontserratAlternates_400Regular,

    MontserratAlternates_500Medium,

    MontserratAlternates_600SemiBold,

    MontserratAlternates_700Bold,

    MontserratAlternates_800ExtraBold,

    MontserratAlternates_900Black,
  });

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
  if (!fontsLoaded && !fontError) {
    return null;
  }
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
          <Stack.Group>
            <Stack.Screen
              name="HomeScreen"
              component={AuthenticatedStack}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Estimate"
              component={EstimateScreen}
              options={{
                header: () => (
                  <Header screen="estimate">
                    <EstimateHeader />
                  </Header>
                ),
              }}
            />
          </Stack.Group>
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
