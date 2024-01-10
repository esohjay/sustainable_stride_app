import { View, Text, Image } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import tw from "../lib/tailwind";
import ChartCenter from "../components/ChartCenter";
import { CustomScrollView } from "../context/providers/ScrollContext";
import { Button } from "../components/UI/Button";

function EstimateScreen() {
  const data = [
    { value: 24, color: "#177AD5", text: "24%", name: "Home" },
    { value: 30, color: "#136f63", text: "30%", name: "Travel" },
    { value: 20, color: "#582f0e", text: "20%", name: "Shopping" },
    { value: 26, color: "#ED6665", text: "26%", name: "Food & Drink" },
  ];
  const val = Math.random() * 100 + 1;
  return (
    <CustomScrollView style={tw`bg-gray-50`} screen="estimate">
      <View style={tw`p-5 w-full flex items-center`}>
        <View>
          <PieChart
            donut
            data={data}
            radius={120}
            // showText
            // textColor="black"
            // textSize={10}
            // showTextBackground
            // textBackgroundRadius={20}
            innerRadius={87}
            innerCircleColor={"#FFF7F2"}
            centerLabelComponent={() => {
              return <ChartCenter value={val.toFixed(2)} />;
            }}
          />
        </View>
        <View style={tw`flex flex-row py-5 gap-x-3`}>
          <View
            style={tw`flex items-center w-[45%] rounded-lg bg-[#EDE4F1] px-3 py-2`}
          >
            <Text style={tw`text-[#51315E] text-xl font-bold`}>26% more</Text>
            <Text style={tw`text-[#51315E] font-semibold text-xs`}>
              than British average
            </Text>
          </View>
          <View
            style={tw`flex items-center w-[45%] rounded-lg bg-[#D6F8FF] px-3 py-2`}
          >
            <Text style={tw`text-[#004452] text-xl font-bold`}>52% more</Text>
            <Text style={tw`text-[#004452] font-semibold text-xs`}>
              than Global average
            </Text>
          </View>
        </View>
        <View style={tw`flex flex-row gap-4 flex-wrap w-full`}>
          {data.map((item) => (
            <View
              key={item.name}
              style={tw`shadow bg-[${item.color}] h-40 w-[47%] flex px-5 justify-end py-3 rounded-xl relative`}
            >
              <View style={tw`flex gap-y-4`}>
                <Text style={tw`text-primaryLight font-extrabold text-lg`}>
                  {item.name}
                </Text>
                <View>
                  <Text style={tw`text-xl font-bold text-primaryLight`}>
                    {item.value}%
                  </Text>
                  <Text style={tw`text-primaryLight font-semibold`}>
                    <Text style={tw`text-base `}>of overall C0</Text>
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

              <Button text={"Update"} icon={"create"} variant="light" />
            </View>
          </View>
        </View>
      </View>
    </CustomScrollView>
  );
}

export default EstimateScreen;
