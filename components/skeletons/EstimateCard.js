import React from "react";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import tw from "../../lib/tailwind";

const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />;

export default function EstimateCard({ loadingState }) {
  return (
    <MotiView
      transition={{
        type: "timing",
      }}
      style={tw`bg-white p-4 rounded-md shadow my-3 flex justify-center items-center`}
      // animate={{
      //   backgroundColor: "#ffffff",
      //   padding: 10,
      //   borderRadius: 16,
      // }}
    >
      <Skeleton colorMode="light" show={loadingState} height={20} width={125} />
      <Spacer />
      <Skeleton colorMode="light" show={loadingState} height={13} width={250} />
      <Spacer height={8} />
      <Skeleton colorMode="light" show={loadingState} height={13} width={250} />
      <Spacer height={8} />
      <Skeleton colorMode="light" show={loadingState} width={"40%"} />
      <Spacer height={8} />
    </MotiView>
  );
}
