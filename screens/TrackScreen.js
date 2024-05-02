import React, { useMemo, useRef, useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import tw from "../lib/tailwind";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CustomScrollView } from "../context/providers/ScrollContext";
import { Button } from "../components/UI/Button";
import TrackCategoryCard from "../components/TrackCategoryCard";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import TrackModal from "../components/TrackModal";
import { useTrackActions } from "../context/actions/track_actions";
import {
  shoppingOptions,
  homeOptions,
  foodAndDrinkOptions,
} from "../lib/trackOptions";
import TrackForm from "../components/TrackForm";
import TrackTravel from "../components/TrackTravel";

function TrackScreen() {
  const insets = useSafeAreaInsets();
  const { addActivity } = useTrackActions();
  const snapPoints = useMemo(() => ["80%"], []);

  const homeRef = useRef(null);
  const shoppingRef = useRef(null);
  const foodAndDrinkRef = useRef(null);
  const travelRef = useRef(null);

  function handleShowModal(ref) {
    ref?.present();
  }

  return (
    <CustomScrollView style={tw`bg-gray-50  `} screen="track">
      <View style={tw`p-5`}>
        <View style={tw`mb-7`}>
          <View style={tw`w-full h-52 rounded-xl relative bg-white shadow`}>
            <Image
              style={tw`h-full max-h-full absolute top-0 left-0 rounded-xl flex max-w-full w-full`}
              resizeMode="cover"
              source={{
                uri: "https://cdn.pixabay.com/photo/2020/01/16/13/36/co2-4770585_1280.jpg",
              }}
            />

            <View
              style={tw`h-full w-full flex px-5 justify-between py-3 rounded-2xl bg-black bg-opacity-50`}
            >
              <Text style={tw`text-primaryLight font-semibold text-lg`}>
                My emissions
              </Text>
              <View
                style={tw`w-full h-[155px] flex justify-center items-center `}
              >
                <View
                  style={tw`h-[130px] w-[130px] flex justify-center items-center rounded-full border-[3px] border-altColor`}
                >
                  <Text style={tw`font-semibold text-lg text-primaryLight`}>
                    2,0987kg
                  </Text>
                  <Text style={tw`text-primaryLight font-medium`}>
                    <Text style={tw`text-base `}>of C0</Text>
                    <Text style={tw`text-xs leading-3`}>2</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={tw`mb-7`}>
          <View style={tw`w-full h-20 rounded-lg relative bg-white shadow`}>
            <Image
              style={tw`h-full max-h-full absolute top-0 left-0 rounded-lg flex max-w-full w-full`}
              resizeMode="cover"
              source={{
                uri: "https://cdn.pixabay.com/photo/2020/07/24/01/26/e-scooter-5432641_1280.jpg",
              }}
            />
            <View
              style={tw`h-full w-full flex flex-row justify-between items-center p-3 rounded-lg bg-black bg-opacity-60`}
            >
              <Text style={tw`text-primaryLight font-bold text-base `}>
                View your activities
              </Text>

              <Button
                text={"View"}
                icon={"chevron-forward-outline"}
                variant="light"
              />
            </View>
          </View>
        </View>
        <View style={tw`flex flex-row gap-4 flex-wrap w-full`}>
          <TrackCategoryCard
            category={"Home"}
            value={"22"}
            bgUrl={
              "https://cdn.pixabay.com/photo/2022/10/03/23/41/house-7497001_1280.png"
            }
            handlePress={() => handleShowModal(homeRef.current)}
          />
          <TrackCategoryCard
            category={"Travel"}
            value={"489"}
            bgUrl={
              "https://cdn.pixabay.com/photo/2012/10/10/05/04/train-60539_1280.jpg"
            }
            handlePress={() => handleShowModal(travelRef.current)}
          />
          <TrackCategoryCard
            category={"Food & Drink"}
            value={"0.00"}
            bgUrl={
              "https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_1280.jpg"
            }
            handlePress={() => handleShowModal(foodAndDrinkRef.current)}
          />
          <TrackCategoryCard
            category={"Shopping"}
            value={"789"}
            bgUrl={
              "https://cdn.pixabay.com/photo/2020/03/27/17/03/shopping-4974313_1280.jpg"
            }
            handlePress={() => handleShowModal(shoppingRef.current)}
          />
        </View>
        <TrackModal trackRef={homeRef} snapPoints={snapPoints}>
          <TrackForm
            category={"home"}
            options={homeOptions}
            heading={"Emissions from activities in your home"}
          />
        </TrackModal>
        <TrackModal trackRef={shoppingRef} snapPoints={snapPoints}>
          <TrackForm
            category={"shopping"}
            options={shoppingOptions}
            heading={"Emissions from expenses on lifestyle"}
          />
        </TrackModal>
        <TrackModal trackRef={foodAndDrinkRef} snapPoints={snapPoints}>
          <TrackForm
            category={"foodAndDrink"}
            options={foodAndDrinkOptions}
            heading={"Emissions from food and drink consumption"}
          />
        </TrackModal>
        <TrackModal trackRef={travelRef} snapPoints={snapPoints}>
          <TrackTravel />
        </TrackModal>
      </View>
    </CustomScrollView>
  );
}

export default TrackScreen;
