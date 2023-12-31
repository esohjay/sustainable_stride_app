import { useState } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import tw from "../lib/tailwind";
import LandingCard from "../components/LandingCard";

const { width } = Dimensions.get("screen");
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
      text: "Start or join campaigns that reduces carbon emissions in your area.",
      header: "Join campaigns",
      imgPath: require("../assets/campaign.png"),
    },
  ];
  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      // divide screen width by the number of x offset
      const slide = Math.floor(
        Math.floor(nativeEvent.contentOffset.x) / Math.floor(width)
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
        scrollEventThrottle={900}
        pagingEnabled
        horizontal
        style={tw`w-[${width}px]  mb-5`}
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
