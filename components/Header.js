import React from "react";
import { View, Text, Animated, Easing, StyleSheet } from "react-native";
import { useScroller } from "../context/providers/ScrollContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import useScroller from "../lib/useScroller";
import tw from "../lib/tailwind";

export const Header = ({ screen, children }) => {
  const { titleShowing, opacity } = useScroller();
  const insets = useSafeAreaInsets();
  // const [titleFade] = useState(new Animated.Value(0));

  // useEffect(() => {
  //   titleShowing === false &&
  //     Animated.timing(titleFade, {
  //       toValue: 0,
  //       duration: 200,
  //       useNativeDriver: true,
  //       easing: Easing.sin,
  //     }).start();

  //   titleShowing === true &&
  //     Animated.timing(titleFade, {
  //       toValue: 1,
  //       duration: 200,
  //       useNativeDriver: true,
  //       easing: Easing.sin,
  //     }).start();
  // });

  return (
    <View
      style={[
        // {
        //   ...styles.header,
        //   //   shadowOpacity: opacity,
        // },
        tw`${
          opacity[screen] > 0 ? "shadow-lg" : "shadow-none"
        } bg-gray-50 px-3 min-h-[80px] w-full `,
        tw`pt-[${insets.top}]`,
      ]}
    >
      {children}
      {/* <View style={styles.headerLeft}>
        {props.headerLeft !== undefined && props.headerLeft}
      </View>
      <Animated.View
        style={{
          opacity: titleFade,
          ...styles.headerTitle,
        }}
      >
        <Text style={styles.title}>{props.title}</Text>
      </Animated.View>
      <View style={styles.headerRight}>
        {props.headerRight !== undefined && props.headerRight}
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    display: "flex",
    width: "100%",
    height: 80,

    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#fff",
    // shadowRadius: 0,
    // shadowColor: "gray",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // zIndex: 9,
  },
  headerTitle: {
    display: "flex",
    flexBasis: "33%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  headerLeft: {
    flexBasis: "33%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
  },
  headerRight: {
    flexBasis: "33%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
    color: "blue",
  },
  headerText: {
    textAlign: "center",
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    fontSize: 17,
    fontWeight: "600",
  },
});

export default Header;
