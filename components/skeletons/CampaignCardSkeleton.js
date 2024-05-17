import React from "react";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import tw from "../../lib/tailwind";

const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />;

export default function CampaignCardSkeleton() {
  return (
    <MotiView
      transition={{
        type: "timing",
      }}
      style={tw`bg-white p-4 rounded-md shadow my-3 flex  gap-x-2 `}
    >
      <MotiView style={tw`flex flex-row  gap-x-2 items-center`}>
        <Skeleton colorMode="light" width={50} height={50} radius={"round"} />
        <Skeleton colorMode="light" width={120} height={10} />
      </MotiView>
      <Spacer height={10} />
      <Skeleton colorMode="light" width={"100%"} height={8} />
      <Spacer height={10} />
      <Skeleton colorMode="light" width={"100%"} height={8} />
      <Spacer height={10} />
      <Skeleton colorMode="light" width={50} height={25} radius={"round"} />
    </MotiView>
  );
}
