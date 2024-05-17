import React from "react";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import tw from "../../lib/tailwind";

const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />;

export default function CampaignDetailsSkeleton() {
  return (
    <MotiView
      transition={{
        type: "timing",
      }}
      style={tw`p-4  shadow my-3 flex  gap-y-5 `}
    >
      <MotiView
        style={tw`bg-white w-full rounded-md shadow my-3 flex  gap-x-2 `}
      >
        <Skeleton colorMode="light" width={"100%"} height={200} />
      </MotiView>
      <Spacer height={15} />
      <MotiView
        style={tw`bg-white w-full rounded-md shadow my-3 flex  gap-x-2 `}
      >
        <Skeleton colorMode="light" width={"100%"} height={200} />
      </MotiView>
    </MotiView>
  );
}
