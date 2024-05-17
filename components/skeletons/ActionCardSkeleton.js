import React from "react";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import tw from "../../lib/tailwind";

const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />;

export default function ActionCardSkeleton() {
  return (
    <MotiView
      transition={{
        type: "timing",
      }}
      style={tw`bg-white p-4 rounded-md shadow my-3 flex  gap-x-2 `}
    >
      <Skeleton colorMode="light" width={"80%"} height={13} />
      <Spacer height={8} />
      <MotiView style={tw`flex flex-row  gap-x-2 items-center`}>
        <Skeleton colorMode="light" width={50} height={20} radius={"round"} />
        <Skeleton colorMode="light" width={50} height={20} radius={"round"} />
        <Skeleton colorMode="light" width={50} height={20} radius={"round"} />
      </MotiView>
      <Spacer height={10} />
      <Skeleton colorMode="light" width={"100%"} height={8} />
      <Spacer height={10} />
      <Skeleton colorMode="light" width={"100%"} height={8} />
      <Spacer height={10} />
      <MotiView style={tw`flex flex-row  gap-x-2 justify-between items-center`}>
        <Skeleton colorMode="light" width={70} height={25} radius={"round"} />
        <Skeleton colorMode="light" width={70} height={25} radius={"round"} />
      </MotiView>
    </MotiView>
  );
}
