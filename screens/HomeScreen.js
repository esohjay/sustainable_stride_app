import { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import Header from "../components/Header";
import { useAuthContext } from "../context/providers/AuthProvider";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CustomScrollView } from "../context/providers/ScrollContext";
import tw from "../lib/tailwind";
import { useAuthActions } from "../context/actions/auth_actions";

function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { logOut } = useAuthActions();
  const { state } = useAuthContext();

  // console.log(state);
  return (
    <CustomScrollView>
      <View
        style={tw`pt-[${insets.top}]  flex justify-between px-4 bg-gray-100 h-full overflow-scroll `}
      >
        <View></View>

        <View>
          <Text style={tw`text-2xl text-dark`}>
            {" "}
            at async DeltaCalculator._getChangedDependencies
            :\Users\user\sustainable_stride_app\node_modules\metro\src\DeltaBundler\DeltaCalculator.js:281:42
            at async DeltaCalculator.getDelta{" "}
          </Text>
          <Text style={tw`text-2xl text-dark`}>
            {" "}
            at async DeltaCalculator._getChangedDependencies
            :\Users\user\sustainable_stride_app\node_modules\metro\src\DeltaBundler\DeltaCalculator.js:281:42
            at async DeltaCalculator.getDelta{" "}
          </Text>
          <Text style={tw`text-2xl text-dark`}>
            {" "}
            at async DeltaCalculator._getChangedDependencies
            :\Users\user\sustainable_stride_app\node_modules\metro\src\DeltaBundler\DeltaCalculator.js:281:42
            at async DeltaCalculator.getDelta{" "}
          </Text>
          <Text style={tw`text-2xl text-dark`}>
            {" "}
            at async DeltaCalculator._getChangedDependencies
            :\Users\user\sustainable_stride_app\node_modules\metro\src\DeltaBundler\DeltaCalculator.js:281:42
            at async DeltaCalculator.getDelta{" "}
          </Text>
          <Text style={tw`text-2xl text-dark`}>
            {" "}
            at async DeltaCalculator._getChangedDependencies
            :\Users\user\sustainable_stride_app\node_modules\metro\src\DeltaBundler\DeltaCalculator.js:281:42
            at async DeltaCalculator.getDelta{" "}
          </Text>
          <Text style={tw`text-2xl text-dark`}>
            {" "}
            at async DeltaCalculator._getChangedDependencies
            :\Users\user\sustainable_stride_app\node_modules\metro\src\DeltaBundler\DeltaCalculator.js:281:42
            at async DeltaCalculator.getDelta{" "}
          </Text>
          <Text style={tw`text-2xl text-dark`}>
            {" "}
            at async DeltaCalculator._getChangedDependencies
            :\Users\user\sustainable_stride_app\node_modules\metro\src\DeltaBundler\DeltaCalculator.js:281:42
            at async DeltaCalculator.getDelta{" "}
          </Text>
          <Text style={tw`text-2xl text-dark`}>
            {" "}
            at async DeltaCalculator._getChangedDependencies
            :\Users\user\sustainable_stride_app\node_modules\metro\src\DeltaBundler\DeltaCalculator.js:281:42
            at async DeltaCalculator.getDelta{" "}
          </Text>
          <Text style={tw`text-2xl text-dark`}>
            {" "}
            at async DeltaCalculator._getChangedDependencies
            :\Users\user\sustainable_stride_app\node_modules\metro\src\DeltaBundler\DeltaCalculator.js:281:42
            at async DeltaCalculator.getDelta{" "}
          </Text>
          <Text style={tw`text-2xl text-dark`}>
            {" "}
            at async DeltaCalculator._getChangedDependencies
            :\Users\user\sustainable_stride_app\node_modules\metro\src\DeltaBundler\DeltaCalculator.js:281:42
            at async DeltaCalculator.getDelta{" "}
          </Text>
          <Text style={tw`text-2xl text-dark`}>
            {" "}
            at async DeltaCalculator._getChangedDependencies
            :\Users\user\sustainable_stride_app\node_modules\metro\src\DeltaBundler\DeltaCalculator.js:281:42
            at async DeltaCalculator.getDelta{" "}
          </Text>
          <Text style={tw`text-2xl text-dark`}>
            {" "}
            at async DeltaCalculator._getChangedDependencies
            :\Users\user\sustainable_stride_app\node_modules\metro\src\DeltaBundler\DeltaCalculator.js:281:42
            at async DeltaCalculator.getDelta{" "}
          </Text>
          <Text style={tw`text-2xl text-dark`}>
            {" "}
            at async DeltaCalculator._getChangedDependencies
            :\Users\user\sustainable_stride_app\node_modules\metro\src\DeltaBundler\DeltaCalculator.js:281:42
            at async DeltaCalculator.getDelta{" "}
          </Text>
          <Text style={tw`text-2xl text-dark`}>
            {" "}
            at async DeltaCalculator._getChangedDependencies
            :\Users\user\sustainable_stride_app\node_modules\metro\src\DeltaBundler\DeltaCalculator.js:281:42
            at async DeltaCalculator.getDelta{" "}
          </Text>
          <Text style={tw`text-2xl text-dark`}>
            {" "}
            at async DeltaCalculator._getChangedDependencies
            :\Users\user\sustainable_stride_app\node_modules\metro\src\DeltaBundler\DeltaCalculator.js:281:42
            at async DeltaCalculator.getDelta{" "}
          </Text>
          <Text style={tw`text-2xl text-dark`}>
            {" "}
            at async DeltaCalculator._getChangedDependencies
            :\Users\user\sustainable_stride_app\node_modules\metro\src\DeltaBundler\DeltaCalculator.js:281:42
            at async DeltaCalculator.getDelta{" "}
          </Text>
          <Text style={tw`text-2xl text-dark`}>
            {" "}
            at async DeltaCalculator._getChangedDependencies
            :\Users\user\sustainable_stride_app\node_modules\metro\src\DeltaBundler\DeltaCalculator.js:281:42
            at async DeltaCalculator.getDelta{" "}
          </Text>
          <Text style={tw`text-2xl text-dark`}>
            {" "}
            at async DeltaCalculator._getChangedDependencies
            :\Users\user\sustainable_stride_app\node_modules\metro\src\DeltaBundler\DeltaCalculator.js:281:42
            at async DeltaCalculator.getDelta{" "}
          </Text>
          <Text style={tw`text-2xl text-dark`}>
            {" "}
            at async DeltaCalculator._getChangedDependencies
            :\Users\user\sustainable_stride_app\node_modules\metro\src\DeltaBundler\DeltaCalculator.js:281:42
            at async DeltaCalculator.getDelta{" "}
          </Text>
        </View>
      </View>
    </CustomScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "white",
    padding: 15,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  headerShadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default HomeScreen;
