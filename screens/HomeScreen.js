import { View, Text } from "react-native";
import { useAuthContext } from "../context/providers/AuthProvider";

function HomeScreen() {
  const { state } = useAuthContext();
  // console.log(state);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}

export default HomeScreen;
