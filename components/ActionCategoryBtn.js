import React from "react";
import { ScrollView, View } from "react-native";
import { Button } from "./UI/Button";
import tw from "../lib/tailwind";

export default function ActionCategoryBtn({
  categories,
  currentCategory,
  setCurrentCategory,
}) {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={900}
      horizontal
      style={tw` flex flex-row gap-x-5   mb-5`}
    >
      <View style={tw`flex py-4 flex-row gap-x-3`}>
        {[
          categories.map((category) => (
            <View key={category}>
              <Button
                variant={category === currentCategory ? "light" : "default"}
                height="30"
                textStyle={tw`text-sm`}
                text={category}
                onPress={() => setCurrentCategory(category)}
              />
            </View>
          )),
        ]}
      </View>
    </ScrollView>
  );
}
