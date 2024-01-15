import { useState } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import tw from "../lib/tailwind";
import ActionCard from "./ActionCard";
const { width } = Dimensions.get("screen");
function ActionList() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const sliderData = [
    {
      description:
        "Calculate your houdehold carbon emission by answering few questions.",
      title: "Change to LED buld",
      category: "Electricity",
      sdg: "SDG 6",
    },
    {
      description:
        "A splash screen, also known as a launch screen, is the first screen a user sees when they open your app.",
      title: "Switch to reusable razor",
      category: "Electricity",
      sdg: "SDG 4",
    },
    {
      description:
        "Scrolls to the item at the specified index such that it is positioned in the viewable area",
      title: "Recycle waste",
      category: "Household",
      sdg: "SDG 10",
    },
    {
      description:
        "Start or join campaigns that reduces carbon emissions in your area.",
      title: "Take bus",
      category: "Transport",
      sdg: "SDG 8",
    },
  ];

  return (
    <>
      <ScrollView
        // onScroll={({ nativeEvent }) => onChange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={900}
        // pagingEnabled
        horizontal
        style={tw` flex flex-row gap-x-5   mb-5`}
      >
        <View style={tw`flex flex-row gap-x-3`}>
          {[
            sliderData.map((cardData, index) => (
              <ActionCard
                title={cardData.title}
                category={cardData.category}
                description={cardData.description}
                sdg={cardData.sdg}
                key={cardData.title}
              />
            )),
          ]}
        </View>
      </ScrollView>
    </>
  );
}

export default ActionList;
