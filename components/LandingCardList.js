import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import tw from "../lib/tailwind";
import LandingCard from "../components/LandingCard";

function LandingCardList() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const sliderData = [
    {
      text: "Calculate your houdehold carbon emission by answering few questions.",
      header: "Calculate footprint",
      imgPath: require("../assets/calculate_emission.png"),
    },
    {
      text: "Track the amount of carbon emitted from your daily activities.",
      header: "Track emmission",
      imgPath: require("../assets/track_emmission.png"),
    },
    {
      text: "Take actions that reduces your carbon footprint",
      header: "Take action",
      imgPath: require("../assets/landing_banner.png"),
    },
    {
      text: "Get tips and learn more about green lifestyle",
      header: "Get tips",
      imgPath: require("../assets/tips.png"),
    },
  ];
  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      // divide screen width by the number of x offset
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide !== activeImageIndex) {
        setActiveImageIndex(slide);
      }
    }
  };
  return (
    <>
      <ScrollView
        onScroll={({ nativeEvent }) => onChange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={100}
        pagingEnabled={true}
        horizontal
        style={tw`w-full mb-5`}
      >
        {[
          sliderData.map((cardData, index) => (
            <LandingCard
              text={cardData.text}
              imgPath={cardData.imgPath}
              header={cardData.header}
              key={cardData.header}
            />
          )),
        ]}
      </ScrollView>
      <View
        style={tw`flex flex-row w-full items-center justify-center gap-x-4`}
      >
        {sliderData.map((item, index) => (
          <View
            key={item.header}
            style={tw`h-2 w-2 rounded-full ${
              activeImageIndex === index ? "bg-dark" : "bg-secondaryColor"
            }`}
          ></View>
        ))}
      </View>
    </>
  );
}

export default LandingCardList;
