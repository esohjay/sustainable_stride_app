import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import tw from "../lib/tailwind";
import ChartCenter from "../components/ChartCenter";
import { CustomScrollView } from "../context/providers/ScrollContext";
import { Button } from "../components/UI/Button";
import { useAuthContext } from "../context/providers/AuthProvider";
import { useAuthActions } from "../context/actions/auth_actions";
import { calculatePercentageDifference } from "../lib/footprintPercentDiff";

function EstimateScreen({ navigation }) {
  const { getProfile } = useAuthActions();
  const [surveyCategory, setSurveyCategory] = useState([]);
  const [percentageDifference, setPercentageDifference] = useState({
    uk: "",
    world: "",
  });
  const [colors, setColors] = useState([
    "#177AD5",
    "#136f63",
    "#582f0e",
    "#ED6665",
  ]);
  const ukAverageEmission = 10;
  const worldAverageEmission = 4.76;
  const { state } = useAuthContext();
  const { profile } = state;
  useEffect(() => {
    if (!profile) {
      getProfile();
    }
  }, [profile]);
  useEffect(() => {
    if (profile) {
      let categoryData = [];
      let index = 0;
      for (const [category, categoryValue] of Object.entries(
        profile.emissionCategory
      )) {
        const percent = ((categoryValue / profile.totalEmission) * 100).toFixed(
          1
        );
        const value = (categoryValue / 1000).toFixed(2);
        categoryData.push({
          value: parseFloat(value),
          name: category,
          text: `${percent}%`,
          color: colors[index],
        });
        index++;
      }
      setSurveyCategory(categoryData);
      setPercentageDifference({
        uk: calculatePercentageDifference(
          ukAverageEmission,
          profile.totalEmission / 1000
        ),
        world: calculatePercentageDifference(
          worldAverageEmission,
          profile.totalEmission / 1000
        ),
      });
    }
  }, [profile]);
  console.log(surveyCategory);
  const data = [
    { value: 24, color: "#177AD5", text: "24%", name: "Home" },
    { value: 30, color: "#136f63", text: "30%", name: "Travel" },
    { value: 20, color: "#582f0e", text: "20%", name: "Shopping" },
    { value: 26, color: "#ED6665", text: "26%", name: "Food & Drink" },
  ];
  const val = Math.random() * 100 + 1;
  console.log(state);
  return (
    <CustomScrollView style={tw`bg-gray-50`} screen="estimate">
      <View style={tw`p-5 w-full flex items-center`}>
        <View>
          <PieChart
            donut
            data={surveyCategory}
            radius={120}
            // showText
            // textColor="black"
            // textSize={10}
            // showTextBackground
            // textBackgroundRadius={20}
            innerRadius={87}
            innerCircleColor={"#FFF7F2"}
            centerLabelComponent={() => {
              return (
                <ChartCenter
                  value={(profile?.totalEmission / 1000).toFixed(2)}
                />
              );
            }}
          />
        </View>
        <View style={tw`flex flex-row py-5 gap-x-3`}>
          <View
            style={tw`flex items-center w-[45%] rounded-lg bg-[#EDE4F1] px-3 py-2`}
          >
            <Text style={tw`text-[#51315E] text-base font-bold`}>
              {percentageDifference.uk}
            </Text>
            <Text style={tw`text-[#51315E] font-semibold text-xs`}>
              than British average
            </Text>
          </View>
          <View
            style={tw`flex items-center w-[45%] rounded-lg bg-[#D6F8FF] px-3 py-2`}
          >
            <Text style={tw`text-[#004452] text-base font-bold`}>
              {percentageDifference.world}
            </Text>
            <Text style={tw`text-[#004452] font-semibold text-xs`}>
              than Global average
            </Text>
          </View>
        </View>
        <View style={tw`flex flex-row gap-4 flex-wrap w-full`}>
          {surveyCategory.length > 0 &&
            surveyCategory.map((item, i) => (
              <View
                key={i}
                style={tw`shadow bg-[${colors[i]}] h-40 w-[47%] flex px-5 justify-end py-3 rounded-xl relative`}
              >
                <Text style={tw`text-primaryLight font-extrabold text-lg`}>
                  {item.name}
                </Text>
                <Text style={tw`text-base font-bold text-primaryLight`}>
                  {item.value} tonnes
                </Text>
                <View style={tw`flex gap-y-2 mt-4`}>
                  <View>
                    <Text style={tw`text-sm font-bold text-primaryLight`}>
                      {item.text}
                    </Text>
                    <Text style={tw`text-primaryLight font-semibold`}>
                      <Text style={tw`text-sm `}>of overall C0</Text>
                      <Text style={tw`text-xs leading-3`}>2</Text>
                    </Text>
                  </View>
                </View>
              </View>
            ))}
        </View>
        <View style={tw`py-3 w-full`}>
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
                Update survey
              </Text>

              <Button
                text={"Update"}
                icon={"create"}
                variant="light"
                onPress={() => navigation.navigate("Survey")}
              />
            </View>
          </View>
        </View>
      </View>
    </CustomScrollView>
  );
}

export default EstimateScreen;
